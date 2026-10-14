# Activités interactives et enthalpies — 14 octobre 2026

## Modifications

- Définition d’une intégrale, lien avec une primitive et calcul F(b)−F(a) avant l’illustration par les rectangles. Deux vidéos distinctes de terminale d’Yvan Monka : calcul par primitive et représentation par l’aire.
- Retour des illustrations homogènes verre/bouteille/thermos, en taille modérée. Images du cours affichées directement, sans visionneuse ni bouton agrandir.
- Piston animé et manipulable : état initial de 2 L, pression extérieure constante de 1 bar, détente et compression avec signe et valeur de W. Le mouvement respecte la préférence de réduction des animations.
- Lecture interactive des symboles Δ, indice de transformation, H, ° et T ; distinction entre variation en J et grandeur molaire de réaction.
- Activité sur les états standard de référence de Cu, Pb et Hg, avec températures issues de la diapo 24, coexistence aux transitions et distinction état standard / état de référence.
- Définition du corps simple ; formation de CH₄, H₂O, CO₂ et NH₃ à partir des corps simples de référence, pour une mole de produit.
- Combustion : eau gazeuse par défaut suivant la demande de l’enseignant ; exceptions explicites des exercices du diaporama conservées avec eau liquide.
- Dissociation de liaison en phase gazeuse pour isoler la liaison des effets intermoléculaires des phases condensées ; activité H₂, Cl₂, HCl avec données du cours.
- Dissolution : séparation des ions d’un réseau et solvatation par l’eau. Orientation de l’eau représentée autour de Na⁺ et Cl⁻ ; distinction avec la dissolution moléculaire sans formation nécessaire d’ions.
- Retrait de la relation H/U de réaction du cours, de la fiche et des questions qui l’évaluaient. Les parties de TD non couvertes sont signalées dans `COUVERTURE_TD.md`.

## Diagnostic des interactions signalées

Les fichiers HTML et `interactions.js` récupérés sur GitHub correspondaient à la dernière archive. Le blocage signalé n’a pas été reproduit dans les contrôles locaux avec ces fichiers. Sa cause dans le navigateur de l’utilisateur n’est donc pas établie.

L’initialisation attend désormais explicitement la disponibilité du document. Les scripts et la feuille de style sont référencés avec une empreinte de version : une nouvelle page demande la nouvelle version du fichier, ce qui évite de réutiliser silencieusement un ancien script conservé en cache. Il faut déposer tous les fichiers de l’archive ensemble. La présente livraison n’a pas été publiée sur GitHub.

## Vérifications

- 40 réponses QCM et 18 exercices vérifiés dans Chromium avec une grille indépendante des valeurs attendues dans le HTML ; les sept exercices originaux du diaporama conservent leurs données.
- Réponses fausses, validation partielle, correction à la demande, décimales françaises, sauvegarde, restauration, export et effacement.
- Migration ciblée : seule la progression du quiz de calorimétrie modifié repart de zéro. Les autres résultats restent conservés. L’ancien exercice H/U n’est plus proposé ; son résultat ancien reste exportable.
- Trois types de systèmes et quatre combinaisons Q/W reçus/cédés, avec flèches, textes et états des boutons.
- Piston : animation jusqu’aux positions finales, curseur, remise à zéro, W positif en compression et négatif en détente.
- Cu, Pb et Hg : états de part et d’autre de chaque transition, coexistence exactement aux seuils, conversion °C/K, boutons et saisie.
- Quatre formations, quatre combustions selon phase de l’eau, six cas de liaison, six changements d’état et trois étapes de dissolution.
- Inspection des nouveaux visuels à 390 px et sur ordinateur ; contrôle des pages sans débordement horizontal global.
- Rectangles, primitives, navigation, licence, impression et anciennes adresses conservés. Les schémas/illustrations ont été inspectés visuellement.
- Identifiants et liens locaux vérifiés, scripts syntaxiquement valides, absence d’erreur JavaScript dans les scénarios testés.

## Limites

Les comportements ont été testés localement dans Chromium. Cela ne constitue pas une validation sur tous les navigateurs ni dans la session de l’utilisateur. L’authentification giscus reste extérieure à ces tests. Les paramètres giscus, adresses des pages et conditions de réutilisation sont conservés.

Les PowerPoint, le fascicule et le corrigé enseignant ne sont pas modifiés ni inclus. Le choix de retirer la relation H/U laisse des questions de TD hors périmètre ; les incohérences des données des énoncés signalées précédemment restent aussi à traiter. Le relevé de couverture a été mis à jour en conséquence.
