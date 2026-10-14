# Audit du cours de thermochimie

**Date : 14 octobre 2026. Périmètre : version cumulative livrée dans cette archive.**

## Conclusion

Le parcours en six parties est cohérent pour préparer la théorie à distance avant les exercices. L'enthalpie en constitue le centre, avec une ouverture finale vers Hess et la calorimétrie. L'audit a conduit à corriger les conditions d'application des formules, réorganiser plusieurs développements, préciser les modèles des exemples et enrichir l'autoévaluation.

La version corrigée comporte **56 questions**, **huit applications numériques**, **neuf activités interactives de calcul** et **un guide des intégrales avec somme de Riemann**. Les vérifications fonctionnelles locales ont réussi. Il reste à corriger certaines données du fascicule avant de donner les exercices concernés en autonomie, et à éprouver la charge de travail auprès du groupe. Cet audit n'est pas une validation des apprentissages par des étudiants.

## Corpus et méthode

Le contrôle porte sur les onze pages HTML, les scripts et les styles, les formules et exemples, toutes les questions et leurs corrections, les activités et la documentation. Le cours a été confronté aux 43 diapositives de `XLG1CU040_Cours_26-27_ChapII_enseignant(1).pptx`, aux 21 diapositives de `X12C010_Bilan thermique.pptx` et au chapitre 2 du fascicule `TD_XLG1CU040_2026-2027(1).pdf` (pages 8 à 17 du PDF). Les signes et valeurs suspects des pages 11, 14 et 16 ont été vérifiés sur leur rendu visuel, au-delà de l'extraction de texte.

Les références externes sont des ressources institutionnelles ou des publications originales de leurs producteurs : UEL/Unisciel, OpenStax, University of Texas, LearnChemE, ChemCollective, IUPAC et NIST. Le croisement porte sur les définitions, les hypothèses, les calculs et la progression pédagogique. Il ne consiste pas à recopier une source : certaines ressources emploient une convention de travail opposée ou présentent elles-mêmes des simplifications ou des coquilles. Les textes et activités ajoutés au site sont rédigés pour ce parcours ; aucun média tiers n'a été incorporé.

## Bilan par partie

| Partie | Diagnostic et corrections effectuées | Point à observer auprès des étudiants |
| --- | --- | --- |
| Décrire un système | Distinction entre possibilité d'échange et échange effectif ; définitions des grandeurs intensives/extensives ; espèces, phases et mélanges ; variables indépendantes et unités. | Savoir justifier la frontière choisie et ne pas confondre fermé, adiabatique et isolé. |
| Premier principe | Premier principe placé avant son exploitation ; force et travail de pression explicités ; fonctions d'état et différentielles exactes ; intégration selon p extérieure ; distinction isobare/monobare et quasi-statique/réversible ; adiabatique clarifié. | Expliquer pourquoi une même variation de U peut correspondre à des W et Q différents. |
| Enthalpie | Reconstruction autour de H = U + pV ; conditions de Q = ΔH démontrées ; ΔH = ΔU + Δ(pV) ; capacités totale, massique et molaire ; chauffage et changements d'état séparés. | Choisir un bilan adapté avant de remplacer une variation d'enthalpie par une chaleur. |
| Enthalpie de réaction | Définition par l'avancement ; états standard et de référence ; quatre enthalpies particulières ; rôle des coefficients et des phases ; complément de Kirchhoff ; distinction des deux méthodes uniquement en fin de partie. | Distinguer ΔH, ΔrH et ΔrH°, et relier « par mole » à l'équation retenue. |
| Hess | Combinaisons d'équations détaillées ; contrôle des phases et annulations ; exemple complet du propane ; chemins fictifs distincts d'un mécanisme ; correction de l'exemple de condensation selon la température. | Construire l'équation cible, avant d'additionner les valeurs. |
| Calorimétrie | Frontière du système global et contribution de réaction distinguées ; chemin fictif Zn/Cu²⁺ explicité ; méthode d'étalonnage et de calcul de l'avancement ; nouvelle activité ΔT → ΔrH ; bombe et conversion ΔrU/ΔrH précisées. | Passer d'une variation de température à une énergie, puis diviser par Δξ sans attribuer automatiquement le symbole standard. |

### Conditions scientifiques désormais explicites

- Le premier principe utilisé suppose un système fermé et des variations d'énergies cinétique et potentielle macroscopiques négligées : ΔU = Q + W, avec les transferts reçus positifs.
- Le travail de pression est W = −∫p_ext dV. Une pression extérieure constante permet W = −p_ext ΔV ; une isotherme ne permet la formule logarithmique que dans le modèle approprié, notamment gaz parfait fermé et chemin mécaniquement réversible.
- Une évolution lente n'est pas à elle seule réversible. L'identification des pressions s'effectue dans la limite d'équilibre mécanique d'un chemin réversible sans frottement.
- Pour Q = ΔH en transformation monobare : travail de pression seul, p_ext = p₀ constante et états initial et final en équilibre mécanique avec p₀. La réversibilité du trajet n'est pas nécessaire.
- Les intégrales de Cp portent sur un chauffage à composition et phase fixées ; une transition de phase ajoute une contribution distincte.
- Une enthalpie standard ne signifie pas nécessairement « à 298 K ». La température et les phases doivent être précisées ; les enthalpies de formation nulles concernent les éléments dans leur état de référence.
- Le bilan adiabatique concerne l'ensemble calorimétrique. Il n'annule pas la contribution de la réaction, compensée par les autres contributions énergétiques.
- Δν_g est un nombre stœchiométrique ; Δn_g = Δν_g Δξ est une quantité de matière. Le passage entre ΔrU et ΔrH suppose notamment le modèle des gaz parfaits et la négligence des contributions pV des phases condensées dans la formule usuelle.

## Points à reprendre dans les documents d'origine

Les numéros de page ci-dessous correspondent aux pages du PDF, en comptant la couverture. Les originaux ne sont pas modifiés par cette archive.

| Emplacement | Constat | Suite proposée |
| --- | --- | --- |
| TD p. 11, §2.3, exercice 1 | ΔfH° de H₂O(l) est imprimée −295,8 kJ·mol⁻¹. NIST donne −285,830 kJ·mol⁻¹ à 298,15 K [R8]. | Corriger la donnée et recalculer le corrigé associé. La valeur erronée n'est pas utilisée dans le site. |
| TD p. 14, §2.3, exercice 8, lampe à carbure | Les capacités de CO₂, CaO et H₂O(g) sont imprimées avec des signes négatifs : −37,1 ; −42,0 ; −33,6. Les signes ont été confirmés visuellement. | Reprendre le tableau : ces capacités des phases stables usuelles doivent être positives. Vérifier aussi la température des valeurs tabulées. Elles ne sont pas reprises dans les activités. |
| TD p. 16, §2.4, exercice 1 | La donnée de vaporisation à 100 °C apparaît comme « 44,3 6 kJ/mol ». Elle ne correspond pas à la valeur proche de 40,7 kJ·mol⁻¹ à l'ébullition. | Corriger la valeur et préciser température et pression. Les tables NIST distinguent environ 44,0 kJ·mol⁻¹ entre états standard à 298,15 K et environ 40,7 près de l'ébullition [R8, R9]. |
| TD p. 11, §2.3, exercice 3, méthane | Le volume de 1 m³ est donné à 25 °C sans pression explicite ; une valeur de vaporisation proche de celle à 100 °C intervient dans un calcul à une autre température. | Donner la pression pour calculer n et rendre cohérentes les températures, ou annoncer l'approximation. |
| TD p. 12, §2.3, exercice 4, benzène | L'énoncé associe benzène liquide, eau vapeur à 298 K et ΔcH° = −3301 kJ·mol⁻¹. Avec les autres données fournies, Hess conduirait à ΔfH° du benzène de +217 kJ·mol⁻¹, très éloignée des quelque +49 pour le liquide tabulés par NIST [R10]. | Clarifier ensemble les phases des réactifs et produits et la donnée de combustion, puis refaire le corrigé. Une substitution isolée serait insuffisante. |
| TD p. 8, enceinte de Sabatier | Le système est qualifié d'isolé alors qu'un piston mobile permet un échange de travail. | Employer « fermé et adiabatique » dans le modèle utilisé. Cette distinction est déjà appliquée au site. |
| Cours principal, diapos 9, 15–16, 23 et 43 | Distinction énergie interne/énergie totale ; hypothèses de Q = ΔH ; unités de Q et des capacités ; formation nulle pour les éléments de référence ; confusion entre variation finie et différentielle de pV. | Aligner les diapositives sur les formulations corrigées du site. Pour une variation finie quelconque, écrire ΔH = ΔU + Δ(pV). |
| Exemple Zn/Cu²⁺, cours principal diapos 40–41 et complément diapos 12–16 | Les données permettent un bilan avec le chemin fictif choisi, mais la concentration de Cu²⁺ manque pour déterminer l'avancement et une enthalpie molaire de réaction. | Conserver le résultat énergétique comme contribution de réaction dans ce modèle ; fournir les quantités nécessaires avant de demander ΔrH. Le site explicite aussi pourquoi le terme de capacité du zinc peut apparaître sur le chemin fictif. |
| Complément bilan thermique, diapos 17–19 | L'adiabaticité peut être comprise comme portant sur la bombe seule, alors qu'elle échange avec le milieu calorimétrique. | Délimiter l'ensemble isolé et distinguer bombe, bain et réaction. La rédaction du site a été corrigée. |

## Comparaison avec les modules en ligne

| Ressource | Apport du croisement | Conséquence pour ce site |
| --- | --- | --- |
| UEL/Unisciel [R1, R2] | Organisation francophone des variables d'état et relation de Kirchhoff. Certains anciens médias ne sont pas consultables dans cet environnement. | Définitions consolidées et complément de température placé après l'enthalpie de réaction, sans dépendance à ces médias. |
| OpenStax Chemistry 2e [R3, R4] | Parcours enthalpie, équations thermochimiques, Hess et bilans calorimétriques. | Contrôle des signes, unités, phases et raisonnements ; exemples du cours conservés avec leurs hypothèses. |
| OpenStax University Physics et University of Texas [R5, R6] | Transformations, réversibilité et différentielles exactes/non exactes. La convention de travail doit être vérifiée avant toute transposition. | Développement des points demandés sur les chemins et les intégrales, en gardant le travail reçu positif. |
| LearnChemE [R7] | Modules organisés autour de questions de compréhension, d'exemples et d'activités. Les pages d'introduction et d'équations ont été consultées ; les vidéos et tout le contenu visuel des tests n'ont pas été évalués. | Consigne de prévision avant manipulation, questions sur les confusions usuelles et renforcement de Hess et de la calorimétrie. Aucun questionnaire n'est copié. |
| ChemCollective [R11] | Laboratoire virtuel documenté sur Hess, avec démarche expérimentale. Le laboratoire externe n'a pas été exécuté pendant cet audit. | Point de comparaison pour une future activité expérimentale plus riche ; pas d'intégration externe dans cette livraison. |
| IUPAC [R12–R14] | Terminologie des états standard et de la dissociation des liaisons, vérifiée à partir des définitions indexées ; accès direct limité à certaines pages. | Distinction état standard/état de référence et dissociation spécifique/enthalpie moyenne de liaison. |
| NIST [R8–R10] | Tables et données originales de l'eau et du benzène. | Confirmation des incohérences numériques, distinction des températures et des phases. |

Le principal écart avec un module asynchrone très scénarisé reste la nature des activités : ce sont surtout des calculateurs guidés, accompagnés de questions et d'explications. Ils ne simulent pas encore l'incertitude d'une mesure ni toute la manipulation expérimentale. Cette limite est pédagogique ; elle n'empêche pas leur emploi pour préparer les TD.

## Vérifications techniques effectuées

Vérifications réalisées dans **Chromium 153.0.8010.0**, à partir d'un serveur local, notamment en largeur 1365 px et 390 px :

- Chargement des onze pages, navigation et ouverture/fermeture des conditions ; absence d'erreur JavaScript sur les parcours testés.
- Cinq onglets de chacune des six parties ; huit applications numériques ; vérification des 56 bonnes réponses à partir d'une grille relue, calcul des scores et restauration après rechargement.
- Neuf activités : calculs initiaux, limites de saisie et cas ciblés. Exemples vérifiés : travail dans le vide nul ; Hess avec coefficients 3, 4, −1 donnant −106 kJ·mol⁻¹ ; mélange calorimétrique donnant environ 28,22 °C ; calcul de réaction donnant −46,8 kJ·mol⁻¹ et inversion du signe lors d'un refroidissement.
- Guide des intégrales : changement du nombre de rectangles et mise à jour de l'approximation.
- Historique, export JSON et effacement des données et des réponses visibles.
- Impression : cours visible même si un autre onglet était sélectionné ; discussion masquée.
- Affichage mobile : correction d'un débordement de grille, navigation conservée et absence de débordement global sur les onze pages. Le graphique des intégrales peut défiler dans son propre cadre.
- Configuration et adresses giscus conservées ; échec réseau du chargement récupérable. Aucun message n'a été publié pour les tests.
- Vérification de la syntaxe JavaScript, des liens internes et de l'identité du texte de licence entre `LICENSE.md` et `conditions.js`.

Les captures de l'accueil, du cours d'enthalpie, de la calorimétrie et du guide des intégrales ont été examinées. Il ne s'agit pas d'un audit d'accessibilité exhaustif : lecteur d'écran, autres navigateurs et appareils physiques n'ont pas été testés. Le service giscus réel, l'authentification GitHub et le déploiement publié n'ont pas été validés pendant cet audit.

La révision des quiz ouvre une nouvelle progression locale pour éviter qu'un ancien score valide les nouvelles questions. L'historique existant des six parties reste lisible avec une mention de version antérieure. Aucun suivi central des étudiants n'est ajouté.

## Références consultées le 14 octobre 2026

- **[R1]** UEL/Unisciel, [État d'un système](https://uel.unisciel.fr/chimie/chimther/chimther_ch02/co/apprendre_ch2_03.html).
- **[R2]** UEL/Unisciel, [Variation de l'enthalpie de réaction avec la température — Kirchhoff](https://uel.unisciel.fr/chimie/chimther/chimther_ch03/co/apprendre_ch3_13.html).
- **[R3]** OpenStax, Chemistry 2e, [5.2 Calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry).
- **[R4]** OpenStax, Chemistry 2e, [5.3 Enthalpy](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy).
- **[R5]** OpenStax, University Physics, volume 2, [3.4 Thermodynamic Processes](https://openstax.org/books/university-physics-volume-2/pages/3-4-thermodynamic-processes).
- **[R6]** Richard Fitzpatrick, University of Texas at Austin, [Exact and Inexact Differentials](https://farside.ph.utexas.edu/teaching/sm1/Thermalhtml/node38.html).
- **[R7]** LearnChemE, [Heats of Reaction — Introduction](https://learncheme.com/quiz-yourself/interactive-self-study-modules/heats-of-reaction/heats-of-reaction-introduction/) et [équations et ressources](https://learncheme.com/quiz-yourself/interactive-self-study-modules/heats-of-reaction/heats-of-reaction-screencasts/).
- **[R8]** NIST-JANAF, [Water, 1 Bar, H-065](https://janaf.nist.gov/tables/H-065.html).
- **[R9]** NIST-JANAF, [Water gas, H-064](https://janaf.nist.gov/tables/H-064.html).
- **[R10]** NIST Chemistry WebBook, [Benzene — données thermochimiques](https://webbook.nist.gov/cgi/cbook.cgi?ID=C71432&Mask=683).
- **[R11]** ChemCollective, [Hess's Law, laboratoire virtuel 138](https://chemcollective.org/vlab/138) et [présentation de l'interface](https://chemcollective.org/chem/common/vlab_walkthrouh_html5.php).
- **[R12]** IUPAC Gold Book, [Standard state](https://goldbook.iupac.org/terms/view/S05925).
- **[R13]** IUPAC Gold Book, [Standard thermodynamic quantities](https://goldbook.iupac.org/terms/view/S05927).
- **[R14]** IUPAC Gold Book, [Bond-dissociation enthalpy](https://goldbook.iupac.org/terms/view/08146).
