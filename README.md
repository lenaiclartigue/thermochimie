# Thermochimie — site GitHub Pages à pages séparées

Chaque page possède son propre fichier HTML. Le texte des leçons et les quiz sont directement dans le fichier du module, sans fichier cours.js ni chargement de données.

## Fichiers à déposer à la racine du dépôt

- index.html : accueil et liste des modules.
- module-01.html à module-08.html : un fichier par module.
- style.css : présentation commune.
- app.js : fonctions communes des quiz et laboratoires.
- LICENSE.md : conditions de consultation et réutilisation.
- NOTES_PEDAGOGIQUES.md : points à relire dans les supports sources.

Conserver Settings → Pages → Deploy from a branch → main → /(root).
Remplacer les anciens index.html, app.js, style.css et README.md. Ajouter les huit pages. L’ancien cours.js peut être supprimé ; il n’est plus utilisé. Ne pas déposer uniquement l’archive ZIP.

## Modifier une leçon

Ouvrir le HTML du module concerné. Le bloc pane-course contient les paragraphes, formules, exemples et l’application. Les commentaires HTML indiquent les zones de modification. Les blocs pane-quiz et pane-td contiennent le quiz et la préparation des TD.

Pour une question de quiz, modifier l’intitulé, les options, data-correct (0 = première réponse, 1 = deuxième, etc.) et data-explanation. Pour une application numérique, modifier aussi data-answer et data-tolerance dans le formulaire.

Les calculs interactifs des laboratoires sont dans la fonction renderLab de app.js. Les styles communs se modifient dans style.css.

## Fonctionnement

Accès libre. Aucune connexion ni service externe. Progression conservée localement dans le navigateur, aucun suivi enseignant. Les étudiants peuvent ouvrir directement une page de module. Le cours reste à relire avant diffusion. Les durées sont indicatives. Le site s’ouvre aussi localement avec index.html.

Sources : cours de Mireille Le Guennec et Lénaïc Lartigue et fascicule XLG1CU040 2026–2027. Chapitre 1 prérequis ; chapitre 3 prévu en séance. Le dépôt GitHub n’a pas été modifié automatiquement.
