# Thermochimie · Licence

Version auditée du 14 octobre 2026. Conception du parcours : Lénaïc Lartigue.

Site statique destiné à préparer la théorie du chapitre 2 à distance, puis à travailler les exercices et les questions en séance. Le chapitre 1 est un prérequis ; le chapitre 3 n'est pas inclus.

## Organisation

| Fichier | Partie | Questions |
| --- | --- | ---: |
| `systeme.html` | Décrire un système | 6 |
| `premier-principe.html` | Premier principe, travail et chaleur | 15 |
| `enthalpie.html` | Enthalpie | 10 |
| `enthalpie-reaction.html` | Enthalpie de réaction | 10 |
| `hess.html` | Cycles de Hess | 7 |
| `calorimetrie.html` | Calorimétrie | 8 |

L'accueil (`index.html`) présente six encarts cliquables. La distinction entre calcul à partir des données et des cycles de Hess, d'une part, et détermination expérimentale par calorimétrie, d'autre part, se trouve **à la fin du cours Enthalpie de réaction**.

Le site comprend 56 questions avec explications, huit applications numériques corrigées, neuf activités de calcul interactives et un guide des intégrales avec une somme de Riemann manipulable. Les activités sont des modèles simplifiés dont les hypothèses sont indiquées.

## Fichiers communs

- `integrales.html` et `integrales.js` : guide des intégrales, primitives et aire sous une courbe.
- `forum.html` : forum général intégré.
- `resultats.html` : historique local et export JSON.
- `aide.html` : guide « Utiliser le site ».
- `app.js` : activités, quiz, scores et fenêtres.
- `style.css` : présentation, affichage mobile et impression.
- `giscus-config.js` : configuration publique des commentaires.
- `LICENSE.md` et `conditions.js` : même texte de licence et de citation, affiché dans une fenêtre du site.
- `AUDIT_PEDAGOGIQUE.md` : audit scientifique, comparaison avec les ressources en ligne, points à corriger dans les supports et vérifications effectuées.
- `NOTES_PEDAGOGIQUES.md` : conseils de mise en œuvre du parcours.
- `.nojekyll` : désactivation du traitement Jekyll.

## Mettre à jour GitHub Pages

Cette archive est **complète et cumulative**. Décompresser et déposer son contenu à la racine du dépôt `lenaiclartigue/thermochimie`, en remplaçant les fichiers existants. Ne pas déposer seulement le ZIP ni créer un sous-dossier contenant le site.

Conserver le réglage Pages déjà utilisé : `Deploy from a branch → main → /(root)`. Après le déploiement, ouvrir [le site](https://lenaiclartigue.github.io/thermochimie/) et actualiser la page si l'ancienne version reste en cache. Aucun envoi ni déploiement sur GitHub n'a été effectué pendant cet audit.

Les anciens `module-01.html` à `module-08.html` et `cours.js` ne sont plus utilisés et peuvent être retirés du dépôt. Remplacer les fichiers actuels ne supprime pas ces anciens fichiers : leurs anciennes adresses restent accessibles tant qu'ils sont présents. Les fichiers sources PowerPoint et le fascicule de TD ne font pas partie de cette archive.

## Modifier un contenu

Chaque partie possède son propre HTML : `pane-course` pour le cours, `pane-quiz` pour les questions et `pane-td` pour la préparation des exercices. Conserver les identifiants et classes utilisés par `app.js`.

Pour un quiz, modifier les propositions, `data-correct` (numérotation à partir de 0) et `data-explanation`. Tous les groupes de boutons radio doivent garder un nom propre à la question et une réponse obligatoire. Pour une application numérique, modifier `data-answer`, `data-tolerance` et `data-hint`.

Les neuf activités sont définies dans `renderLab` dans `app.js`. Un menu de l'onglet « Expérimenter » permet de choisir entre plusieurs activités dans certaines parties.

## Scores et sauvegarde

« Valider mes réponses » affiche le score et les explications. Le meilleur score sert au repère de progression : 80 % représente un objectif pédagogique, pas une note officielle. Les réponses validées et les 100 dernières tentatives restent dans le navigateur ; l'export depuis « Mes résultats » est un fichier JSON. Aucun score n'est envoyé automatiquement à l'enseignant. Il n'y a pas de synchronisation entre appareils.

Cette révision utilise les clés `thermo-progress-six-audit-v2` et `thermo-answers-six-audit-v2`. La progression et les réponses sélectionnées repartent donc sur les questions révisées. L'historique des six parties reste sous `thermo-attempts-six-v1` ; les anciennes tentatives y sont signalées comme appartenant à une version antérieure. Les données de l'ancien découpage en huit modules ne sont pas migrées.

Le bouton « Effacer ma progression locale » supprime les réponses, les scores et l'historique des six parties de ce navigateur. « Recommencer » efface seulement les réponses sélectionnées pour une nouvelle tentative.

## Forums

Les commentaires sont stockés dans GitHub Discussions et affichés sur le site par giscus. Le chargement commence avec « Afficher les échanges ». Un compte GitHub est nécessaire pour participer ; la connexion peut ouvrir une fenêtre d'authentification. Les messages sont publics.

Le dépôt, la catégorie `Announcements`, les identifiants publics et le mappage strict `pathname` sont conservés. Les adresses des six parties et de `forum.html` ne changent pas dans cette révision : elle ne crée pas de nouveaux fils par renommage et ne supprime aucun commentaire. Les anciennes discussions liées aux huit anciens modules restent dans GitHub Discussions.

## Licence et citation

Les contenus pédagogiques originaux restent sous **CC BY-NC-ND 4.0**. Le pied de page ouvre les conditions et la citation dans une fenêtre fermable, sans quitter le site. `LICENSE.md` et le texte de `conditions.js` doivent rester identiques. Les droits des éléments tiers et le code sont traités séparément dans ce texte.

## Vérifications

Les onze pages ont été vérifiées dans Chromium 153, sur un serveur local : navigation, fenêtres, quiz, applications numériques, neuf activités, historique, export, effacement, impression et largeur mobile de 390 px. Des captures ont été examinées. Les liens et les scripts ont également été contrôlés.

Le service giscus réel, l'authentification et le site publié n'ont pas été testés pendant cet audit ; le comportement en cas d'échec de chargement du forum a été vérifié localement. Les limites pédagogiques et les incohérences des supports d'origine sont détaillées dans `AUDIT_PEDAGOGIQUE.md`.
