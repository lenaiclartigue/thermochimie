# Thermochimie · Licence

Version du 14 octobre 2026 : exercices guidés et fiche pratique. Conception du parcours : Lénaïc Lartigue.

Site statique pour GitHub Pages : préparer la théorie du chapitre 2 à distance, puis travailler les exercices et questions en séance. Le chapitre 1 est un prérequis ; le chapitre 3 n'est pas inclus.

## Organisation

Dans chaque partie : **Comprendre → QCM → Exercices → Discussion**. Les 56 QCM vérifient la compréhension directe du cours. Les 15 exercices demandent ensuite une réponse, avec des indices, une vérification par étape et une correction détaillée à ouvrir volontairement. Sept reprennent les exercices du diaporama principal ; leur correspondance figure dans `NOTES_PEDAGOGIQUES.md`.

| Fichier | Partie | Questions QCM | Exercices |
| --- | --- | ---: | ---: |
| `systeme.html` | Décrire un système | 6 | 2 |
| `premier-principe.html` | Premier principe, travail et chaleur | 15 | 4 |
| `enthalpie.html` | Enthalpie | 10 | 2 |
| `enthalpie-reaction.html` | Enthalpie de réaction | 10 | 2 |
| `hess.html` | Cycles de Hess | 7 | 2 |
| `calorimetrie.html` | Calorimétrie | 8 | 3 |

L'accueil présente six encarts cliquables. La distinction entre calcul à partir des tables et des cycles de Hess, d'une part, et détermination expérimentale par calorimétrie, d'autre part, se trouve à la fin du cours Enthalpie de réaction.

L'onglet « Préparer les TD » et les calculateurs « Expérimenter » ont été retirés. Les définitions du diaporama sont reprises, avec les précisions scientifiques nécessaires. Des liens vers les exercices et les compléments externes sont placés près des notions concernées.

## Fichiers communs

- `fiche-pratique.html` : formules du chapitre, unités, conditions d'utilisation et rappels d'intégration ; impression possible.
- `integrales.html` : redirection de l'ancienne adresse vers le premier principe. Le curseur et `integrales.js` ont été retirés.
- `ressources.html` et `RESSOURCES_EN_LIGNE.md` : récapitulatif des compléments accessibles aussi au fil du cours.
- `forum.html` : forum général intégré ; `resultats.html` : bilan local et export JSON ; `aide.html` : utilisation du site.
- `app.js` : onglets, QCM, scores, historique et fenêtres ; `exercices.js` : saisie, vérification et sauvegarde des exercices.
- `style.css` : présentation, mobile et impression ; `giscus-config.js` : configuration publique des commentaires.
- `LICENSE.md` et `conditions.js` : même texte de licence et de citation, affiché dans une fenêtre du site.
- `AUDIT_PEDAGOGIQUE.md` : audit scientifique et points à reprendre dans les supports ; `NOTES_PEDAGOGIQUES.md` : choix pédagogiques et correspondance des exercices.
- `.nojekyll` : désactivation du traitement Jekyll.

## Mettre à jour GitHub Pages

Cette archive est **complète et cumulative**. Décompresser et déposer son contenu à la racine du dépôt `lenaiclartigue/thermochimie`, en remplaçant les fichiers existants. Ajouter aussi `exercices.js` et `fiche-pratique.html`. Ne pas déposer seulement le ZIP ni créer un sous-dossier contenant le site.

Conserver `Deploy from a branch → main → /(root)`. Après le déploiement, ouvrir [le site](https://lenaiclartigue.github.io/thermochimie/) et actualiser si l'ancienne version reste en cache. Aucun envoi ni déploiement sur GitHub n'a été effectué lors de cette préparation.

L'ancien `integrales.js` peut être supprimé du dépôt : il n'est plus chargé. Garder le nouveau `integrales.html` pour les anciens liens. Les anciens `module-01.html` à `module-08.html` et `cours.js` ne sont plus utilisés et peuvent aussi être retirés. Remplacer les fichiers ne supprime pas automatiquement ces anciens fichiers. Les PowerPoint et le fascicule de TD ne font pas partie de l'archive.

## Modifier un contenu

Chaque partie possède son HTML : `pane-course`, `pane-quiz`, `pane-exercises` et `pane-discussion`. Conserver les identifiants utilisés par les scripts et les liens.

Pour un QCM, modifier les propositions, `data-correct` (index à partir de 0) et `data-explanation`. Chaque groupe radio conserve un nom propre à la question et une réponse obligatoire.

Les exercices sont écrits directement dans les HTML. Chaque champ porte `data-expected`, `data-tolerance` pour les nombres, et `data-hint`. Adapter ensemble énoncé, unité, valeur attendue, tolérance et correction. Les attributs HTML utilisent le point décimal ; la saisie étudiante accepte virgule, espaces ou notation scientifique. L'unité est affichée à côté du champ et ne doit pas être saisie. Une correction cachée reste accessible dans le code source : il s'agit d'un entraînement autonome.

Les définitions portent la classe `definition`, les ressources `inline-resource`. Les liens externes ouvrent un nouvel onglet. Les contenus et licences restent ceux de leurs auteurs.

## Réponses et sauvegarde

Pour les QCM, « Valider mes réponses » affiche score et explications. Le meilleur score sert au repère de progression : 80 % est un objectif pédagogique, pas une note officielle. Les réponses validées et les 100 dernières tentatives sont conservées.

Pour un exercice, on peut vérifier une étape sans remplir tous les champs. Une erreur donne un indice ; la solution détaillée ne s'ouvre pas automatiquement. Les réponses en cours, les étapes vérifiées et la consultation de la correction sont conservées. « Recommencer cet exercice » efface cet exercice seulement.

« Mes résultats » rassemble QCM et exercices et permet un export JSON. Aucun résultat n'est envoyé automatiquement à l'enseignant. Les données restent dans le navigateur, sans synchronisation entre appareils ; les effacer supprime la sauvegarde. L'export n'est pas une évaluation certifiée.

Les clés `thermo-progress-six-audit-v2`, `thermo-answers-six-audit-v2` et `thermo-attempts-six-v1` sont conservées : cette refonte ne remet pas à zéro les QCM de la version auditée précédente. Les exercices utilisent `thermo-exercises-guided-v1`. « Effacer ma progression locale » supprime les réponses et résultats des QCM et exercices. Les anciennes données du découpage en huit modules ne sont pas migrées.

## Forums et licence

Les commentaires sont stockés dans GitHub Discussions et affichés par giscus après « Afficher les échanges ». Un compte GitHub est nécessaire pour participer ; la connexion peut ouvrir une fenêtre d'authentification. Les messages sont publics.

Le dépôt, la catégorie `Announcements`, les identifiants, le mappage strict `pathname` et les adresses des six parties et du forum sont conservés. Aucun commentaire n'est supprimé ni déplacé.

Les contenus pédagogiques originaux restent sous **CC BY-NC-ND 4.0**. Le pied de page ouvre conditions et citation dans une fenêtre fermable. `LICENSE.md` et le texte de `conditions.js` restent identiques. Les droits des éléments tiers et le code sont traités séparément dans ce texte.

## Vérifications et limites

Les douze pages principales et la redirection ont été contrôlées localement dans Chromium 153 : 56 QCM, 15 exercices, erreurs et validation partielle, sauvegarde, export, effacement, navigation, impression et affichage à 390 px. Des captures ont été examinées. Les contrôles scientifiques et leurs limites sont détaillés dans `AUDIT_PEDAGOGIQUE.md`.

Ces vérifications ne remplacent pas un essai pédagogique avec le groupe. L'authentification giscus et le site publié ne sont pas validés par les tests locaux.
