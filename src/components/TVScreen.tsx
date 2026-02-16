import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Power, ChevronLeft, ChevronRight } from "lucide-react";
import Channel1 from "./channels/Channel1";
import Channel2 from "./channels/Channel2";
import Channel3 from "./channels/Channel3";
import Channel4 from "./channels/Channel4";
import Channel5 from "./channels/Channel5";

const TVScreen = () => {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [currentChannel, setCurrentChannel] = useState(1);
  const [isChangingChannel, setIsChangingChannel] = useState(false);

  const channels = [
    { id: 1, component: Channel1, name: "Présentation" },
    { id: 2, component: Channel2, name: "Expérience" },
    { id: 3, component: Channel3, name: "Motivations" },
    { id: 4, component: Channel4, name: "Disponibilités" },
    { id: 5, component: Channel5, name: "Informations" },
  ];

  const handlePowerToggle = () => {
    setIsPoweredOn(!isPoweredOn);
    if (!isPoweredOn) {
      setCurrentChannel(1);
    }
  };

  const changeChannel = (direction: "next" | "prev") => {
    setIsChangingChannel(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrentChannel((prev) => (prev >= channels.length ? 1 : prev + 1));
      } else {
        setCurrentChannel((prev) => (prev <= 1 ? channels.length : prev - 1));
      }
      setIsChangingChannel(false);
    }, 150);
  };

  const CurrentChannelComponent = channels.find((ch) => ch.id === currentChannel)?.component || Channel1;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* TV Set */}
      <div className="relative">
        {/* TV Wood Frame */}
        <div className="relative bg-tv-wood rounded-3xl p-8 shadow-2xl" 
             style={{ background: "var(--gradient-wood)" }}>
          
          {/* TV Screen Container */}
          <div className="relative bg-tv-screen-off rounded-2xl p-6 border-4 border-card/30">
            
            {/* Screen */}
            <div className={`
              relative overflow-hidden rounded-xl
              ${isPoweredOn ? "tv-glow scanlines" : ""}
              transition-all duration-500
            `}
              style={{
                width: "clamp(320px, 80vw, 900px)",
                height: "clamp(400px, 60vh, 600px)",
                background: isPoweredOn ? "hsl(var(--tv-screen-off))" : "hsl(220 15% 5%)"
              }}>
              
              {/* Screen Content */}
              {isPoweredOn ? (
                <div className={`
                  h-full w-full p-8 overflow-y-auto
                  ${isChangingChannel ? "channel-change" : "power-on"}
                `}>
                  <CurrentChannelComponent />
                </div>
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-tv-phosphor rounded-full opacity-20"></div>
                </div>
              )}
            </div>

            {/* Channel Display */}
            {isPoweredOn && (
              <div className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/30">
                <span className="text-primary font-mono text-sm">
                  CH {currentChannel} - {channels.find(ch => ch.id === currentChannel)?.name}
                </span>
              </div>
            )}
          </div>

          {/* TV Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* Power Button */}
            <Button
              onClick={handlePowerToggle}
              className={`
                rounded-full w-16 h-16 p-0
                ${isPoweredOn 
                  ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50" 
                  : "bg-muted hover:bg-muted/80"
                }
                transition-all duration-300
              `}
            >
              <Power className="w-6 h-6" />
            </Button>

            {/* Channel Controls */}
            {isPoweredOn && (
              <div className="flex gap-2 bg-card/50 backdrop-blur-sm rounded-full p-2 border border-border">
                <Button
                  onClick={() => changeChannel("prev")}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-1 px-3">
                  {channels.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setIsChangingChannel(true);
                        setTimeout(() => {
                          setCurrentChannel(ch.id);
                          setIsChangingChannel(false);
                        }, 150);
                      }}
                      className={`
                        w-2 h-2 rounded-full transition-all
                        ${currentChannel === ch.id 
                          ? "bg-primary w-6" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }
                      `}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => changeChannel("next")}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Brand Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <span className="text-foreground/30 font-mono text-xs tracking-wider">RETRO-TV FOC JJK</span>
          </div>
        </div>

        {/* Ambient Glow */}
        {isPoweredOn && (
          <div 
            className="absolute inset-0 -z-10 blur-3xl opacity-30 rounded-full"
            style={{
              background: `radial-gradient(circle, hsl(var(--tv-screen-glow)) 0%, transparent 70%)`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TVScreen;
