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

## Forum du cours

Les liens du site pointent vers https://github.com/lenaiclartigue/thermochimie/discussions . Si le nom du dépôt est différent, modifier cette adresse dans les pages HTML.

Activation par le propriétaire du dépôt : Settings → General → Features → Discussions (ou Set up discussions). Puis, dans Discussions, utiliser une catégorie de type Questions & Answers, permettant de marquer une réponse comme réponse retenue. Les étudiants ont besoin d’un compte GitHub pour participer ; le mail et les séances à distance restent possibles.

Les liens ont été intégrés au site. L’activation dans le compte GitHub n’a pas été effectuée par l’assistant, qui ne dispose pas d’une connexion à ce compte dans cette session. Aucun message n’a été publié sur le forum.

## Introduction pédagogique

Le bloc d’accueil est centré sur l’enthalpie, avec ΔH = Qp et ses conditions d’application. Le premier principe et l’énergie interne restent expliqués dans les modules correspondants.

## Forum intégré giscus

Une cinquième section Discussion est ajoutée à chaque module. Le chargement du service externe commence après un clic sur Afficher les échanges. Chaque module possède un fil stable, identifié par « Thermochimie · Module XX ». Les messages sont stockés dans GitHub Discussions et sont publics.

Pour activer : autoriser https://github.com/apps/giscus sur le dépôt du cours, puis ouvrir https://giscus.app/fr . Saisir lenaiclartigue/thermochimie, sélectionner une catégorie de commentaires, et récupérer les valeurs data-repo-id, data-category et data-category-id dans le script généré. Les reporter dans giscus-config.js. Ces identifiants sont publics ; aucun jeton secret n’est à fournir. La catégorie de type Announcements est recommandée par giscus. Tant que les identifiants manquent, aucun script externe n’est chargé et un lien GitHub reste proposé.

Cette autorisation sur le compte GitHub n’a pas été réalisée par l’assistant. La connexion réelle à giscus reste à tester après configuration.

## Enregistrement des quiz

Les choix de la dernière tentative sont conservés par module. Chaque correction enregistre date, réponses et score dans l’historique local, limité à 100 tentatives. resultats.html permet de voir ce bilan et de télécharger un export JSON pouvant être transmis par mail. Les meilleurs scores alimentent la progression. Aucun nom n’est exigé pour s’entraîner ; le nom facultatif saisi lors de l’export figure uniquement dans le fichier téléchargé.

Il n’y a pas de stockage central ni de tableau de résultats de classe. Le forum public ne doit pas être utilisé pour collecter les notes nominatives. Une collecte automatique serait une fonctionnalité distincte nécessitant un stockage supplémentaire.
