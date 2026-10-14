# Thermochimie · Licence

Version du 14 octobre 2026 : mise en interaction du diaporama du chapitre 2. Conception du parcours : Lénaïc Lartigue.

Site statique pour GitHub Pages. Les six parties suivent le cours commun : **Comprendre → QCM → Exercices → Discussion**. Les chapitres 1 et 3 ne sont pas développés ici.

## Contenu de cette version

| Fichier | Partie | Questions QCM | Activités |
| --- | --- | ---: | ---: |
| `systeme.html` | Décrire un système | 6 | 1 : compléter les définitions |
| `premier-principe.html` | Premier principe, travail et chaleur | 8 | 1 : compléter les relations |
| `enthalpie.html` | Enthalpie | 6 | 1 exercice du diaporama |
| `enthalpie-reaction.html` | Enthalpie de réaction | 8 | 2 exercices du diaporama |
| `hess.html` | Cycles de Hess | 6 | 2 exercices du diaporama |
| `calorimetrie.html` | Calorimétrie | 6 | 2 exercices du diaporama |

Les **40 questions de compréhension et les 9 activités** utilisent les notions du diaporama. Les sept exercices originaux conservent leurs données ; les énoncés sont répartis en étapes de saisie. Les huit exercices numériques supplémentaires de la version précédente ont été retirés. Dans les deux premières parties, on complète directement les définitions ou relations des diapositives.

Les ajouts théoriques hors du diaporama ont été retirés du cours et de la fiche pratique, notamment Kirchhoff, les relations de l’adiabatique réversible et la présentation détaillée de la bombe calorimétrique. Les explications mathématiques sur l’intégrale, la primitive et les rectangles sont conservées à la demande de l’enseignant. La correspondance avec les diapositives et les adaptations scientifiques sont indiquées dans `NOTES_PEDAGOGIQUES.md`.

L’accueil présente six encarts. Les deux façons de déterminer une enthalpie de réaction ouvrent vers Hess et la calorimétrie à la fin de `enthalpie-reaction.html`.

## Interactions

- Le schéma ouvert / fermé / isolé fait apparaître les échanges autorisés.
- L’illustration du travail compare quatre rectangles à un découpage réglable de 4 à 64 rectangles. La courbe reste fixe. L’explication distingue approximation par rectangles et calcul par primitive ; le cas d’une pression constante montre pourquoi un seul rectangle suffit.
- Les exercices acceptent une validation partielle, proposent des indices et une rubrique **Correction** à ouvrir volontairement.
- Les lectures facultatives sont placées dans des encarts **Pour aller plus loin** au fil de l’onglet Comprendre. `ressources.html` reste un récapitulatif. Les pages externes peuvent dépasser le programme : elles ne définissent pas le contenu évalué.

## Fichiers communs

- `fiche-pratique.html` : relations du cours, unités et aide mathématique ; impression possible.
- `integrales.html` : redirection conservée vers les intégrales dans le premier principe.
- `forum.html` : forum intégré ; `resultats.html` : bilan local et export JSON ; `aide.html` : mode d’emploi.
- `app.js` : navigation, QCM, scores et historique ; `exercices.js` : réponses et vérification des exercices ; **`interactions.js`** : schéma des systèmes et rectangles.
- `style.css` : présentation, affichage mobile et impression.
- `giscus-config.js` : configuration des discussions.
- `LICENSE.md` et `conditions.js` : conditions de réutilisation et citation, affichées dans une fenêtre du site.
- `NOTES_PEDAGOGIQUES.md`, `AUDIT_PEDAGOGIQUE.md`, `RESSOURCES_EN_LIGNE.md` : correspondances, changements et références.
- `.nojekyll` : désactivation du traitement Jekyll.

## Mettre à jour GitHub Pages

L’archive est **complète et cumulative**. Décompresser puis déposer tous les fichiers à la racine du dépôt `lenaiclartigue/thermochimie`, en remplaçant les fichiers existants. Ajouter notamment le nouveau fichier **`interactions.js`**. Ne pas déposer seulement le ZIP ni placer les fichiers dans un sous-dossier.

Conserver `Deploy from a branch → main → /(root)`. Après le déploiement GitHub, ouvrir [le site](https://lenaiclartigue.github.io/thermochimie/) et actualiser la page si nécessaire. Cette livraison ne déploie rien sur GitHub.

L’ancien `integrales.js` n’est plus utilisé ; la nouvelle illustration est dans `interactions.js`. Conserver `integrales.html` pour les anciens liens. Les anciens fichiers `module-01.html` à `module-08.html` et `cours.js` ne sont plus utilisés. Les PowerPoint, le fascicule de TD et les corrections de TD ne sont pas inclus dans l’archive.

## Modifier le site

Chaque partie possède son fichier HTML, avec les panneaux `pane-course`, `pane-quiz`, `pane-exercises` et `pane-discussion`. Les sections de cours et questions portent un attribut `data-source-slides` pour faciliter la vérification par l’enseignant ; il n’est pas affiché aux étudiants.

Pour un QCM, modifier ensemble la question, les propositions, `data-correct` (index à partir de 0) et `data-explanation`. Conserver un nom radio propre à chaque question (`q0`, `q1`, etc.). Si l’ordre ou la signification des questions change, changer aussi la version et les clés de sauvegarde dans `app.js`.

Chaque champ d’exercice comporte `data-expected`, `data-hint` et, pour un nombre, `data-tolerance`. Modifier ensemble l’énoncé, l’unité, les valeurs attendues et la correction. Les attributs HTML utilisent le point décimal. La saisie accepte la virgule, les espaces et la notation scientifique ; l’unité affichée ne doit pas être saisie. Une correction masquée reste accessible dans le code source : le site sert à l’entraînement.

Les encarts de définition utilisent `definition` ; les ressources utilisent `further-reading`. Les liens externes ouvrent un nouvel onglet et indiquent la langue.

## Sauvegarde et changement de version

Les réponses et résultats sont conservés **dans ce navigateur uniquement**, sans envoi automatique à l’enseignant ni synchronisation. Le meilleur score QCM sert de repère ; 80 % est un objectif de travail. L’historique conserve jusqu’à 100 tentatives. Les exercices conservent les dernières saisies, les étapes vérifiées et la consultation de la correction. L’export JSON rassemble les résultats locaux.

Les questions et exercices ayant changé, leurs réponses et leur progression repartent de zéro. Les anciennes tentatives QCM restent visibles, marquées « Version antérieure du quiz ». Les anciennes réponses d’exercices ne sont pas reprises dans le bilan courant.

Clés actuelles : `thermo-progress-six-slides-v3`, `thermo-answers-six-slides-v3`, `thermo-exercises-slides-v2`. L’historique conserve la clé `thermo-attempts-six-v1`. L’effacement global supprime aussi les clés de la version précédente.

## Discussions et licence

Les discussions restent affichées par giscus dans le site, après « Afficher les échanges ». Elles sont publiques et stockées dans GitHub Discussions. Un compte GitHub est nécessaire pour participer. Le dépôt, les identifiants, la catégorie `Announcements`, le mappage strict par `pathname` et les adresses des pages sont conservés.

La licence **CC BY-NC-ND 4.0** et la citation restent accessibles dans la fenêtre du site. Les conditions sont inchangées.

## Vérification

Le contenu a été rapproché du diaporama principal et les résultats des exercices ont été recalculés. Les contrôles locaux portent sur les questions, exercices, sauvegardes, export, navigation, rectangles, affichage mobile et impression. Voir `AUDIT_PEDAGOGIQUE.md`. L’authentification giscus et le déploiement public ne sont pas validés par ces contrôles locaux.
