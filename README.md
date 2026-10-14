# Thermochimie · Licence

Version du 14 octobre 2026 : site statique à pages séparées, forums intégrés, résultats locaux, guide d’utilisation et conditions en fenêtre modale.

Cours asynchrone du chapitre 2 de XLG1CU040. Conception du parcours : Lénaïc Lartigue. Le chapitre 1 est un prérequis ; le chapitre 3 reste prévu en séance.

## Pages et fichiers

| Fichier | Fonction |
| --- | --- |
| index.html | Accueil et liste des huit modules |
| module-01.html à module-08.html | Cours, applications, laboratoires, quiz, discussions et préparation des TD |
| forum.html | Forum général intégré au site |
| resultats.html | Historique local, détail de la dernière tentative et export des réponses et scores |
| aide.html | Guide « Utiliser le site » destiné aux étudiants |
| style.css | Présentation commune |
| app.js | Navigation des onglets, calculs interactifs, quiz, enregistrement local, fenêtres et chargement du forum |
| giscus-config.js | Identifiants publics du dépôt et de la catégorie GitHub Discussions |
| LICENSE.md | Conditions d’utilisation et citation |
| conditions.js | Texte de ces mêmes conditions affiché dans la fenêtre du site |
| NOTES_PEDAGOGIQUES.md | Points de relecture des documents sources |
| .nojekyll | Désactivation de Jekyll pour l’hébergement statique |

Le site comporte 12 pages HTML. Les textes et les questions des huit modules sont directement dans leurs fichiers HTML. Il n’utilise plus cours.js. L’encart « Fil conducteur » et la rubrique pédagogique « Comment travailler » ont été retirés. « Utiliser le site » explique uniquement les fonctionnalités disponibles.

## Publication et mises à jour

Toutes les livraisons sont des archives complètes et cumulatives. Utiliser uniquement la plus récente, la décompresser, puis déposer tous ses fichiers à la racine du dépôt lenaiclartigue/thermochimie, en remplaçant les versions précédentes. Ne pas déposer uniquement le ZIP. L’ancien cours.js peut être supprimé.

Dans GitHub : Settings → Pages → Deploy from a branch → main → /(root).
Le site est accessible à https://lenaiclartigue.github.io/thermochimie/ après un déploiement réussi. Vérifier le dernier déploiement dans Actions si une mise à jour n’apparaît pas, puis recharger la page sans cache si nécessaire.

Aucun serveur supplémentaire n’est nécessaire pour le cours et les quiz. Le service externe giscus est utilisé uniquement pour les commentaires. Il n’existe pas de compte étudiant propre au site ni de stockage central des résultats.

## Modifier le contenu

Ouvrir le HTML du module concerné. Le bloc pane-course contient les leçons, formules, exemples et application numérique. Les commentaires HTML indiquent les zones de modification. pane-quiz contient les questions ; pane-td contient les références aux TD.

Pour une question de quiz, modifier son intitulé, ses options, data-correct (0 = première réponse, 1 = deuxième, etc.) et data-explanation. Pour une application numérique, modifier aussi data-answer et data-tolerance dans son formulaire. Garder les attributs id utilisés par app.js.

Les paramètres et les calculs des laboratoires se trouvent dans renderLab, dans app.js. Les styles communs se modifient dans style.css.

## Quiz et données locales

Chaque module comporte cinq questions. Le bouton « Valider mes réponses » affiche le score et les explications. L’étudiant peut recommencer ; le meilleur score de chaque module est conservé pour la progression. Un seuil de 80 % est un repère d’entraînement, pas une note officielle.

Les choix de la dernière tentative validée sont restaurés lorsque l’étudiant revient sur le module. L’historique conserve au maximum 100 tentatives corrigées, avec date, réponses et score. « Recommencer » retire les choix mémorisés du module pour une nouvelle tentative, sans supprimer l’historique ni le meilleur score.

resultats.html affiche cet historique et le détail de la dernière tentative. Le bouton de téléchargement exporte toutes les tentatives conservées au format JSON. Un nom facultatif peut être ajouté à l’export ; il n’est pas envoyé au serveur. L’étudiant choisit ensuite de transmettre son fichier par mail.

Les résultats restent dans le navigateur et sur l’appareil utilisés. Ils ne sont pas synchronisés entre appareils et ne sont pas transmis automatiquement à l’enseignant. Si le stockage du navigateur est bloqué ou effacé, la sauvegarde peut être indisponible ou perdue. « Ma progression » ouvre une fenêtre permettant d’effacer les réponses, scores et tentatives locales. Ces exports sont déclaratifs, pas des évaluations certifiées.

## Forums intégrés

forum.html affiche le fil général. Chaque module possède aussi un onglet Discussion. Le bouton « Afficher les échanges » charge le forum giscus dans la page. Il n’y a plus de lien de navigation envoyant le lecteur vers GitHub.

Configuration actuelle :

- dépôt : lenaiclartigue/thermochimie ;
- identifiant : R_kgDOVHuUzw ;
- catégorie : Announcements ;
- identifiant de catégorie : DIC_kwDOVHuUz84DIZGT ;
- correspondance : pathname, avec correspondance stricte ;
- langue française, thème clair, zone de commentaire en haut.

Ces identifiants sont publics ; aucun jeton secret ne doit être ajouté. L’application giscus et GitHub Discussions doivent rester autorisés sur le dépôt. Les messages sont stockés dans GitHub Discussions, pas dans les fichiers du site. Remplacer les fichiers HTML ne supprime pas les commentaires. Conserver les noms et chemins des pages pour retrouver leurs fils.

Les étudiants peuvent lire les messages dans le site. Pour participer, ils doivent avoir un compte GitHub et autoriser giscus. Cette connexion peut ouvrir une fenêtre GitHub, puis les échanges restent affichés dans la page. Les messages sont publics. Le mail et les séances à distance restent possibles. Ne pas utiliser le forum pour collecter des scores nominatifs.

## Conditions affichées dans le site

Le bouton « Conditions d’utilisation et citation » du pied de page ouvre une fenêtre du site avec une croix de fermeture. La touche Échap et le clic sur le fond permettent aussi de la fermer. Il n’ouvre plus LICENSE.md dans une autre interface.

LICENSE.md et conditions.js contiennent exactement le même texte. Après une modification des conditions, mettre aussi à jour la chaîne window.THERMO_CONDITIONS dans conditions.js. Le texte explique l’usage personnel autorisé, la demande d’accord pour les autres réutilisations et la référence à utiliser pour citer le site. Les droits réservés ne sont pas présentés comme une licence Creative Commons ou open source.

## Guide et vérifications

La page aide.html explique les onglets, la validation des quiz, l’historique, l’export, les forums, l’impression et les fenêtres de progression et de conditions. Elle est accessible depuis la navigation et le pied de page.

Les liens locaux, les identifiants HTML, la syntaxe JavaScript et l’identité du texte des conditions ont été vérifiés lors de cette livraison. Le rendu de la nouvelle fenêtre et du guide reste à contrôler dans le navigateur après publication. Le contenu pédagogique reste à relire avant diffusion aux étudiants ; les durées sont indicatives.
