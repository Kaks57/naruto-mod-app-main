import { Clock, Calendar, Book, Zap } from "lucide-react";

const Channel4 = () => {
  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-primary/30">
        <h1 className="text-4xl font-bold text-primary crt-flicker">
          Disponibilités & Connaissances
        </h1>
        <p className="text-muted-foreground font-mono">Chaîne 4 - Mes atouts</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Availability */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary flex items-center gap-3">
            <Clock className="w-7 h-7" />
            ► HORAIRES QUOTIDIENS
          </h3>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <div className="space-y-3 text-foreground/90">
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span><strong>Tous les jours:</strong> 11h - 2h du matin</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Tickets traités rapidement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Très haute disponibilité</span>
              </div>
            </div>
          </div>

          <div className="bg-card/30 p-5 rounded-lg border border-secondary/30">
            <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
              ► FLEXIBILITE
            </h4>
            <div className="space-y-2 text-sm text-foreground/80">
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Adaptation aux besoins serveur</span>
              </div>
           
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Réactivité optimale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Naruto Knowledge */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary flex items-center gap-3">
            <Book className="w-7 h-7" />
            ► EXPERTISE UNIVERS
          </h3>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <div className="space-y-3 text-foreground/90">
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Naruto regardé 2 fois complètement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Actuellement sur Boruto</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-secondary mt-1">-</span>
                <span>Connaissance approfondie des règles</span>
              </div>
            </div>
          </div>

        
              
            </div>
          </div>
        </div>
   
  );
};

export default Channel4;
