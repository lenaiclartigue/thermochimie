# Thermochimie · Licence

Version du 15 octobre 2026 — simplification des contenus et présentation des fractions.

Site statique pour GitHub Pages, conçu par Lénaïc Lartigue. Archive cumulative : copier son contenu à la racine du dépôt. Aucun déploiement automatique.

## Modifications du 15 octobre

- Suppression des trois compléments demandés, du bilan de vaporisation et de l’exemple d’hydrogénation H/U.
- Relation ΔrH/ΔrU expliquée uniquement dans Calorimétrie, avec renvoi depuis la fiche pratique.
- Suppression des annotations et des trois images statiques indiquées. Animations conservées.
- Suppression des renvois pédagogiques au diaporama et au fascicule dans l’interface ; les attributs techniques de traçabilité restent dans le HTML.
- Fractions affichées localement par `formules.js`, sans service externe. Les unités et contrôles de sélection restent en texte.
- Références des données dans `ressources.html#donnees`, avec liens près des valeurs. Les références de comparaison sont explicitement distinguées des sources exactes : plusieurs valeurs héritées restent à documenter.
- 40 QCM et 18 exercices conservés ; vérification des validations, bilans guidés, ordre libre de Hess, export et affichage mobile.

## Contenu de cette version

| Fichier | Partie | Questions QCM | Activités |
| --- | --- | ---: | ---: |
| `systeme.html` | Décrire un système | 6 | 3 |
| `premier-principe.html` | Premier principe, travail et chaleur | 8 | 3 |
| `enthalpie.html` | Enthalpie | 6 | 3 |
| `enthalpie-reaction.html` | Enthalpie de réaction | 8 | 3 |
| `hess.html` | Cycles de Hess | 6 | 3 |
| `calorimetrie.html` | Calorimétrie | 6 | 3 |

**40 questions de compréhension et 18 exercices**, soit trois par partie. Les sept exercices du diaporama conservent leur énoncé et leurs données. Les deux activités de restitution sont conservées et neuf entraînements courts sont ajoutés, sans indication d’origine dans l’interface.

L’accueil présente six encarts. Les deux façons de déterminer une enthalpie de réaction ouvrent vers Hess et la calorimétrie à la fin de `enthalpie-reaction.html`.

## Interactions

- Systèmes ouvert, fermé et isolé : retour des illustrations du verre, de la bouteille et du thermos, avec les flèches d’échanges. Le thermos est un modèle idéal.
- Énergie reçue/cédée : chaleur ou travail, signe et sens du transfert.
- Piston mobile : compression ou détente depuis 2 L contre 1 bar, volume réglable, signe et valeur du travail. Animation désactivée si le navigateur demande une réduction des mouvements.
- Intégrale : définition, primitive, calcul F(b)−F(a), rectangles conservés et deux vidéos de Yvan Monka (calcul / interprétation par l’aire).
- Lecture de ΔrH°T : explication de chaque symbole au clic.
- État standard de référence : trois représentations comparatives solide/liquide/gaz pour Cu, Pb et Hg. Couleurs propres aux éléments, cohésion visible en phases condensées, mouvement sur demande avec pause, état stable mis en évidence et deux phases aux seuils. Les températures sont celles du diaporama.
- Formation de CH₄, H₂O, CO₂ et NH₃ à partir des corps simples de référence, pour une mole de produit.
- Combustion du méthane ou du propane, avec choix explicite H₂O(g) ou H₂O(l).
- Changements d’état, rupture/formation d’une liaison et dissolution d’un solide ionique avec solvatation orientée de l’eau.
- Cycle du propane : sens et multiplicateurs modifiables, équations transformées, élimination visible des espèces communes et expression de l’enthalpie à calculer.
- Bilans d’étalonnage et de Zn/Cu²⁺ : choix des températures initiales et des signes, construction de la somme et vérification du raisonnement avant le calcul. Ces choix sont sauvegardés et inclus dans l’export de l’exercice.
- Exercices à validation partielle, retours ciblés pour certaines erreurs de signe, d’unité, de coefficient ou de température, indices et **Correction** ouverte à la demande.

Toutes les activités sont réalisées en HTML/SVG/JavaScript, sans service externe ni extension. Les images du diaporama sont affichées directement, sans fenêtre d’agrandissement. Les trois illustrations d’objets sont de taille modérée ; le piston basse résolution est remplacé par l’activité.

## Conventions à retenir

Dans les exercices du parcours, l’eau de combustion est liquide, H₂O(l), sauf indication contraire. L’activité démarre avec H₂O(l) ; H₂O(g) reste un choix explicite pour comparer les équations. Les données et phases des exercices originaux du méthane et du propane sont conservées. La distinction entre état standard et état standard de référence est explicite. La dissociation de liaison concerne la phase gazeuse ; pour la dissolution, le modèle séparation d’ions / solvatation concerne un solide ionique, et ne doit pas être généralisé à la formation d’ions lors de toute dissolution.

## Fichiers communs

- `fiche-pratique.html` : relations du cours, unités et aide mathématique ; impression possible.
- `integrales.html` : redirection conservée vers les intégrales dans le premier principe.
- `forum.html` : forum intégré ; `resultats.html` : bilan local et export JSON ; `aide.html` : redirection de l’ancienne page d’aide vers l’accueil.
- `app.js` : navigation, QCM, scores et historique ; `exercices.js` : réponses et vérification des exercices ; **`interactions.js`** : toutes les activités interactives du cours.
- `style.css` : présentation, affichage mobile et impression.
- `giscus-config.js` : configuration des discussions.
- `LICENSE.md` et `conditions.js` : conditions de réutilisation et citation, affichées dans une fenêtre du site.
- `COUVERTURE_TD.md`, `NOTES_PEDAGOGIQUES.md`, `AUDIT_PEDAGOGIQUE.md`, `RESSOURCES_EN_LIGNE.md` : correspondances, changements et références.
- `.nojekyll` : désactivation du traitement Jekyll.

## Mettre à jour GitHub Pages

L’archive est **complète et cumulative**. Décompresser puis déposer tous les fichiers à la racine du dépôt `lenaiclartigue/thermochimie`, en remplaçant les fichiers existants. Ajouter aussi le dossier **`assets`** complet, ainsi que **`interactions.js`**. Le dossier `assets` doit être au même niveau que `index.html`. Ne pas déposer seulement le ZIP ni placer les fichiers dans un sous-dossier.

Conserver `Deploy from a branch → main → /(root)`. Après le déploiement GitHub, ouvrir [le site](https://lenaiclartigue.github.io/thermochimie/) et actualiser la page si nécessaire. Cette livraison ne déploie rien sur GitHub. Les scripts et la feuille de style portent un paramètre de version pour éviter le mélange d’une page nouvelle avec des fichiers anciens conservés en cache. En cas d’affichage ancien après déploiement, actualiser avec Ctrl+F5.

Les anciens `illustrations.js` (visionneuse) et `integrales.js` ne sont plus utilisés ; la nouvelle illustration est dans `interactions.js`. Conserver `integrales.html` pour les anciens liens. Les anciens fichiers `module-01.html` à `module-08.html` et `cours.js` ne sont plus utilisés. Les PowerPoint, le fascicule de TD et les corrections de TD ne sont pas inclus dans l’archive.

## Modifier le site

Chaque partie possède son fichier HTML, avec les panneaux `pane-course`, `pane-quiz`, `pane-exercises` et `pane-discussion`. Les sections de cours et questions portent un attribut `data-source-slides` ou `data-source-td` pour faciliter la vérification par l’enseignant ; il n’est pas affiché aux étudiants.

Pour un QCM, modifier ensemble la question, les propositions, `data-correct` (index à partir de 0) et `data-explanation`. Conserver un nom radio propre à chaque question (`q0`, `q1`, etc.). Si l’ordre ou la signification des questions change, changer aussi la version et les clés de sauvegarde dans `app.js`.

Chaque champ d’exercice comporte `data-expected`, `data-hint` et, pour un nombre, `data-tolerance`. Modifier ensemble l’énoncé, l’unité, les valeurs attendues et la correction. Les attributs HTML utilisent le point décimal. La saisie accepte la virgule, les espaces et la notation scientifique ; l’unité affichée ne doit pas être saisie. Une correction masquée reste accessible dans le code source : le site sert à l’entraînement.

Les encarts de définition utilisent `definition` ; les ressources utilisent `further-reading`. Les liens externes ouvrent un nouvel onglet et indiquent la langue.

## Sauvegarde et changement de version

Les réponses et résultats sont conservés **dans ce navigateur uniquement**, sans envoi automatique à l’enseignant ni synchronisation. Le meilleur score QCM sert de repère ; 80 % est un objectif de travail. L’historique conserve jusqu’à 100 tentatives. Les exercices conservent les dernières saisies, les résultats vérifiés et la consultation de la correction. L’export JSON rassemble les résultats locaux.

Les réponses des exercices conservés restent utilisables. L’exercice hydrogénation/H-U est remplacé par un exercice limité au calcul par les enthalpies de formation, avec un nouvel identifiant. Son ancien résultat n’est plus affiché dans le bilan ; il reste dans les données locales exportables.

Une question du QCM de calorimétrie change : la relation H/U est remplacée par le passage de Q à l’enthalpie molaire par division par ξ. Seules les réponses et la progression de ce quiz sont réinitialisées une fois ; les autres quiz restent conservés. L’historique garde les anciennes tentatives, identifiées comme version antérieure pour ce quiz.

Clés actuelles : `thermo-progress-six-slides-v3`, `thermo-answers-six-slides-v3`, `thermo-exercises-slides-v2`. L’historique conserve la clé `thermo-attempts-six-v1`. L’effacement global supprime aussi les clés de la version précédente.

## Discussions et licence

Les discussions restent affichées par giscus dans le site, après « Afficher les échanges ». Elles sont publiques et stockées dans GitHub Discussions. Un compte GitHub est nécessaire pour participer. Le dépôt, les identifiants, la catégorie `Announcements`, le mappage strict par `pathname` et les adresses des pages sont conservés.

La licence **CC BY-NC-ND 4.0** et la citation restent accessibles dans la fenêtre du site. Les conditions sont inchangées.

## Vérification

Le contenu a été rapproché du diaporama principal et les résultats des exercices ont été recalculés. Les contrôles locaux portent sur les questions, exercices, sauvegardes, export, navigation, rectangles, affichage mobile et impression. Voir `AUDIT_PEDAGOGIQUE.md`. L’authentification giscus et le déploiement public ne sont pas validés par ces contrôles locaux.

## Animations thermiques

Dans Comprendre, la partie Enthalpie propose une courbe T(Q) avec curseur, lecture/pause, arrêts au début, au milieu et à la fin du palier, et calculs évolutifs. Données inchangées de l’exercice : 3 mol d’eau, 20 → 100 °C, Cp,m = 75,3 J·mol⁻¹·K⁻¹, ΔvapH° = 40,7 kJ·mol⁻¹. La répartition liquide/vapeur représente les quantités de matière, pas les volumes. La lecture s’arrête au début du palier pour une question de prédiction non notée.

Dans Calorimétrie, une coupe interactive présente double paroi argentée, vide, thermomètre et agitateur. Les éléments sont accessibles au clavier et l’agitation démarre uniquement à la demande. Les figures originales restent disponibles. Les animations s’arrêtent lorsqu’elles quittent l’écran. Aucun nouveau résultat noté ni donnée personnelle n’est enregistré.

## Courbe complète du diaporama animée

La figure des changements d’état est maintenant une courbe SVG interactive T(K) en fonction du temps, avec cinq étapes : chauffage du solide, fusion (S + L), chauffage du liquide, vaporisation (L + V), chauffage de la vapeur. Animation à démarrage manuel, pause, curseur et choix direct des étapes. Courbe schématique avec calculs pour 3 mol d’eau de −10 à 120 °C : données glace/vapeur/fusion du TD, données liquide/vaporisation du diaporama pour cohérence avec le second exemple. Axes non à l’échelle ; aucune durée physique calculée. Total : 165,8334 kJ. Les 40 QCM et 18 activités sont conservés ; la saisie des exercices a été simplifiée dans la révision décrite ci-dessous. Cette courbe précède le complément numérique sur les 3 mol d’eau, conservé. L’image source reste dans les assets.

## Organisation des exemples et exercices — 14 octobre 2026

Les exemples interactifs de bilans thermiques (étalonnage et Zn/Cu²⁺), l’assembleur du propane et le cycle de l’hydrazine se trouvent dans **Comprendre**. Ils servent à construire le concept et expliquent les étapes et les calculs. Les données restent celles du diaporama et du TD ; les interfaces et rétroactions sont des ajouts pédagogiques.

Dans **Exercices**, les calculs ne demandent plus les contributions intermédiaires : l’étudiant saisit le résultat final. Les questions indépendantes, conversions, coefficients stœchiométriques et restitutions conceptuelles conservent leurs réponses propres. Les 18 activités et les 40 QCM sont conservés. La correction est accessible après une tentative et détaille les étapes des calculs remaniés.

Les résultats thermochimiques non nuls ont une tolérance relative de ±2 %. Les coefficients, conversions et valeurs nulles conservent leurs contrôles spécifiques. Les anciennes réponses intermédiaires sont retirées du suivi ; les réponses finales existantes sont conservées. Les parcours du cours restent non notés. Tout le suivi reste local, exportable et effaçable.

Archive cumulative : téléverser tous les fichiers, dont `parcours-guides.js`, à la racine du dépôt GitHub Pages. Aucune publication automatique.


## Construction libre et validation — 15 octobre 2026

Les bilans thermiques commencent sans schéma renseigné. La validation ajoute seulement les éléments de l’étape traitée. Modifier une réponse retire cette validation et masque les éléments correspondants et suivants. Les étapes finales ne sont pas révélées à l’avance.

Les deux cycles de Hess (propane et hydrazine) utilisent un assembleur libre. Choisir une équation, son sens et un multiplicateur positif, puis « Ajouter au cycle ». Chaque ajout est dessiné immédiatement, même si la combinaison n’est pas encore correcte. On peut commencer par n’importe quelle équation, modifier son coefficient ou son sens, la retirer et modifier l’ordre des ajouts. La vérification compare la somme stœchiométrique à la réaction cible ; elle n’impose pas un ordre de résolution.

Les états du chemin graphique sont calculés à partir des équations choisies. Si l’ordre choisi requiert des espèces auxiliaires, la même quantité est ajoutée aux deux extrémités ; elle est explicitement indiquée et s’annule dans le bilan. Ces états peuvent donc se réorganiser après une modification. Aucun chemin fictif n’est présenté comme un mécanisme réel. La somme des enthalpies n’est proposée qu’après obtention de la réaction cible. Réponses finales attendues : propane −106 et hydrazine −543,74 kJ·mol⁻¹.

Les exercices et les 40 QCM sont conservés. Le suivi des anciens parcours imposés est réinitialisé pour cette nouvelle interaction, sans effacer les résultats des exercices ou des QCM. Les nouveaux assemblages sont sauvegardés, exportables et effaçables.

## Navigation simplifiée — 15 octobre 2026

Retrait de la phrase « Dans chaque partie : Comprendre → QCM → Exercices → Discussion » sur l’accueil, des liens « Utiliser le site » dans la navigation et les pieds de page, et de la mention « Accès libre ». L’ancienne page d’aide redirige vers l’accueil : son contenu a été retiré. Le fichier reste dans l’archive pour remplacer la page déjà publiée lors du téléversement cumulatif. Aucun contenu pédagogique ni interaction n’est modifié.

## Emplacement de la courbe — 15 octobre 2026

L’animation « Chauffer un corps pur : du solide à la vapeur » est placée dans « Décomposer un chauffage en plusieurs étapes », après les cinq contributions et leur somme. Son contenu, ses commandes et ses calculs sont conservés.
