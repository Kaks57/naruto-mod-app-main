import { Info, Mail, User, MapPin, FileText, Link as LinkIcon } from "lucide-react";


const Channel5 = () => {
  return (
    <div className="space-y-6 text-foreground">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-primary/30">
        <h1 className="text-4xl font-bold text-primary crt-flicker">
          Informations Complémentaires
        </h1>
        <p className="text-muted-foreground font-mono">Chaîne 5 - Récapitulatif</p>
      </div>

      {/* Content */}
<div className="space-y-6">
  {/* Contact Info */}
  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-3">
      <Info className="w-6 h-6" />
      Coordonnées
    </h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-foreground/90">
        <Mail className="w-5 h-5 text-secondary" />
        <span className="font-mono">kmahtaj57@gmail.com</span>
      </div>
      <div className="flex items-center gap-3 text-foreground/90">
        <User className="w-5 h-5 text-secondary" />
        <span>Discord: kais570</span>
      </div>
      <div className="flex items-center gap-3 text-foreground/90">
        <MapPin className="w-5 h-5 text-secondary" />
        <span>Village: Suna</span>
      </div>
      <div className="flex items-center gap-3 text-foreground/90">
        <FileText className="w-5 h-5 text-secondary" />
        <span>SteamID: 76561198386965030</span>
      </div>

      {/* Lien vers le ticket */}
      <div className="flex items-center gap-3 text-foreground/90">
        <a
          href="https://discord.com/channels/1196874607022571590/1437568535307092089"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <LinkIcon className="w-5 h-5 text-secondary" />
          <span>Voir le ticket Discord</span>
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Summary */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Points forts</h3>
          
          <div className="bg-card/30 p-5 rounded-lg border border-secondary/30">
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Expérience confirmée : RM sur OKIRO SOLO LEVELING</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Records établis : BDA résolus et tickets traités</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Disponibilité : Tous les jours 11h - 2h matin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Passion Solve : Connexion quotidienne 18h - 2h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Expertise Naruto : Regardé 2 fois + Boruto en cours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Expérience RP variée : Multiple serveurs différents univers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Me */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-lg mb-3 text-primary">Pourquoi moi ?</h3>
          <p className="text-foreground/90 leading-relaxed">
            Mon expérience sur OKIRO SOLO LEVELING en tant que RM, mes records de résolution de BDA et de traitement 
            de tickets IG démontrent mon efficacité. Ma présence quotidienne sur Solve (18h - 2h) et ma très haute 
            disponibilité (11h - 2h tous les jours) garantissent une modération réactive. Ma connaissance approfondie 
            de l'univers Naruto et mon expérience RP variée me permettent de comprendre tous les enjeux du serveur.
          </p>
        </div>

        {/* Final Note */}
        <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Je vous remercie d'avoir pris le temps de consulter ma candidature. 
            Je reste à votre entière disposition pour toute question ou entretien complémentaire.
          </p>
          <p className="text-primary font-semibold mt-4">
            En espérant avoir l'honneur de rejoindre votre équipe,
          </p>
          <p className="text-muted-foreground mt-2 font-mono">
            Cordialement.
          </p>
        </div>

      </div>
   
  );
};

export default Channel5;
