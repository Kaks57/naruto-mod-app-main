import { Heart, Target, Sparkles, TrendingUp, Users } from "lucide-react";

const Channel3 = () => {
  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-primary/30">
        <h1 className="text-4xl font-bold text-primary crt-flicker">
          Motivations
        </h1>
        <p className="text-muted-foreground font-mono">Chaîne 3 - Pourquoi moi ?</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Main Motivation */}
        <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                ► PASSION SOLVE
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Connexion quotidienne 18h pile jusqu'à 2h du matin. Ma présence constante sur Solve témoigne 
                de mon investissement réel dans cette communauté.
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary flex items-center gap-3">
            <Target className="w-7 h-7" />
            ► OBJECTIFS MODERATION
          </h3>

          <div className="grid gap-4">
            <div className="bg-card/30 p-5 rounded-lg border border-secondary/30 hover:bg-card/50 transition-colors">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Enrichir l'expérience RP</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Utiliser mon expérience pour améliorer la communauté que ce soit des joueurs bloqués jusqu'aux joueurs bannis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 p-5 rounded-lg border border-secondary/30 hover:bg-card/50 transition-colors">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Accompagner les joueurs</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Être présent pour aider les joueurs, résoudre leurs problèmes rapidement et maintenir 
                    une atmosphère saine sur le serveur.( Même si actuellement l'atmosphère est plus que saine et les staff font très bien leur travail.)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 p-5 rounded-lg border border-secondary/30 hover:bg-card/50 transition-colors">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Maintenir la qualité</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Appliquer les règles de manière juste et cohérente pour préserver la qualité du serveur 
                    et l'expérience de tous les joueurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-lg mb-3 text-primary">Engagement</h3>
          <p className="text-foreground/90 leading-relaxed">
           J'ai pu avoir une bonne expérience sur OKIRO SOLO LEVELING où j'ai détenu le record de BDA résolus et de tickets traités, 
            je suis prêt à apporter cette même rigueur et efficacité sur la Solve Naruto RP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Channel3;
