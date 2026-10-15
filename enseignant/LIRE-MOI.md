# Tableau de bord enseignant — démonstration

Ouvrir index.html dans un navigateur (aucune installation nécessaire).

Cette version fonctionne hors ligne avec 32 parcours de navigateurs fictifs et des tentatives simulées. Les énoncés proviennent des QCM du site. Elle n'utilise ni Supabase ni les données locales des étudiants. Aucun service de statistiques n'est activé.

Fonctions : filtres module/période, recherche, sélection des parcours à accompagner ou sans tentative, historique individuel, taux d'erreur par question, export CSV de la sélection. Le seuil de 80 % reprend celui du site. Il ne certifie pas la maîtrise des notions. Les indicateurs sont calculés à partir des tentatives simulées ; la moyenne utilise le dernier score de chaque couple étudiant/module. Les objectifs atteints utilisent le meilleur score de la période. Les exercices et les activités guidées ne sont pas encore suivis ici.

Cette page n'est PAS protégée par authentification. Ne pas y intégrer de données réelles. L'absence de lien dans la navigation étudiante ne constitue pas une protection : si ce dossier est déposé sur GitHub Pages, la démonstration sera publique. On peut conserver ce dossier uniquement sur son ordinateur et publier le reste du site.

Étape suivante : connecter une base hébergée, ajouter les comptes et les droits d'accès côté serveur, puis vérifier les accès étudiant/enseignant avant toute utilisation de données réelles. L'historique actuellement conservé dans les navigateurs n'est pas transféré automatiquement.

## Suivi sans nom et centralisation prévue

Le prototype représente des parcours pseudonymes P001, P002… et des consultations simulées par jour et par module. Sans authentification, un identifiant de navigateur ne correspond pas nécessairement à un étudiant et ne permet pas de distinguer le groupe des visiteurs extérieurs. Plusieurs appareils peuvent produire plusieurs parcours. Une suppression des données du navigateur crée également une rupture de suivi.

L'absence de nom et de mail ne rend pas un historique individuel anonyme. Il faudra définir les modalités d'information, les durées de conservation et le cadre applicable à la collecte. La mesure d'audience et le suivi pédagogique sont deux finalités distinctes ; une exemption propre à la mesure d'audience ne couvre pas automatiquement les historiques de réponses.

Aucune collecte n'est installée dans les pages étudiantes. La centralisation nécessitera le projet hébergé, un point d'entrée contrôlant les événements, une protection contre les envois abusifs et un accès enseignant authentifié. Les éventuels journaux techniques du prestataire (notamment IP) devront être pris en compte. Ne jamais publier une clé secrète ou les historiques individuels dans le dépôt GitHub.
