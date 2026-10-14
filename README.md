# Thermochimie · Licence

Version du 14 octobre 2026 : accueil sous forme de page de garde, six parties cliquables, forums intégrés, scores locaux, guide et licence CC BY-NC-ND 4.0 pour les contenus pédagogiques originaux.

Conception du parcours : Lénaïc Lartigue. Le chapitre 1 est un prérequis ; le chapitre 3 reste prévu en séance.

## Les six parties

| Page | Partie |
| --- | --- |
| systeme.html | Décrire un système |
| premier-principe.html | Premier principe, travail et chaleur |
| enthalpie.html | Enthalpie |
| enthalpie-reaction.html | Enthalpie de réaction |
| hess.html | Cycles de Hess |
| calorimetrie.html | Calorimétrie |

index.html présente le titre « Thermochimie » et six encarts cliquables. Il explique les deux voies pour déterminer une enthalpie de réaction : calcul à partir de données tabulées et de cycles de Hess ; mesure expérimentale par calorimétrie.

Les contenus antérieurs sont conservés et regroupés pour cette étape. La répartition et le contenu détaillé restent à discuter avec l’enseignant. Cette version comprend les mêmes 40 questions et huit activités interactives. Les deux parties regroupant deux anciens modules ont dix questions ; les quatre autres en ont cinq. Un sélecteur permet de choisir entre les activités des parties regroupées.

## Fichiers communs

- forum.html : forum général intégré au site.
- resultats.html : réponses et scores locaux, export de l’historique.
- aide.html : guide « Utiliser le site ».
- app.js : interactions, quiz, sauvegarde locale et fenêtres.
- style.css : présentation.
- giscus-config.js : configuration publique des commentaires.
- LICENSE.md et conditions.js : même texte de licence et citation, affiché dans une fenêtre avec croix.
- NOTES_PEDAGOGIQUES.md : points de relecture des supports.
- .nojekyll : site statique sans Jekyll.

## Publication

Cette archive est complète et cumulative. Décompresser puis déposer tous ses fichiers à la racine du dépôt lenaiclartigue/thermochimie, en remplaçant les versions précédentes. Conserver Settings → Pages → Deploy from a branch → main → /(root).

Les anciens module-01.html à module-08.html et cours.js ne sont plus utilisés par cette version : ils peuvent être supprimés du dépôt. Tant qu’ils restent présents, leurs anciennes adresses restent accessibles.

Le site est publié à https://lenaiclartigue.github.io/thermochimie/ après déploiement réussi. Aucun fichier n’a été envoyé automatiquement sur le compte GitHub par l’assistant.

## Modifications

Le texte et les quiz sont directement dans le HTML de chaque partie : pane-course pour le cours, pane-quiz pour les questions et pane-td pour la préparation des exercices. Pour les quiz, mettre à jour les options, data-correct (index à partir de 0) et data-explanation. Pour les applications numériques, modifier data-answer, data-tolerance et data-hint dans le formulaire concerné. Garder les identifiants et classes utilisés par app.js.

Les activités interactives se trouvent dans renderLab dans app.js ; les activités regroupées se choisissent dans le menu de l’onglet Expérimenter.

## Quiz et résultats

Le bouton « Valider mes réponses » affiche un score et les corrections. Le meilleur score de chaque partie sert de repère de progression ; 80 % n’est pas une note officielle. Les réponses validées sont restaurées dans le navigateur. Les 100 dernières tentatives sont conservées et exportables depuis Mes résultats. Aucun score n’est transmis automatiquement à l’enseignant.

Le nouveau découpage utilise des clés de stockage distinctes pour éviter de confondre les scores des anciens modules avec les nouvelles parties. Les anciennes données locales ne sont pas supprimées, mais ne sont pas affichées dans la nouvelle progression. Il n’y a ni synchronisation entre appareils ni évaluation certifiée.

## Forums

Le fil général conserve son adresse forum.html et ses commentaires. Les six nouvelles pages ont des adresses distinctes : giscus leur associe de nouveaux fils via pathname. Les anciennes discussions restent dans GitHub Discussions ; aucun commentaire n’est supprimé par cette mise à jour.

Configuration : dépôt lenaiclartigue/thermochimie, catégorie Announcements, correspondance stricte pathname, langue française, thème clair. Les identifiants publics fournis sont conservés dans giscus-config.js. Un compte GitHub est nécessaire pour participer ; le mail et les séances à distance restent possibles.

## Licence et guide

Les contenus pédagogiques originaux sont sous CC BY-NC-ND 4.0. Le partage sans modification est autorisé avec attribution et sans usage commercial. Une autorisation individuelle n’est donc pas requise pour ce partage conforme. La diffusion d’adaptations et les usages commerciaux nécessitent une autorisation distincte. Les droits tiers et les exceptions légales restent applicables ; le code n’est pas placé automatiquement sous cette licence.

Le pied de page affiche le nom de la licence. Un clic ouvre les explications et la référence de citation dans une fenêtre du site. LICENSE.md et conditions.js doivent rester identiques lorsque le texte est modifié.

Le guide Utiliser le site décrit la navigation, les quiz, les scores, les forums et les fenêtres. Le rendu visuel du nouvel accueil reste à vérifier dans le navigateur après publication ; les liens, les questions et la syntaxe ont été contrôlés localement.
