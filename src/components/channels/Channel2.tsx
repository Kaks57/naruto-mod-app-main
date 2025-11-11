import { Award, Users, MessageSquare, CheckCircle } from "lucide-react";

const Channel2 = () => {
  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-primary/30">
        <h1 className="text-4xl font-bold text-primary crt-flicker">
          Expérience en Modération
        </h1>
        <p className="text-muted-foreground font-mono">Chaîne 2 - Mon parcours</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Main Experience STAFF */}
        <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                ► EXPERIENCE STAFF
              </h3>
              <div className="space-y-3 text-foreground/90">
                <div className="flex items-start gap-2">
                  <span className="text-secondary mt-1">-</span>
                  <span><strong>OKIRO SOLO LEVELING:</strong> Support ► Modérateur ► MS ► RM  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary mt-1">-</span>
                  <span>Plus grand nombre de BDA résolus</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary mt-1">-</span>
                  <span>Record de tickets IG traités ( 117 tickets résolu le jour de l'open du serv/ Environ 50 ticket/semaine) </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary mt-1">-</span>
                  <span>Expérience modération confirmée</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience RP */}
        <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
            ► EXPERIENCE RP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/90">
            <div className="flex items-start gap-2">
              <span className="text-secondary">-</span>
              <span>OKIRO SOLO LEVELING</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary">-</span>
              <span>SOLVE</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary">-</span>
              <span>SDA / ALL BLUE</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary">-</span>
              <span>FSC / RYUKAI WL/FA / FOC (Tokyo Ghoul/ Naruto)</span>
            </div>
          </div>
          <p className="text-foreground/80 mt-4 italic">Variété d'univers maîtrisée</p>
        </div>

        {/* Records */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-lg mb-3 text-primary">Résultats concrets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card/30 p-4 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <h4 className="font-semibold text-secondary">BDA résolus</h4>
              </div>
              <p className="text-sm text-foreground/80">
                Plus grand nombre de BDA résolus sur OKIRO SOLO LEVELING ( J'aime beaucoup régler les soucis en BDA, je trouve sa mieux)
              </p>
            </div>

            <div className="bg-card/30 p-4 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-secondary" />
                <h4 className="font-semibold text-secondary">Tickets traités</h4>
              </div>
              <p className="text-sm text-foreground/80">
                Record de tickets IG traités - réactivité ✅
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel2;
