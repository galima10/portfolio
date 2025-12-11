# Mon portfolio

Dans ce repo se trouve le code source de mon portfolio. <br>
Pour le visiter : https://magalimai.fr <br>
<br>

## Format du portfolio

### Un site codé, pensé mobile-first
Pour mon portfolio, j’ai eu envie de créer quelque chose qui me ressemble vraiment : un site simple, clair, codé par mes soins, et déployé sur mon propre nom de domaine. <br>

*Stack utilisée* : TypeScript • React • Vite • Sass <br>
Un choix qui reflète mon envie de travailler avec des outils modernes, utilisés dans le milieu pro.

### Arborescence
- Une page principale fluide avec toutes les sections importantes.
- Des pages projets séparées pour ne pas surcharger l’ensemble.
J’ai privilégié une approche one-page car j’aime l’idée d’un parcours continu, où la personne qui me découvre avance naturellement dans mon univers.

### Design
J’aime imaginer mon portfolio comme un petit voyage.<br>
Une timeline qui serpente du haut vers le bas, avec des arrêts, des étapes, des points marquants, comme ma ligne de vie. Un chemin qui représente mon évolution et ma façon d’avancer : doucement, mais sûrement, et toujours avec intention.

#### Section Présentation - "Qui suis-je ?"
Une série de slides qui se suivent, comme si on apprenait à me connaître pas à pas. On ne peut pas aller plus loin tant qu’on n’a pas lu la suite : c’est ma manière de dire de prendre le temps de me connaître avant d'aller plus loin.

#### Section Compétences - "Mon équipement"
Mes compétences présentées comme des outils. Et pour chaque outil, leurs statistiques. <br>
Parce que pour développer, il faut un équipement, mais aussi savoir s’en servir au bon moment.

#### Section Outils & Techonologies - "Mes territoires"
Les technologies sont à mes yeux comme des zones à explorer où j'utilise mes outils pour avancer : 
- les terres déjà explorer,
- celles encore mystérieuses,
- et les endroits où je commence à mettre les pieds.
Chaque technologie devient un petit point sur la carte : une ville, une région, une zone plus ou moins explorée. <br>
Et mes couleurs racontent aussi quelque chose :
- le bleu pour ce qui est visible et créatif,
- le rouge pour la partie plus logique, telle la forge du web
- le vert pour tout ce qui touche à la donnée comme la forêt de données,
- le gris pour les outils qu'on utilise partout,
- le violet pour le full-stack, mon terrain de jeu préféré.

#### Section Projets - "Mes quêtes"
Chaque projet devient une île. <br>
Avec une phrase d'accroche, un badge, et les icônes de la stack utilisée. Comme un carnet d'aventure.

#### Section Contact - "Le prochain cap"
Une section simple, humaine, chaleureuse.<br>
Parce que c’est ici que mon aventure peut rejoindre celle de quelqu’un d’autre.

## Organisation de fichiers
Le projet est une application React construite avec le framework Sass et compilé avec Vite pour un déployement directement sur mon nom de domaine.

### Structure
```
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├─ assets/
│   │   ├── fonts/
│   │   └── images/
│   ├─ components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├─ hooks/
│   │   ├── appElements/
│   │   └── global/
│   ├─ styles/
│   │   ├── globals/
│   │   │   ├── _fonts.scss
│   │   │   ├── _general.scss
│   │   │   ├── _reset.scss
│   │   │   └── _theme.scss
│   │   ├── partials/
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _placeholders.scss
│   │   │   └── _variables.scss
│   │   └── main.scss
│   ├─ types/
│   ├─ utils/
│   ├─ App.tsx
│   ├─ global.d.ts
│   └─ main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```
### Dossiers importants
- `components/` : <br>
  Ici, tous les composants sont stockés. Chaque composant a un fichier .tsx accompagné d'un fichier .scss module qui est scopé dans le composant. Seul de l'affichage est dans les fichiers des composants, il n'y a aucune logique métier. <br>
  Les composants sont séparés en 3 sous-dossiers : atoms/, molecules/ et organisms/, en accord avec le système Atomic Design.
- `hooks/` : <br>
  Ici se trouve la logique métier utilisée dans les composants. Il y a 2 types de hook différents utilisés : les hooks par composant et les hooks utilisés par plusieurs composants.
- `styles/` : <br>
  Dans ce dossier se trouve le style global ainsi que celui du thème de l'application. Se trouvent également les variables .scss, mixins, functions et placeholders pour simplifier les calculs.

### Fichiers importants
- `deploy.yml` : <br>
  Le workflow pour permettre à Github de build l'application avec Vite et de push l'application compilé sur un autre repo externe pour directement l'afficher sur le nom de domaine uniquement le HTML, CSS, JS.
- `global.d.ts` : <br>
  Pour permettre à React de comprendre l'import de fichiers avec une extension autre que .tsx ou .ts.
- `tsconfig.json` : <br>
  Permet de configurer TypeScript pour permettre l'autocomplétion en développement et reprérer les erreurs de typages.
- `vite.config.ts` : <br>
  Permet de configurer Vite notamment dans la résolution de chemins avec alias, les caractéristiques du build de sortie de la mise en production mais aussi de l'environnement de développement.
  



