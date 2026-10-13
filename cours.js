window.THERMO_COURSE=[
  {
    "title": "Décrire un système",
    "goal": "Définir la frontière du système et identifier ses échanges avec le milieu extérieur.",
    "formula": "Système + milieu extérieur = univers thermodynamique",
    "example": "Une bouteille d’eau fermée se réchauffe sur une table. En choisissant la bouteille et son contenu comme système, aucune matière ne traverse la frontière, mais de l’énergie peut entrer : le système est fermé.",
    "activity": "On double la quantité d’une solution homogène en réunissant deux portions identiques. Que deviennent la masse, le volume, la température et la concentration ?",
    "answer": "La masse et le volume doublent, dans les conditions usuelles de cet exemple. La température et la concentration restent identiques. Attention : réunir deux eaux à 20 °C ne donne pas une eau à 40 °C.",
    "td": "Prérequis pour 2.1, exercice 1 (Sabatier). L’enceinte avec piston doit être décrite comme fermée et adiabatique, plutôt qu’isolée.",
    "id": 1,
    "duration": 25,
    "section": "2.1",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>Avant tout bilan, choisissez ce que vous étudiez. Le <b>système</b> est la portion de l’univers délimitée par une frontière réelle ou imaginaire. Tout ce qui reste constitue le milieu extérieur. Le classement dépend de cette frontière.</p><p>Un système <b>ouvert</b> échange de la matière et de l’énergie. Un système <b>fermé</b> échange de l’énergie mais pas de matière. Un système <b>isolé</b> n’échange ni matière ni énergie. Une paroi adiabatique empêche les échanges de chaleur ; elle n’empêche pas nécessairement un échange de travail.</p><p>Une grandeur <b>extensive</b> dépend de la taille du système : masse, quantité de matière, volume. Une grandeur <b>intensive</b> ne s’additionne pas lorsque l’on réunit deux systèmes : température, pression, concentration.</p>"
      },
      {
        "heading": "Choisir la frontière avant de classer",
        "html": "<p>Une bouteille fermée peut échanger de la chaleur. Elle est donc fermée, même si elle est étanche. Un thermos est une approximation de système thermiquement isolé ; il ne devient pas parfaitement isolé simplement parce qu’il porte ce nom. Pour chaque situation, demandez-vous séparément : « de la matière traverse-t-elle la frontière ? », puis « de l’énergie la traverse-t-elle ? ».</p><p>La quantité de matière n s’exprime en mol, le volume V en m³ dans les calculs SI, la pression p en Pa et la température T en K. La concentration n/V et la fraction molaire ni/ntotal sont intensives.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Un gaz sous un piston étanche et mobile, dans une enceinte adiabatique, est nécessairement…",
        "options": [
          "isolé",
          "fermé, mais susceptible d’échanger du travail",
          "ouvert"
        ],
        "correct": 1,
        "explanation": "Le piston étanche empêche les échanges de matière. Son déplacement permet un travail mécanique, même si Q = 0."
      },
      {
        "question": "Une tasse ouverte contenant de l’eau chaude qui s’évapore est un système…",
        "options": [
          "ouvert",
          "fermé",
          "isolé"
        ],
        "correct": 0,
        "explanation": "La vapeur quitte le système : il y a échange de matière. La tasse échange aussi de l’énergie."
      },
      {
        "question": "Quelle grandeur est extensive ?",
        "options": [
          "La pression",
          "La masse",
          "La température"
        ],
        "correct": 1,
        "explanation": "La masse s’additionne lorsque l’on réunit les deux portions."
      },
      {
        "question": "Deux portions identiques d’une solution à 0,10 mol·L⁻¹ sont réunies. La concentration finale est…",
        "options": [
          "0,05 mol·L⁻¹",
          "0,10 mol·L⁻¹",
          "0,20 mol·L⁻¹"
        ],
        "correct": 1,
        "explanation": "La quantité de soluté et le volume doublent ensemble : leur rapport reste inchangé."
      },
      {
        "question": "Pourquoi faut-il préciser H₂O(l) ou H₂O(g) ?",
        "options": [
          "L’état physique fait partie de la définition du constituant",
          "La formule chimique change",
          "L’eau gazeuse contient davantage d’atomes"
        ],
        "correct": 0,
        "explanation": "La même espèce dans deux phases correspond à deux constituants physico-chimiques différents."
      }
    ],
    "practice": {
      "prompt": "Une solution homogène contient 0,20 mol de soluté dans 0,50 L. Quelle est sa concentration ?",
      "value": 0.4,
      "unit": "mol·L⁻¹",
      "tol": 0.005,
      "hint": "Utilisez c = n/V, en gardant V en litres pour une réponse en mol·L⁻¹.",
      "solution": "c = 0,20/0,50 = 0,40 mol·L⁻¹."
    },
    "takeaways": [
      "Définir la frontière du système et identifier ses échanges avec le milieu extérieur.",
      "Système + milieu extérieur = univers thermodynamique",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Premier principe",
    "goal": "Utiliser ΔU = Q + W avec la convention des énergies reçues.",
    "formula": "ΔU = U<sub>f</sub> − U<sub>i</sub> = Q + W",
    "example": "Un système reçoit 500 J de chaleur et fournit 120 J de travail : Q = +500 J et W = −120 J. Son énergie interne augmente de 380 J.",
    "activity": "Un système cède 200 J de chaleur et reçoit 80 J de travail. Calculez ΔU.",
    "answer": "ΔU = −200 + 80 = −120 J. L’énergie interne diminue.",
    "td": "2.1, exercice 2 : bilan de chaque transformation et du cycle.",
    "id": 2,
    "duration": 30,
    "section": "2.1",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>L’énergie interne U décrit l’énergie microscopique du système. Sa variation ne dépend que des états initial et final : U est une <b>fonction d’état</b>. La chaleur Q et le travail W sont des transferts d’énergie qui dépendent du chemin suivi.</p><p>La convention du cours est : une énergie reçue par le système est positive ; une énergie cédée est négative. Une réaction exothermique cède de la chaleur dans les conditions considérées. Une réaction endothermique en reçoit.</p><p>Pour un système fermé dont les variations d’énergie cinétique et potentielle macroscopiques sont négligées, le premier principe s’écrit :</p>"
      },
      {
        "heading": "Une méthode de bilan",
        "html": "<p>Écrivez d’abord le point de vue : « système = … ». Décrivez ensuite chaque transfert en mots, avant de lui attribuer un signe. Enfin seulement, additionnez Q et W. Une diminution de U ne signifie pas nécessairement que le système a cédé de la chaleur : il peut avoir fourni un travail supérieur à la chaleur reçue.</p><p>Pour un système isolé, Q = W = 0 et ΔU = 0. Des conversions internes restent possibles : une réaction peut chauffer les constituants tout en conservant l’énergie totale du système.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Deux chemins relient exactement les mêmes états initial et final. Quelle grandeur a la même variation ?",
        "options": [
          "Q",
          "W",
          "U"
        ],
        "correct": 2,
        "explanation": "U est une fonction d’état. Q et W peuvent changer, mais leur somme reste égale à ΔU."
      },
      {
        "question": "Un système reçoit 250 J de chaleur et fournit 90 J de travail. ΔU vaut…",
        "options": [
          "340 J",
          "160 J",
          "−160 J"
        ],
        "correct": 1,
        "explanation": "Q = +250 J ; W = −90 J ; ΔU = +160 J."
      },
      {
        "question": "Une énergie cédée au milieu extérieur est comptée…",
        "options": [
          "positivement",
          "négativement",
          "sans signe"
        ],
        "correct": 1,
        "explanation": "Les signes sont définis du point de vue du système étudié."
      },
      {
        "question": "Après un cycle, le système retrouve exactement son état initial. Quelle relation est vraie ?",
        "options": [
          "Q = W = 0 nécessairement",
          "ΔU = 0 et Q + W = 0",
          "ΔU = Q"
        ],
        "correct": 1,
        "explanation": "Une fonction d’état retrouve sa valeur initiale. Q et W peuvent rester non nuls et opposés."
      },
      {
        "question": "La chaleur est…",
        "options": [
          "une énergie stockée dans un corps",
          "un transfert d’énergie",
          "une température"
        ],
        "correct": 1,
        "explanation": "Le système possède une énergie interne. Le terme chaleur décrit un transfert, pas un contenu."
      }
    ],
    "practice": {
      "prompt": "Le système cède 350 J de chaleur et reçoit 125 J de travail. Calculez ΔU.",
      "value": -225,
      "unit": "J",
      "tol": 1,
      "hint": "Une énergie cédée est négative ; une énergie reçue est positive.",
      "solution": "Q = −350 J ; W = +125 J ; ΔU = −225 J."
    },
    "takeaways": [
      "Utiliser ΔU = Q + W avec la convention des énergies reçues.",
      "ΔU = U<sub>f</sub> − U<sub>i</sub> = Q + W",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Transformations et travail",
    "goal": "Reconnaître les contraintes d’une transformation et calculer le travail de pression.",
    "formula": "W = −p<sub>ext</sub>ΔV · 1 bar = 10⁵ Pa · 1 L = 10⁻³ m³",
    "example": "À pext = 1 bar, un gaz passe de 2 L à 5 L. W = −10⁵ × 3 × 10⁻³ = −300 J.",
    "activity": "À la même pression, le gaz passe de 5 L à 2 L. Quel est le travail ?",
    "answer": "W = −10⁵ × (−3 × 10⁻³) = +300 J : compression.",
    "td": "2.1, exercices 1 et 2.",
    "id": 3,
    "duration": 40,
    "section": "2.1",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>Pour le travail des forces de pression : δW = −p<sub>ext</sub>dV. À pression extérieure constante, on obtient W = −p<sub>ext</sub>(V<sub>f</sub> − V<sub>i</sub>). Une détente fournit du travail : W &lt; 0. Une compression en reçoit : W &gt; 0.</p><p><b>Isochore</b> : V constant, donc travail de pression nul. <b>Isobare</b> : pression du système constante. <b>Monobare</b> : pression extérieure constante. <b>Isotherme</b> : T constant. <b>Adiabatique</b> : Q = 0.</p><p>Pour un gaz parfait de composition fixe, U dépend seulement de T : une transformation isotherme donne ΔU = 0. Cette conclusion ne se transpose pas automatiquement à une réaction chimique qui change la composition.</p>"
      },
      {
        "heading": "Repérer le chemin sur un diagramme",
        "html": "<p>Dans un diagramme p(V), une isochore est verticale et une isobare est horizontale. Pour un gaz parfait à température constante, pV = nRT : l’isotherme est une hyperbole. Le travail se calcule avec la pression extérieure ; on ne remplace pext par la pression du gaz que lorsque le cadre mécanique le permet, par exemple lors d’une évolution quasi statique.</p><p>Si pext varie, utilisez W = −∫pext dV. La formule −pextΔV est réservée à une pression extérieure constante. Deux chemins de p(V) peuvent donner deux travaux différents pour les mêmes états.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Adiabatique signifie…",
        "options": [
          "température constante",
          "aucun transfert de chaleur",
          "aucun transfert d’énergie"
        ],
        "correct": 1,
        "explanation": "Q = 0, mais W peut être non nul et la température peut varier."
      },
      {
        "question": "Une compression à pression extérieure constante donne…",
        "options": [
          "W > 0",
          "W < 0",
          "W = 0 nécessairement"
        ],
        "correct": 0,
        "explanation": "ΔV < 0 et W = −pextΔV : le système reçoit du travail."
      },
      {
        "question": "À volume constant, si le seul travail possible est celui des forces de pression…",
        "options": [
          "ΔU = Qv",
          "ΔU = 0",
          "Qv = 0"
        ],
        "correct": 0,
        "explanation": "Wpression = 0, donc le premier principe donne ΔU = Qv."
      },
      {
        "question": "Une détente de 1 L à 2 bar donne quel travail ?",
        "options": [
          "−2 J",
          "−200 J",
          "+200 J"
        ],
        "correct": 1,
        "explanation": "2 bar = 2 × 10⁵ Pa et 1 L = 10⁻³ m³ : W = −200 J."
      },
      {
        "question": "Un gaz parfait de composition fixe subit une transformation isotherme. Son ΔU est…",
        "options": [
          "positif",
          "nul",
          "négatif"
        ],
        "correct": 1,
        "explanation": "Pour un gaz parfait de composition fixe, U ne dépend que de T. Ce résultat ne dispense pas d’étudier une réaction chimique."
      }
    ],
    "practice": {
      "prompt": "Un gaz passe de 1,5 L à 4,0 L sous une pression extérieure constante de 1,2 bar. Calculez W.",
      "value": -300,
      "unit": "J",
      "tol": 1,
      "hint": "ΔV = 2,5 × 10⁻³ m³ ; pext = 1,2 × 10⁵ Pa.",
      "solution": "W = −1,2 × 10⁵ × 2,5 × 10⁻³ = −300 J."
    },
    "takeaways": [
      "Reconnaître les contraintes d’une transformation et calculer le travail de pression.",
      "W = −p<sub>ext</sub>ΔV · 1 bar = 10⁵ Pa · 1 L = 10⁻³ m³",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Enthalpie et température",
    "goal": "Relier la chaleur à pression constante à ΔH et choisir une capacité calorifique.",
    "formula": "Qp = ΔH = mc ΔT = nC<sub>p,m</sub> ΔT",
    "example": "Chauffer 100 g d’eau de 20 à 30 °C avec c = 4,18 J·g⁻¹·K⁻¹ demande 100 × 4,18 × 10 = 4 180 J.",
    "activity": "Quel Q accompagne le refroidissement des mêmes 100 g d’eau de 30 à 20 °C ?",
    "answer": "Qp = −4 180 J. Une différence de température de 10 °C vaut 10 K.",
    "td": "Préparation aux bilans de la section 2.4.",
    "id": 4,
    "duration": 35,
    "section": "2.2",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>L’enthalpie est une fonction d’état définie par H = U + pV. À pression constante, avec seulement le travail des forces de pression et les conditions mécaniques appropriées, Qp = ΔH.</p><p>Sans réaction ni changement d’état, l’échauffement à pression constante s’écrit ΔH = ∫Cp dT. Si Cp est constant dans l’intervalle, ΔH = Cp ΔT.</p><p>Pour une capacité massique c en J·g⁻¹·K⁻¹, utilisez mcΔT avec m en g. Pour une capacité molaire Cp,m en J·mol⁻¹·K⁻¹, utilisez nCp,mΔT. La capacité du calorimètre lui-même s’exprime en J·K⁻¹.</p>"
      },
      {
        "heading": "Quand la capacité dépend de T",
        "html": "<p>L’expression Q = CΔT suppose une capacité constante sur l’intervalle. Si Cp,m(T) = a + bT + cT², alors pour n mol : ΔH = n[a(Tf−Ti) + b(Tf²−Ti²)/2 + c(Tf³−Ti³)/3]. Ici, T doit être utilisé dans l’unité correspondant à la loi fournie, habituellement le kelvin.</p><p>Une capacité molaire et une capacité massique ne sont pas deux noms pour la même valeur : Cp,m = M cp lorsque les unités de M et de cp sont cohérentes. Pour plusieurs constituants, leurs contributions s’additionnent dans les approximations retenues.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Une capacité donnée en J·mol⁻¹·K⁻¹ doit être multipliée par…",
        "options": [
          "la masse et ΔT",
          "la quantité de matière et ΔT",
          "le volume et ΔT"
        ],
        "correct": 1,
        "explanation": "mol × J·mol⁻¹·K⁻¹ × K = J."
      },
      {
        "question": "Chauffer 50 g d’eau de 10 K avec c = 4,18 J·g⁻¹·K⁻¹ demande…",
        "options": [
          "209 J",
          "2 090 J",
          "20 900 J"
        ],
        "correct": 1,
        "explanation": "Q = 50 × 4,18 × 10 = 2 090 J."
      },
      {
        "question": "Une capacité calorifique totale C s’exprime en…",
        "options": [
          "J·K⁻¹",
          "J·mol⁻¹",
          "K·J⁻¹"
        ],
        "correct": 0,
        "explanation": "C = Q/ΔT, tandis qu’une capacité massique ou molaire comporte une unité de masse ou de quantité de matière au dénominateur."
      },
      {
        "question": "Une eau passe de 25 à 40 °C. ΔT vaut…",
        "options": [
          "15 K",
          "288,15 K",
          "313,15 K"
        ],
        "correct": 0,
        "explanation": "Pour une différence, l’ajout de 273,15 s’annule. Pour une température absolue dans pV = nRT, il faut les kelvins."
      },
      {
        "question": "Qp = ΔH s’applique dans le cadre du cours lorsque…",
        "options": [
          "la pression est constante et le seul travail est celui de pression",
          "la température est toujours constante",
          "toute transformation est isolée"
        ],
        "correct": 0,
        "explanation": "Il faut les conditions de pression et de travail précisées dans la leçon. Une chaleur et une enthalpie ne sont pas interchangeables sans conditions."
      }
    ],
    "practice": {
      "prompt": "On chauffe 2 mol d’eau liquide de 15 à 35 °C. Cp,m = 75,3 J·mol⁻¹·K⁻¹. Calculez Qp.",
      "value": 3012,
      "unit": "J",
      "tol": 5,
      "hint": "nCp,mΔT, avec ΔT = 20 K.",
      "solution": "Qp = 2 × 75,3 × 20 = 3 012 J."
    },
    "takeaways": [
      "Relier la chaleur à pression constante à ΔH et choisir une capacité calorifique.",
      "Qp = ΔH = mc ΔT = nC<sub>p,m</sub> ΔT",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Changements d’état et réaction",
    "goal": "Distinguer une chaleur totale d’une enthalpie par unité d’avancement.",
    "formula": "Q<sub>transition</sub> = nΔ<sub>transition</sub>H · ΔH ≈ ξΔ<sub>r</sub>H°",
    "example": "Pour 3 mol d’eau liquide initialement à 20 °C, chauffées puis vaporisées à 100 °C : Q ≈ 3 × 75,3 × 80 + 3 × 40 700 = 140,2 kJ, avec les données du cours et la température d’ébullition arrondie.",
    "activity": "Une réaction a ΔrH° = −100 kJ·mol⁻¹ et ξ = 0,20 mol. Quelle est la variation totale ?",
    "answer": "ΔH ≈ −20 kJ. Le coefficient stœchiométrique choisi pour l’équation définit l’unité d’avancement.",
    "td": "2.2, exercice 1 ; 2.4, exercice 1, question 4.",
    "id": 5,
    "duration": 45,
    "section": "2.2",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>Un chauffage avec changement d’état comporte plusieurs étapes : chauffer la phase initiale, réaliser le changement d’état à sa température de transition, puis chauffer la phase finale. À pression fixée, le changement d’état d’un corps pur à l’équilibre se fait à température constante.</p><p>La fusion et la vaporisation nécessitent un apport de chaleur. Le changement inverse présente une enthalpie opposée.</p><p>Une enthalpie de réaction ΔrH s’exprime en J·mol⁻¹ d’avancement, tandis que la variation totale ΔH s’exprime en J. L’utilisation de ΔH ≈ ξΔrH° suppose les approximations appropriées du cours et une enthalpie de réaction considérée constante.</p><p>Le symbole ° indique un état standard, à p° = 1 bar. Il ne fixe pas la température à 298 K : la température doit être précisée.</p>"
      },
      {
        "heading": "Décomposer plutôt que chercher une formule unique",
        "html": "<p>Pour passer de glace à −10 °C à vapeur à 120 °C, à une pression telle que la fusion se fasse vers 0 °C et l’ébullition vers 100 °C, il faut cinq termes : chauffage de la glace, fusion, chauffage de l’eau liquide, vaporisation, chauffage de la vapeur. Les capacités des trois phases sont différentes.</p><p>Pour un soluté, l’état standard se définit par une concentration de référence de 1 mol·L⁻¹ avec un comportement idéal extrapolé depuis la dilution infinie. Il ne faut pas confondre cette convention avec une solution réelle à 1 mol·L⁻¹ nécessairement idéale.</p><p>L’approximation d’Ellingham consiste ici à considérer ΔrH° constant dans un intervalle de température. Une correction de température ou un changement de phase doit être ajouté lorsque cette approximation n’est pas valable. Une enthalpie négative renseigne sur le bilan thermique, pas à elle seule sur la spontanéité d’une réaction.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Pendant la fusion à l’équilibre d’un corps pur à pression fixée…",
        "options": [
          "la température augmente nécessairement",
          "la température reste constante malgré l’apport d’énergie",
          "aucune énergie n’est transférée"
        ],
        "correct": 1,
        "explanation": "L’énergie accompagne le changement de phase plutôt qu’une hausse de température."
      },
      {
        "question": "Vaporiser 2 mol d’eau à sa température d’ébullition avec ΔvapH = 40,7 kJ·mol⁻¹ demande…",
        "options": [
          "20,35 kJ",
          "81,4 kJ",
          "40,7 J"
        ],
        "correct": 1,
        "explanation": "La quantité totale vaut nΔvapH = 2 × 40,7 = 81,4 kJ."
      },
      {
        "question": "La condensation est l’inverse de la vaporisation. Son enthalpie, aux mêmes conditions, est…",
        "options": [
          "positive",
          "négative",
          "nulle"
        ],
        "correct": 1,
        "explanation": "L’enthalpie change de signe lorsqu’on inverse le changement d’état."
      },
      {
        "question": "Le symbole standard ° signifie nécessairement T = 298 K.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correct": 1,
        "explanation": "La pression standard est fixée à 1 bar ; il existe un état standard pour chaque température considérée."
      },
      {
        "question": "Si ΔrH° = −50 kJ·mol⁻¹ et ξ = 0,10 mol, ΔH vaut approximativement…",
        "options": [
          "−500 kJ",
          "−5 kJ",
          "+5 kJ"
        ],
        "correct": 1,
        "explanation": "ΔH ≈ ξΔrH° = −5 kJ. Cette relation utilise les approximations indiquées dans le cours."
      }
    ],
    "practice": {
      "prompt": "On chauffe 1 mol d’eau de 20 à 100 °C puis on la vaporise. Cp,m = 75,3 J·mol⁻¹·K⁻¹ et ΔvapH = 40,7 kJ·mol⁻¹. Calculez le total en kJ.",
      "value": 46.724,
      "unit": "kJ",
      "tol": 0.1,
      "hint": "Additionnez chauffage et vaporisation, après conversion J → kJ.",
      "solution": "Q = 75,3 × 80 / 1000 + 40,7 = 46,724 kJ, soit 46,7 kJ."
    },
    "takeaways": [
      "Distinguer une chaleur totale d’une enthalpie par unité d’avancement.",
      "Q<sub>transition</sub> = nΔ<sub>transition</sub>H · ΔH ≈ ξΔ<sub>r</sub>H°",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Enthalpies de formation",
    "goal": "Écrire une réaction de formation et calculer une enthalpie de réaction.",
    "formula": "Δ<sub>r</sub>H° = Σ<sub>produits</sub>ν Δ<sub>f</sub>H° − Σ<sub>réactifs</sub>ν Δ<sub>f</sub>H°",
    "example": "Pour C₂H₄(g) + H₂(g) → C₂H₆(g), les données du TD donnent −84,67 − 52,28 − 0 = −136,95 kJ·mol⁻¹.",
    "activity": "Écrivez la réaction de formation de H₂O(l) à 298 K.",
    "answer": "H₂(g) + ½ O₂(g) → H₂O(l). Le coefficient de l’eau est 1.",
    "td": "2.2, exercices 2 et 3 ; exercice 4 après le module 8.",
    "id": 6,
    "duration": 35,
    "section": "2.2",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>L’enthalpie standard de formation correspond à la formation de <b>une mole</b> d’un composé dans son état standard à partir des éléments dans leurs états standard de référence, à la même température.</p><p>L’enthalpie standard de formation d’un élément dans son état de référence vaut zéro par convention. Cela ne signifie pas que toutes ses formes ont une enthalpie de formation nulle : le graphite et le diamant, par exemple, doivent être distingués.</p><p>Pour une réaction équilibrée, additionnez les enthalpies de formation des produits pondérées par leurs coefficients, puis soustrayez la somme correspondante pour les réactifs. Précisez les phases.</p>"
      },
      {
        "heading": "Équilibrer et préciser les états",
        "html": "<p>Le calcul thermochimique commence par une équation équilibrée. Une combustion donnant H₂O(l) n’a pas la même enthalpie qu’une combustion donnant H₂O(g). L’enthalpie de formation d’un composé est associée à un état physique et à une température.</p><p>Exemple supplémentaire : les données du cours pour 3 C₂H₂(g) → C₆H₆(g) conduisent à 82,9 − 3 × 226,7 = −597,2 kJ·mol⁻¹. Pour ξ = 0,10 mol, la variation totale vaut environ −59,72 kJ.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Si on double tous les coefficients d’une équation, son ΔrH°…",
        "options": [
          "reste inchangé",
          "double",
          "change uniquement de signe"
        ],
        "correct": 1,
        "explanation": "L’enthalpie de réaction se rapporte à l’équation telle qu’elle est écrite."
      },
      {
        "question": "La réaction de formation d’une mole de CO₂(g) à 298 K est…",
        "options": [
          "C(graphite) + O₂(g) → CO₂(g)",
          "CO(g) + ½ O₂(g) → CO₂(g)",
          "2 C(graphite) + 2 O₂(g) → 2 CO₂(g)"
        ],
        "correct": 0,
        "explanation": "Il faut partir des éléments dans leurs états de référence et former exactement une mole de composé."
      },
      {
        "question": "ΔfH°(O₂,g) à 298 K vaut zéro parce que…",
        "options": [
          "l’oxygène ne contient aucune énergie",
          "O₂(g) est l’état de référence de l’élément à cette température",
          "toutes les molécules gazeuses ont une enthalpie nulle"
        ],
        "correct": 1,
        "explanation": "C’est une convention de référence, pas une absence d’énergie."
      },
      {
        "question": "Avec 3 C₂H₂(g) → C₆H₆(g), ΔfH°(C₂H₂) = 226,7 et ΔfH°(C₆H₆) = 82,9 kJ·mol⁻¹, ΔrH° vaut…",
        "options": [
          "−597,2 kJ·mol⁻¹",
          "−143,8 kJ·mol⁻¹",
          "+597,2 kJ·mol⁻¹"
        ],
        "correct": 0,
        "explanation": "82,9 − 3 × 226,7 = −597,2 kJ·mol⁻¹ pour l’équation écrite."
      },
      {
        "question": "Le diamant et le graphite ont nécessairement la même enthalpie de formation.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correct": 1,
        "explanation": "À 298 K, le graphite est l’état standard de référence du carbone. Une autre forme doit être traitée séparément."
      }
    ],
    "practice": {
      "prompt": "C₂H₄(g) + H₂(g) → C₂H₆(g). ΔfH° : C₂H₄ = 52,28 ; C₂H₆ = −84,67 ; H₂ = 0 kJ·mol⁻¹. Calculez ΔrH°.",
      "value": -136.95,
      "unit": "kJ·mol⁻¹",
      "tol": 0.05,
      "hint": "Produits moins réactifs, avec leurs coefficients.",
      "solution": "ΔrH° = −84,67 − 52,28 = −136,95 kJ·mol⁻¹."
    },
    "takeaways": [
      "Écrire une réaction de formation et calculer une enthalpie de réaction.",
      "Δ<sub>r</sub>H° = Σ<sub>produits</sub>ν Δ<sub>f</sub>H° − Σ<sub>réactifs</sub>ν Δ<sub>f</sub>H°",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Cycles de Hess",
    "goal": "Combiner des réactions en respectant leur sens, leurs coefficients et les phases.",
    "formula": "Δ<sub>r</sub>H° = somme des enthalpies des étapes ajustées",
    "example": "Pour ½ H₂(g) + ½ Cl₂(g) → HCl(g), on rompt les demi-moles de liaisons H–H et Cl–Cl puis on forme H–Cl : ½ × 436 + ½ × 243 − 432 = −92,5 kJ·mol⁻¹.",
    "activity": "Pourquoi faut-il changer le signe d’une enthalpie lorsque l’on inverse une réaction ?",
    "answer": "On échange les états initial et final : Hf − Hi devient Hi − Hf.",
    "td": "2.3, exercices 1 et 2 pour débuter ; exercices 5 et 6 à discuter en séance.",
    "id": 7,
    "duration": 45,
    "section": "2.3",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>Parce que H est une fonction d’état, une transformation globale possède la même variation d’enthalpie quel que soit le chemin permettant de relier ses états initial et final.</p><p>Inverser une réaction change le signe de son enthalpie. Multiplier ses coefficients par k multiplie son enthalpie par k. Additionner les équations permet d’éliminer les espèces intermédiaires présentes des deux côtés.</p><p>Les enthalpies de dissociation concernent les espèces gazeuses. Le calcul par liaisons demande de compter les liaisons rompues puis formées, et d’ajouter les éventuelles étapes d’atomisation ou de changement de phase. Les valeurs moyennes de liaison donnent une estimation.</p>"
      },
      {
        "heading": "Combustion et autres étapes du cycle",
        "html": "<p>Une combustion complète d’un composé carboné approprié utilise O₂ et produit CO₂ et H₂O, dont on doit préciser la phase. Pour CH₄(g) : CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), si l’eau finale est liquide. Le dioxygène est ajouté en quantité suffisante dans les exercices de combustion totale.</p><p>Dans l’exemple du propane, les données arrondies du cours donnent ΔfH°(C₃H₈) = 3 × (−394) + 4 × (−286) − (−2220) = −106 kJ·mol⁻¹. Les combustions des éléments sont combinées à la combustion inversée du propane.</p><p>Certains cycles comportent une ionisation M(g) → M⁺(g) + e⁻ ou un attachement électronique M(g) + e⁻ → M⁻(g). Leur sens et leurs valeurs doivent être repris tels qu’ils sont définis dans les données. Ne donnez pas automatiquement le même signe à ces deux processus.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "Former une liaison à partir des atomes gazeux correspond à…",
        "options": [
          "l’opposé de son enthalpie de dissociation",
          "son enthalpie de dissociation positive",
          "une enthalpie toujours nulle"
        ],
        "correct": 0,
        "explanation": "La formation de la liaison est la transformation inverse de sa dissociation."
      },
      {
        "question": "A → B a une enthalpie de +20 kJ·mol⁻¹. B → A a…",
        "options": [
          "+20 kJ·mol⁻¹",
          "−20 kJ·mol⁻¹",
          "0"
        ],
        "correct": 1,
        "explanation": "Inverser l’équation inverse le signe."
      },
      {
        "question": "A → B : +20 ; B → C : −50 kJ·mol⁻¹. Pour A → C, on obtient…",
        "options": [
          "−30 kJ·mol⁻¹",
          "+30 kJ·mol⁻¹",
          "−70 kJ·mol⁻¹"
        ],
        "correct": 0,
        "explanation": "Les équations s’ajoutent en éliminant B. Les enthalpies s’ajoutent : 20 − 50 = −30."
      },
      {
        "question": "Les enthalpies de dissociation de liaison utilisées ici concernent…",
        "options": [
          "les molécules gazeuses",
          "uniquement les liquides",
          "indifféremment toutes les phases"
        ],
        "correct": 0,
        "explanation": "Il faut ajouter les changements de phase ou atomisations nécessaires pour relier les bonnes espèces."
      },
      {
        "question": "Deux cycles de Hess exacts menant aux mêmes états donnent…",
        "options": [
          "la même enthalpie globale",
          "des résultats dépendant de l’ordre des étapes",
          "nécessairement une enthalpie nulle"
        ],
        "correct": 0,
        "explanation": "L’enthalpie est une fonction d’état. Les différences numériques éventuelles proviennent de données ou d’approximations."
      }
    ],
    "practice": {
      "prompt": "A → B : +35 kJ·mol⁻¹ ; C → B : −15 kJ·mol⁻¹. Calculez ΔH pour A → C.",
      "value": 50,
      "unit": "kJ·mol⁻¹",
      "tol": 0.1,
      "hint": "La seconde réaction doit être inversée.",
      "solution": "A → B : +35 ; B → C : +15 ; total +50 kJ·mol⁻¹."
    },
    "takeaways": [
      "Combiner des réactions en respectant leur sens, leurs coefficients et les phases.",
      "Δ<sub>r</sub>H° = somme des enthalpies des étapes ajustées",
      "Toujours définir le système et vérifier les unités."
    ]
  },
  {
    "title": "Bilans thermiques",
    "goal": "Inventorier les transformations et construire un bilan sans oublier le calorimètre.",
    "formula": "Q<sub>réaction</sub> + Σ Q<sub>chauffage</sub> + Σ Q<sub>transition</sub> = 0",
    "example": "250 g d’eau à 18 °C et un calorimètre à 18 °C reçoivent 250 g d’eau à 40 °C. Si Tf = 28,22 °C et c = 4,18 J·g⁻¹·K⁻¹, le bilan est Ccal(28,22−18) + 250c(28,22−18) + 250c(28,22−40) = 0. On obtient Ccal ≈ 159,5 J·K⁻¹.",
    "activity": "Pour CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), calculez Δνg.",
    "answer": "Δνg = 1 − (1 + 2) = −2. L’eau liquide ne contribue pas au décompte des gaz.",
    "td": "2.4, exercices 1 et 2 ; exercice 3 pour la relation H/U. Les calculs détaillés d’étalonnage d’une bombe ne sont pas développés ici.",
    "id": 8,
    "duration": 50,
    "section": "2.4",
    "lessons": [
      {
        "heading": "Comprendre la notion",
        "html": "<p>On considère l’ensemble calorimètre + contenu comme adiabatique. Il n’échange pas de chaleur avec l’extérieur, mais les sous-systèmes échangent de l’énergie entre eux. La chaleur libérée par une réaction peut chauffer la solution et le calorimètre.</p><p>Chaque terme de chauffage utilise sa propre température initiale : Ccal(Tf − Tcal,i), mc(Tf − Ti). Ajoutez les réactions et changements d’état. Vérifiez ensuite les hypothèses, notamment la fusion complète ou partielle de la glace.</p><p>À volume constant et avec seulement le travail de pression, Qv = ΔU. Pour une réaction à température donnée impliquant des gaz parfaits, en négligeant la contribution pV des phases condensées : ΔrH° = ΔrU° + ΔνgRT. Δνg est la somme des coefficients gazeux des produits moins celle des réactifs.</p>"
      },
      {
        "heading": "Une réaction dans le calorimètre",
        "html": "<p>Dans l’exemple Zn/Cu²⁺ du cours, on assimile 150 mL de solution à 150 g d’eau et on utilise le terme de capacité du zinc comme approximation de l’exercice. Le bilan donne ΔH ≈ −[160 × 10 + 150 × 4,18 × 10 + 3 × 0,380 × 8] = −7,879 kJ. Pour en déduire ΔrH, il faudrait connaître l’avancement, donc le réactif limitant ; la concentration de Cu²⁺ n’est pas donnée ici.</p><p>Un vase Dewar limite les échanges thermiques grâce à sa double paroi, au vide et aux surfaces réfléchissantes. L’agitateur favorise l’homogénéité de température. Dans une bombe calorimétrique, la réaction se déroule dans une enceinte rigide, en contact thermique avec le milieu calorimétrique : la bombe seule n’est pas adiabatique vis-à-vis de ce milieu.</p><p>Le bilan est écrit pour l’ensemble qui n’échange pas de chaleur avec l’extérieur. Évitez de conclure « Qréaction = 0 » parce que cet ensemble est adiabatique. Ce sont les différentes contributions internes qui se compensent.</p>"
      },
      {
        "heading": "Quand toute la glace ne fond pas",
        "html": "<p>Commencez par comparer la chaleur disponible en refroidissant l’eau et le calorimètre jusqu’à 0 °C à celle nécessaire à la fusion de toute la glace initialement à 0 °C. Si la chaleur disponible est insuffisante, le mélange final contient eau et glace à 0 °C : on calcule alors la masse fondue. Si elle suffit, on ajoute le réchauffement de l’eau issue de la fusion et on calcule une température finale positive.</p><p>Exemple guidé : 200 g d’eau à 20 °C, un calorimètre de 50 J·K⁻¹ à la même température, et 50 g de glace à 0 °C. Avec c = 4,18 J·g⁻¹·K⁻¹ et Lfus = 333,3 J·g⁻¹, le refroidissement jusqu’à 0 °C fournit (200 × 4,18 + 50) × 20 = 17 720 J. La fusion demande environ 16 665 J. Toute la glace fond ; le reliquat chauffe 250 g d’eau et le calorimètre, donnant Tf ≈ 0,96 °C. Le résultat positif valide le scénario.</p>"
      }
    ],
    "quizzes": [
      {
        "question": "La solution se réchauffe lors d’une réaction dans un calorimètre adiabatique. Le terme de chaleur de réaction est…",
        "options": [
          "positif",
          "négatif",
          "nécessairement nul"
        ],
        "correct": 1,
        "explanation": "Le chauffage de la solution et du calorimètre est positif. La réaction fournit cette énergie : son terme est négatif, dans les hypothèses du bilan."
      },
      {
        "question": "Dans un mélange eau chaude/eau froide, chaque terme de chauffage utilise…",
        "options": [
          "la même température initiale",
          "sa propre température initiale",
          "toujours 0 °C"
        ],
        "correct": 1,
        "explanation": "Le calorimètre et l’eau froide peuvent partir à T1, tandis que l’eau chaude part à T2."
      },
      {
        "question": "Pour CO₂(g) + 4 H₂(g) → CH₄(g) + 2 H₂O(g), Δνg vaut…",
        "options": [
          "−2",
          "+2",
          "0"
        ],
        "correct": 0,
        "explanation": "3 moles gazeuses dans les produits et 5 dans les réactifs, par unité d’avancement."
      },
      {
        "question": "Une partie de la glace demeure à l’équilibre avec l’eau liquide à pression atmosphérique. Tf est approximativement…",
        "options": [
          "négative",
          "0 °C",
          "toujours positive"
        ],
        "correct": 1,
        "explanation": "La coexistence glace/eau à l’équilibre impose la température de fusion. Il faut vérifier le bilan et calculer la fraction fondue."
      },
      {
        "question": "Dans une bombe rigide avec seulement le travail de pression, la chaleur de réaction mesurée donne…",
        "options": [
          "ΔU",
          "directement ΔH dans tous les cas",
          "uniquement le travail"
        ],
        "correct": 0,
        "explanation": "Wpression = 0 : Qv = ΔU. La conversion vers ΔH utilise notamment ΔνgRT."
      }
    ],
    "practice": {
      "prompt": "Une réaction chauffe 100 g de solution et un calorimètre de 50 J·K⁻¹ de 5 K. csolution = 4,18 J·g⁻¹·K⁻¹. Calculez sa chaleur totale de réaction, en kJ.",
      "value": -2.34,
      "unit": "kJ",
      "tol": 0.01,
      "hint": "Qréaction = −(mc + Ccal)ΔT.",
      "solution": "Qréaction = −(100 × 4,18 + 50) × 5 = −2 340 J = −2,34 kJ."
    },
    "takeaways": [
      "Inventorier les transformations et construire un bilan sans oublier le calorimètre.",
      "Q<sub>réaction</sub> + Σ Q<sub>chauffage</sub> + Σ Q<sub>transition</sub> = 0",
      "Toujours définir le système et vérifier les unités."
    ]
  }
];
