# Thermochimie · Licence

Version « audit, animations et parcours progressifs de bilans et Hess » du 14 octobre 2026 : mise en interaction du diaporama du chapitre 2. Conception du parcours : Lénaïc Lartigue.

Site statique pour GitHub Pages. Les six parties suivent le cours commun : **Comprendre → QCM → Exercices → Discussion**. Le chapitre 3 n’est pas développé ici ; les prérequis du chapitre 1 sont rappelés dans la première partie.

## Contenu de cette version

| Fichier | Partie | Questions QCM | Activités |
| --- | --- | ---: | ---: |
| `systeme.html` | Décrire un système | 6 | 3 |
| `premier-principe.html` | Premier principe, travail et chaleur | 8 | 3 |
| `enthalpie.html` | Enthalpie | 6 | 3 |
| `enthalpie-reaction.html` | Enthalpie de réaction | 8 | 3 |
| `hess.html` | Cycles de Hess | 6 | 3 |
| `calorimetrie.html` | Calorimétrie | 6 | 3 |

**40 questions de compréhension et 18 exercices**, soit trois par partie. Les sept exercices du diaporama conservent leur énoncé et leurs données. Les deux activités de restitution sont conservées et neuf entraînements courts sont ajoutés, avec une origine clairement indiquée.

Le cours reprend les définitions et les notations du diaporama, avec les activités interactives demandées. Les compléments « avancement », « volumes/gaz dissous/débit » et « lecture p(T)/p(V) » sont identifiés comme rappels ou méthodes utiles aux TD, avec les exercices concernés. La chaleur latente, nommée dans la diapositive 21, est expliquée dans la partie Enthalpie et la fiche pratique : palier, grandeurs molaires et massiques, unités et signes.

La relation ΔrH° = ΔrU° + ΔνgRT (diapos 42–43) est rétablie dans la partie Enthalpie de réaction, avec ses conditions et un exemple de calcul, puis rappelée en calorimétrie et dans la fiche pratique. `COUVERTURE_TD.md` indique les prérequis disponibles pour les TD et les points des énoncés restant à harmoniser. Les 40 QCM et les 18 exercices sont conservés, avec leurs données numériques. Les choix de la question d’exercice sur le système isolé ont été clarifiés ; les clés de sauvegarde et les réponses correctes sont conservées. Le relevé complet de cette relecture et les améliorations proposées figurent dans `AUDIT_PEDAGOGIQUE.md`.

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
- `forum.html` : forum intégré ; `resultats.html` : bilan local et export JSON ; `aide.html` : mode d’emploi.
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

Les réponses et résultats sont conservés **dans ce navigateur uniquement**, sans envoi automatique à l’enseignant ni synchronisation. Le meilleur score QCM sert de repère ; 80 % est un objectif de travail. L’historique conserve jusqu’à 100 tentatives. Les exercices conservent les dernières saisies, les étapes vérifiées et la consultation de la correction. L’export JSON rassemble les résultats locaux.

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

La figure des changements d’état est maintenant une courbe SVG interactive T(K) en fonction du temps, avec cinq étapes : chauffage du solide, fusion (S + L), chauffage du liquide, vaporisation (L + V), chauffage de la vapeur. Animation à démarrage manuel, pause, curseur et choix direct des étapes. Courbe schématique avec calculs pour 3 mol d’eau de −10 à 120 °C : données glace/vapeur/fusion du TD, données liquide/vaporisation du diaporama pour cohérence avec le second exemple. Axes non à l’échelle ; aucune durée physique calculée. Total : 165,8334 kJ. Les 40 QCM et 18 exercices restent inchangés. Cette courbe précède le complément numérique sur les 3 mol d’eau, conservé. L’image source reste dans les assets.

## Parcours progressifs ajoutés le 14 octobre 2026

Deux préparations guidées reprennent les données des exercices du diaporama : étalonnage par mélange d’eaux et réaction Zn/Cu²⁺. Six étapes : système, états, transformations, expressions, bilan, isolement de l’inconnue. Le calcul reste à faire dans les champs de l’exercice original.

Un parcours complémentaire reprend les quatre équations du TD 2.3, exercice 6 (hydrazine) : construction du chemin indirect, inversion, multiplication, simplification puis calcul. Résultat vérifié : −543,74 kJ·mol⁻¹. Le H₂ auxiliaire est ajouté fictivement aux deux états extrêmes et s’annule ; le chemin n’est pas un mécanisme réactionnel.

Ces trois parcours sont non notés et ne modifient pas les 40 QCM ni les 18 exercices existants. Leur état est enregistré localement, exportable et effaçable. Le nouveau fichier `parcours-guides.js` doit être téléversé avec les autres fichiers de cette archive cumulative. Les interfaces et rétroactions sont des ajouts pédagogiques ; les données proviennent des supports indiqués ci-dessus.
