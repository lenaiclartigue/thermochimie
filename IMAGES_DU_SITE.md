# Images et schémas interactifs

Version du 14 octobre 2026, activités sur les enthalpies.

Les fichiers PNG fournis par l’enseignant sont conservés sans retouche des pixels. Ils sont affichés directement sur fond blanc, dans des formats limités par la feuille de style. La visionneuse avec agrandissement, zoom et fermeture est supprimée. Les conditions de réutilisation restent celles du site et des contenus concernés.

| Fichier dans assets/images | Usage |
| --- | --- |
| systeme-univers.png | Système et environnement |
| transformations.png | Transformations physique et chimique |
| changements-etat.png | Courbe de chauffage et paliers |
| cycle-hess.png | Diagramme de Hess |
| calorimetre-historique.png | Illustration historique, visible directement |
| calorimetre-coupe.png | Coupe du calorimètre |
| calorimetre-materiel.png | Matériel du calorimètre |
| calorimetre-zinc-cuivre.png | Montage Zn/Cu²⁺ |
| travail-piston.png | Ancien export conservé dans les fichiers, remplacé à l’écran par le piston SVG |
| systeme-ouvert-verre.png | Illustration générée précédemment, rétablie dans le bouton Ouvert |
| systeme-ferme-bouteille.png | Illustration générée précédemment, rétablie dans le bouton Fermé |
| systeme-isole-thermos.png | Illustration générée précédemment, rétablie dans le bouton Isolé |

Les trois illustrations d’objets sont reprises à l’identique de l’archive illustrée précédente : aucun nouveau contenu n’a été généré. Leurs tailles sont contrôlées par CSS (110 px de hauteur sur ordinateur, 90 px sur téléphone). Le thermos reste un modèle idéal d’isolement.

Les schémas d’énergie, piston, états physiques, liaisons et dissolution sont dessinés en SVG dans le site. Les réactions et formules sont du texte HTML. Aucun texte scientifique ni nombre n’est confié à une image générée.

## États de référence : révision des schémas

L’activité Cu/Pb/Hg est dessinée en SVG dans `interactions.js` : trois cartes solide/liquide/gaz, même nombre de particules, couleurs orangée/violette/bleue et symbole de l’élément. Les pointillés schématisent la cohésion ; ils sont absents du gaz parfait. L’animation est facultative, avec pause. Aucun fichier d’image supplémentaire ni service externe n’est requis. Les coordonnées ne reproduisent pas une structure cristalline réelle et l’échelle des distances n’est pas quantitative.

## Courbe de chauffage et calorimètre interactifs (14 octobre 2026)

Ajout pédagogique dans Comprendre fondé sur les diapositives 21–22 et 33–35 : courbe T(Q) calculée avec les données de l’exercice des 3 mol d’eau, proportions molaires liquide/vapeur, et exploration du rôle des éléments du Dewar. Qchauffage = 18,072 kJ ; Qvap = 122,100 kJ ; Qtotal = 140,172 kJ. L’axe n’est pas un temps ; aucune cinétique de chauffage n’est supposée. Calculs non arrondis en interne, affichage arrondi. La coupe est schématique, les données et figures originales sont conservées. Démarrage manuel, pause et commande par curseur ; prédiction au début du palier sans modification des 40 QCM et 18 exercices.

## Courbe complète du diaporama animée

La figure des changements d’état est maintenant une courbe SVG interactive T(K) en fonction du temps, avec cinq étapes : chauffage du solide, fusion (S + L), chauffage du liquide, vaporisation (L + V), chauffage de la vapeur. Animation à démarrage manuel, pause, curseur et choix direct des étapes. Courbe schématique avec calculs pour 3 mol d’eau de −10 à 120 °C : données glace/vapeur/fusion du TD, données liquide/vaporisation du diaporama pour cohérence avec le second exemple. Axes non à l’échelle ; aucune durée physique calculée. Total : 165,8334 kJ. Les 40 QCM et 18 exercices restent inchangés. Cette courbe précède le complément numérique sur les 3 mol d’eau, conservé. L’image source reste dans les assets.
