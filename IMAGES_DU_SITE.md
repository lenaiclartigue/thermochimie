# Illustrations du site

Version illustrée du 14 octobre 2026.

Les neuf exports fournis sont copiés sans retouche des pixels. Leur transparence est conservée ; le site les affiche sur fond blanc. Les légendes du site décrivent leur contenu sans modifier les équations, données, flèches ou phases. Le dessin du piston reste limité par sa résolution d’origine (135 × 176 px).

## Correspondance des fichiers

| Fichier dans `assets/images/` | Origine | Emplacement |
| --- | --- | --- |
| `systeme-univers.png` | Systeme Thermo.png | Définir le système |
| `transformations.png` | Transformation.png | Transformations chimique et physique |
| `travail-piston.png` | travail.png | Travail des forces de pression |
| `changements-etat.png` | Enthalpie Changement d’état.png | Enthalpie : chauffage et changements d’état |
| `cycle-hess.png` | Cycle de Hess.png | Loi de Hess |
| `calorimetre-historique.png` | Calorimetre.png | Illustration historique, dépliable dans Calorimétrie |
| `calorimetre-coupe.png` | Calo2.png | Description du calorimètre |
| `calorimetre-materiel.png` | Calo3.png | Description du calorimètre |
| `calorimetre-zinc-cuivre.png` | Calo 4.png | Chaleur de réaction Zn/Cu²⁺ |
| `systeme-ouvert-verre.png` | Illustration générée | Sélecteur de système ouvert |
| `systeme-ferme-bouteille.png` | Illustration générée | Sélecteur de système fermé |
| `systeme-isole-thermos.png` | Illustration générée | Sélecteur de système isolé (modèle idéal) |

## Interaction et accessibilité

Les neuf schémas et photos du cours s’agrandissent dans une fenêtre du site. La croix, Échap ou un clic hors de la fenêtre permettent de la fermer. Un bouton de zoom et une zone défilable facilitent la lecture sur téléphone. Les images possèdent un texte alternatif et une légende. Elles restent visibles à l’impression.

Le verre, la bouteille et le thermos servent de boutons dans le schéma des échanges. Les définitions et les flèches de matière et d’énergie restent écrites et contrôlées dans le site, pas générées dans les images. Le thermos représente un modèle idéal de système isolé.

Le sens de la transformation physique affichée est celui de l’image fournie : D(g) → D(l). Les QCM, exercices, réponses attendues, sauvegardes et paramètres de discussions restent inchangés.

## Génération des trois objets

Mode utilisé : outil intégré de génération d’images (image_gen), fond transparent. Aucune génération de texte, formule ni schéma scientifique. Les trois fichiers sont inclus dans l’archive aux chemins indiqués ci-dessus.

### verre

```text
Use case: scientific-educational. Asset type: isolated object illustration for an undergraduate French thermochemistry website. Create a refined, consistent editorial object illustration: realistic forms simplified into smooth shaded surfaces, restrained navy outlines (#172e42), pale blue water (#83bdca), soft ivory highlights, very subtle soft shadow, three-quarter front view, neutral light from upper left, generous empty margins on all sides. Object centered in a square canvas, full object entirely visible, occupies 70% of canvas height. This will be one of a coherent set: open glass, capped bottle, insulated thermos. Transparent background. No text, no letters, no arrows, no symbols, no labels, no brand marks, no extra objects, no hands, no scenery. Subject: one ordinary clear drinking glass, visibly open at the top, half filled with pale blue water. Straight slightly tapered sides and a visible elliptical rim. No lid, no straw, no ice. Evaporation need not be drawn.
```

### bouteille

```text
Use case: scientific-educational. Asset type: isolated object illustration for an undergraduate French thermochemistry website. Create a refined, consistent editorial object illustration: realistic forms simplified into smooth shaded surfaces, restrained navy outlines (#172e42), pale blue water (#83bdca), soft ivory highlights, very subtle soft shadow, three-quarter front view, neutral light from upper left, generous empty margins on all sides. Object centered in a square canvas, full object entirely visible, occupies 70% of canvas height. This will be one of a coherent set: open glass, capped bottle, insulated thermos. Transparent background. No text, no letters, no arrows, no symbols, no labels, no brand marks, no extra objects, no hands, no scenery. Subject: one ordinary transparent reusable water bottle, with a clearly screwed-on navy cap, half filled with pale blue water. Simple smooth bottle, non-insulated, rounded shoulders and narrow neck. No handle, no straw, no label.
```

### thermos

```text
Use case: scientific-educational. Asset type: isolated object illustration for an undergraduate French thermochemistry website. Create a refined, consistent editorial object illustration: realistic forms simplified into smooth shaded surfaces, restrained navy outlines (#172e42), pale blue water (#83bdca), soft ivory highlights, very subtle soft shadow, three-quarter front view, neutral light from upper left, generous empty margins on all sides. Object centered in a square canvas, full object entirely visible, occupies 70% of canvas height. This will be one of a coherent set: open glass, capped bottle, insulated thermos. Transparent background. No text, no letters, no arrows, no symbols, no labels, no brand marks, no extra objects, no hands, no scenery. Subject: one closed insulated vacuum flask (thermos), a smooth cylindrical pale silver-gray stainless-steel body, rounded shoulders, clearly closed navy screw cap which also serves as a cup. No opening, no straw, no handle, no cutaway view, no labels. It must be visibly an insulated flask rather than an ordinary bottle.
```

