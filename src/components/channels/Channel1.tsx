import { User, MapPin, Calendar, Shield } from "lucide-react";

const Channel1 = () => {
  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-primary/30">
        <h1 className="text-4xl font-bold text-primary crt-flicker">
          Présentation Personnelle
        </h1>
        <p className="text-muted-foreground font-mono">Chaîne 1 - Qui suis-je ?</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
      {/* Intro */}
      <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
        <p className="text-lg leading-relaxed">
          Bonjour à toute l'équipe de modération de Solve Naruto RP. Je me présente. Je m'appelle Kaïs et j'ai avec moi, une expérience staff/modération.
           Ma présence quotidienne sur la solve et mon investissement sur le serveur témoignent de ma motivation.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card/30 p-4 rounded-lg border border-secondary/30 flex items-start gap-3 hover:bg-card/50 transition-colors">
          <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-secondary mb-1">Âge</h3>
            <p className="text-sm text-foreground/80">18 ans</p>
          </div>
        </div>

        <div className="bg-card/30 p-4 rounded-lg border border-secondary/30 flex items-start gap-3 hover:bg-card/50 transition-colors">
          <User className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-secondary mb-1">Profil</h3>
            <p className="text-sm text-foreground/80">Joueur quotidien très actif</p>
          </div>
        </div>

        <div className="bg-card/30 p-4 rounded-lg border border-secondary/30 flex items-start gap-3 hover:bg-card/50 transition-colors">
          <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-secondary mb-1">Serveur</h3>
            <p className="text-sm text-foreground/80">Solve Naruto RP</p>
          </div>
        </div>

        <div className="bg-card/30 p-4 rounded-lg border border-secondary/30 flex items-start gap-3 hover:bg-card/50 transition-colors">
          <Shield className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-secondary mb-1">Casier</h3>
            <p className="text-sm text-foreground/80">Aucun warn</p>
          </div>
        </div>
      </div>

      {/* Passion Solve */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-5 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-lg mb-3 text-primary flex items-center gap-2">
          ► PASSION SOLVE
        </h3>
        <p className="text-foreground/90 leading-relaxed">
          Connexion quotidienne 18h pile jusqu'à 2h du matin, depuis maintenant une série de 85jours d'affilés connecté sur la solve. Whitelist depuis Mars dernier, Membre actif et investi dans la communauté depuis le début.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Channel1;
