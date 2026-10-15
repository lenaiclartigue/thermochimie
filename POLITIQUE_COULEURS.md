# Politique de couleur — 15 octobre 2026

## Objectif et limites

La couleur sert au repérage des parties et à la mise en correspondance du texte, des équations et des schémas. Les teintes précises ne sont pas prescrites par la recherche et leur bénéfice n’a pas été évalué auprès des étudiants. La palette relève d’un choix de conception fondé sur la cohérence des codes, la lisibilité et une utilisation modérée de la couleur.

## Trois usages distincts

1. **Navigation** : six accents fixes pour les cartes d’accueil, le titre de partie et l’élément actif de navigation. Numéros et intitulés restent visibles.
2. **Actions** : une présentation commune pour les boutons de validation et de navigation. La couleur de chapitre n’indique pas une bonne réponse ou une erreur.
3. **Correspondances scientifiques** : dans les constructions guidées, un constituant conserve sa couleur dans le schéma et les termes du bilan. Chaque équation de Hess conserve sa couleur dans le tableau, sa flèche, l’équation transformée et le calcul d’enthalpie, quel que soit son ordre ou son sens. Les flèches de transformation globale restent distinctes du chemin construit.

La couleur des constituants ne code pas le signe de Q : les signes et températures doivent être lus et déterminés par l’étudiant. Aucun élément du schéma ne doit apparaître avant la validation prévue dans la construction progressive.

## Palette des parties

| Partie | Accent | Fond | Contraste accent/fond |
|---|---|---|---:|
| 1 — Système | `#285F86` | `#EDF4F9` | 6,16:1 |
| 2 — Premier principe | `#146C70` | `#EAF5F4` | 5,53:1 |
| 3 — Enthalpie | `#526B35` | `#F0F5E9` | 5,39:1 |
| 4 — Enthalpie de réaction | `#8A5C12` | `#FCF5E7` | 5,35:1 |
| 5 — Hess | `#70518C` | `#F4EFF8` | 5,72:1 |
| 6 — Calorimétrie | `#9B4B3D` | `#FCF0EC` | 5,43:1 |

Ces teintes sont catégorielles : elles ne portent aucune signification thermodynamique et ne représentent pas une échelle de difficulté. Les numéros et libellés permettent de se repérer sans distinguer toutes les teintes. Ces vérifications ne constituent pas un audit complet de conformité WCAG.

## Sources des principes

- Xie et al. (2017), *The more total cognitive load is reduced by cues, the better retention and transfer of multimedia learning: A meta-analysis and two meta-regression analyses*. PLOS ONE, 12(8), e0183884. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0183884 — Effets des indices en apprentissage multimédia ; ne prescrit pas les six couleurs de cette interface.
- *An eye-tracking study of how color coding affects multimedia learning* (2009). https://www.sciencedirect.com/science/article/abs/pii/S0360131509000712 — Mise en correspondance des informations textuelles et graphiques.
- Nielsen Norman Group (2021), *Using Color to Enhance Your Design*. https://www.nngroup.com/articles/color-enhance-design/ — Cohérence, hiérarchie et limites des interprétations universelles des couleurs.
- W3C, WCAG 2.2, *Use of Color*. https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html — Ne pas transmettre une information uniquement par la couleur.
- W3C, *Contrast (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html — Contraste des textes et de leur fond.

## Maintenance

`couleurs-pedagogiques.css` est chargé après `theme.css`. Les couleurs des équations et constituants sont définies au début de `parcours-guides.js`. Les correspondances reposent sur les identifiants stables des constituants et des équations, jamais sur l’ordre d’ajout.

Vérifications : 40 QCM, 18 exercices, deux bilans parcourus jusqu’au calcul, Hess ajouté dans l’ordre libre puis réordonné, conservation des couleurs, absence de réponse graphique anticipée, rendu ordinateur et téléphone. Les valeurs numériques et les règles de correction restent inchangées.
