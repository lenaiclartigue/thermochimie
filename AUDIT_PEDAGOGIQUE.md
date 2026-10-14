# Relecture complète du site de thermochimie

14 octobre 2026 — version « construction de Hess et des bilans calorimétriques ».

## Bilan

Les six parties, la fiche pratique, les pages d’aide et de résultats, les 40 QCM et les 18 exercices ont été relus. Les relations et les réponses numériques du parcours sont cohérentes après les corrections ci-dessous. Les sept exercices d’origine gardent les données du PowerPoint. Les rappels rédigés pour préparer les TD restent identifiés comme des compléments.

La relecture ne vaut pas correction des documents sources : plusieurs ambiguïtés ou données du fascicule de TD restent à harmoniser avant leur distribution. Le détail figure dans `COUVERTURE_TD.md`.

## Corrections effectuées

| Emplacement | Point corrigé ou clarifié |
| --- | --- |
| Combustion, partie 4 et fiche | H₂O(l) par défaut, H₂O(g) seulement si indiqué. Texte, boutons, équations et documentation concordent. L’enthalpie molaire est rapportée à une mole de combustible. |
| États de référence, partie 4 | Solide ordonné, liquide compact désordonné, gaz espacé ; une couleur par élément et symbole dans chaque disque. Cohésion représentée en phases condensées, négligée pour le gaz parfait. |
| États de référence, partie 4 | Une phase est mise en évidence selon T ; deux aux seuils. Les autres cartes servent de comparaison à d’autres températures. Animation sur demande et pause. |
| Enthalpie, partie 3 | Qp=ΔH : seul travail de pression, pext constante et pᵢ=pf=pext aux états d’équilibre initial et final. |
| Capacités, partie 3 | Q=CΔT : capacité constante, sans changement d’état ni réaction ; conditions fixées et usage de Cp à pression constante. |
| Réaction, partie 4 | ΔH≈ξΔrH° : contribution à T,p constantes, avancement initial nul et enthalpie molaire assimilée à la valeur standard constante. |
| Tables de formation, partie 4 | Les coefficients sont positifs dans chacune des deux sommes « produits moins réactifs », pour éviter de soustraire deux fois le signe des réactifs. |
| Calorimétrie | La description du vase Dewar concerne le dispositif à pression constante ; la bombe calorimétrique fonctionne à volume constant. |
| Exercice sur le système isolé | Suppression de deux propositions également vraies (ΔU=Q et ΔU=W, puisque Q=W=ΔU=0). Les nouveaux choix sont clairement distincts. |
| Aide et résultats | Suppression des instructions périmées sur l’agrandissement des images. L’effacement global retire désormais aussi le score et les commentaires QCM affichés. |

## Relecture par partie

| Partie | Points contrôlés | Conclusion |
| --- | --- | --- |
| 1 — Décrire un système | Frontières, ouvert/fermé/isolé, grandeurs, unités, quantités et rappels utiles aux TD | Définitions présentes ; rappels distingués du diaporama. |
| 2 — Premier principe | Signes reçus/cédés, système fermé, fonction d’état, cycle, différentielles, travail, p/pext, monobare/isobare, intégrales | Conditions précisées ; travail isotherme limité au cas réversible ; adiabatique distingué d’isotherme et d’isolé. |
| 3 — Enthalpie | H=U+pV, Qp, capacités totales/molaires/massiques, chauffage et palier | Chaleur latente explicitée ; unités et signes cohérents. |
| 4 — Réaction | Δ/indice/°/T, standard et référence, corps simple, formation, combustion, dissociation, dissolution, H/U | Convention liquide corrigée ; réactions équilibrées ; Δνg compte uniquement les gaz ; schémas clarifiés. |
| 5 — Hess | Sens des flèches, coefficients, états physiques, passage par les atomes gazeux, exemples HCl/propane | Sommes d’équations et signes cohérents ; données à la même température ou approximation annoncée. |
| 6 — Calorimétrie | Contributions, températures initiales, étalonnage, Zn/Cu²⁺, fusion partielle, QV et conversion H/U | Bilans et résultats recalculés ; grandeurs totales et molaires distinguées. |
| Fiche et aide | Concordance des formules, unités, conventions, parcours, sauvegarde et forum | Mise en cohérence avec les fonctions actuellement présentes. |

Résultats de contrôle principaux : eau 18,072 + 122,1 = 140,172 kJ ; benzène −597,2 kJ·mol⁻¹ ; HCl −92,5 kJ·mol⁻¹ ; propane −106 kJ·mol⁻¹ avec les données arrondies ; calorimètre 159,51 J·K⁻¹ ; Zn/Cu²⁺ −7,87912 kJ ; hydrogénation −136,95 kJ·mol⁻¹, puis ΔrU°≈−134,47 kJ·mol⁻¹ à 298 K. Le résultat de Zn/Cu²⁺ est une variation totale, pas une enthalpie molaire déterminée sans connaître l’avancement.

## Ce qui reste à harmoniser dans les supports sources

Les points déjà repérés ont été conservés, car modifier les énoncés ou leurs données sans les signaler changerait le support commun :

- Sabatier : « enceinte isolée » à concilier avec le travail du piston ; différences de quantités entre le fascicule et l’ancien corrigé.
- Cycle du gaz : hypothèse de réversibilité mécanique à expliciter pour le calcul du travail isotherme.
- Éthylène : valeur de formation de H₂O(l) imprimée −295,8 contre −285,8 dans la correction manuscrite.
- Méthane : pression du volume gazeux et température de la donnée de vaporisation/condensation à préciser.
- Benzène : phase de l’eau et données de combustion à considérer ensemble.
- Lampe à carbure : signe/résultat du corrigé et capacités thermiques imprimées à vérifier.
- Eau/glace : 44,36 kJ·mol⁻¹ annoncé à 100 °C, contre 40,7 kJ·mol⁻¹ ailleurs dans les supports.
- Corrigé ancien : reprendre les applications numériques avec les valeurs du fascicule distribué.

Les températures Cu/Pb/Hg de la diapositive 24 sont reprises comme repères pédagogiques. L’activité n’est pas un calcul précis de diagramme de phases ; les valeurs des transitions et leurs conditions de pression pourraient faire l’objet d’une harmonisation ultérieure dans le support commun.

## Vérifications techniques réalisées

- Chargement des 12 pages principales et redirection de l’ancienne page des intégrales.
- 40 QCM et 18 exercices : bonnes réponses, réponse fausse, étapes partielles, décimales françaises, indices/correction, restauration et remise à zéro.
- Historique, export JSON, export avec exercices seuls et effacement global.
- Systèmes, signes Q/W, piston, rectangles et primitives, notations, formations, combustions, liaisons, changements d’état et dissolution.
- Cu/Pb/Hg : phases juste avant, au seuil et juste après chaque transition ; conversion °C/K ; trois couleurs distinctes ; cohésion présente en solide/liquide et absente du schéma de gaz parfait.
- Animation facultative, pause, arrêt lorsque l’onglet de cours est masqué et démarrage à l’arrêt avec préférence de réduction des mouvements.
- Inspection visuelle à 390 et 1365 px ; absence de débordement horizontal global dans les scénarios contrôlés.
- Syntaxe JavaScript, liens et ancres internes, identifiants uniques et versions des fichiers communs.
- Les huit liens pédagogiques externes répondent lors du contrôle. Cela ne vérifie pas la lecture vidéo complète, ni la disponibilité future de ces services.

Tests locaux dans Chromium. L’authentification réelle giscus n’a pas été testée ; sa configuration est conservée. Aucun résultat n’est envoyé à l’enseignant et aucun hébergement autre que le site statique GitHub Pages n’a été ajouté. Cette archive n’est pas déployée automatiquement.

## Améliorations proposées, sans ajout de programme

| Priorité | Proposition | Application concrète |
| --- | --- | --- |
| 1 | Faire prédire avant de manipuler | Avant le piston ou le changement d’état : choisir le signe de W ou la phase attendue, puis observer et expliquer. Utiliser les données déjà présentes. |
| 1 | Construire réellement un cycle de Hess | Reprendre le propane du diaporama : inverser/multiplier les trois équations, afficher les espèces qui s’annulent, puis demander la somme des enthalpies. |
| 1 | Construire le bilan calorimétrique terme par terme | Reprendre eau chaude/eau froide ou Zn/Cu²⁺ : associer chaque contribution à sa température initiale et à son signe avant le calcul. |
| 2 | Mieux guider les erreurs de calcul | Distinguer oubli du signe, coefficient stœchiométrique, confusion J/kJ et confusion quantité totale/grandeur molaire dans les retours des exercices. |
| 2 | Alléger la lecture de la partie 4 | Garder visibles définition, équation et exemple essentiel ; rendre dépliables les détails déjà présents. Les objectifs et le contenu scientifique resteraient identiques. |
| 2 | Ajouter une courte synthèse à compléter | Pour chaque partie, trois relations ou conditions à retrouver sans regarder, avant le QCM. |
| 3 | Essai avec quelques étudiants | Faire tester une partie par deux ou trois étudiants, notamment sur Firefox et téléphone ; relever où ils hésitent et ce qu’ils interprètent mal avant d’ajouter d’autres interactions. |

Les activités de construction du cycle de Hess et du bilan calorimétrique ainsi que les retours ciblés sont maintenant implantés. Les autres pistes restent proposées pour la suite. La priorité pédagogique serait Hess puis le bilan calorimétrique, où la manipulation peut aider à construire le raisonnement plutôt qu’à afficher seulement un résultat.

## Sources de la relecture

- Support principal fourni : `XLG1CU040_Cours_26-27_ChapII_enseignant(1).pptx`, 43 diapositives ; repères particulièrement concernés : 15–21, 23–25, 30–31 et 42–43.
- Fascicule `TD_XLG1CU040_2026-2027(1).pdf` et corrigé enseignant : correspondance détaillée conservée dans `COUVERTURE_TD.md` ; sources non modifiées et corrigé non diffusé.
- [IUPAC — standard state](https://goldbook.iupac.org/terms/view/S05925) et [reference state](https://goldbook.iupac.org/terms/view/R05233) : distinction entre conventions standard et forme de référence de l’élément.
- [OpenStax, Chemistry 2e, 10.1](https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces) : organisation et mobilité des particules, distinction intermoléculaire/intramoléculaire. Aucune illustration de cette source n’est reproduite.
- [OpenStax, Chemistry 2e, 5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy) : équations thermochimiques et enthalpies.

Les références externes ont servi de contrôle, sans introduire leur programme plus étendu dans le cours commun. Les dessins sont réalisés pour ce site ; leur caractère schématique et les approximations sont explicités.

## Vérification de la construction des raisonnements

Le cycle du propane utilise les trois équations et les enthalpies de la diapo 31. La combinaison −1, 3, 4 élimine 5 O₂(g), 3 CO₂(g) et 4 H₂O(l), puis donne 3 C(graphite) + 4 H₂(g) → C₃H₈(g). Une combinaison fausse n’est pas validée. L’enthalpie finale n’est pas calculée automatiquement par l’assemblage.

Les bilans des deux exercices de calorimétrie distinguent les températures initiales 18/40 °C et 18/20 °C. La réaction Zn/Cu²⁺ porte une contribution négative, opposée aux trois chauffages. Le signe ne s’applique pas une deuxième fois devant un terme C(Tf−Ti).

Contrôles : branches correctes, incomplètes et fausses, sauvegarde/restauration des préparations, présence dans le bilan exportable, remise à zéro, indices de signe/J-kJ/coefficients/température et affichage sur ordinateur et téléphone. Les 40 QCM et 18 exercices ont aussi été revérifiés.
