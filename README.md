<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/YassineCherkaoui/Test_Full_Stack">
    <img src="./screenshots/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Casino à Las Vegas</h3>

  <p align="center">
    Nous sommes au Ceasar Palace casino à Las Vegas, assis à une table spéciale.
    <br />
    <a href="https://github.com/YassineCherkaoui/Test_Full_Stack"><strong>Explorer la doc »</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#about-the-project">À propos du projet</a>
      <ul>
        <li><a href="#built-with">Construit avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Commencer</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## À propos du projet

[![Product Name Screen Shot][product-screenshot]](https://example.com)
[![Product Name Screen Shot][product-screenshot_2]](https://example.com)

Nous sommes au Ceasar Palace casino à Las Vegas, assis à une table spéciale.
But du jeu : piocher le plus de paires.
Nombre de joueurs : 2
Matériel : 5 paires de cartes rando

# Exemple :
10 de ♠
Valets de ♠
Reine de ♠
Roi de ♠
As de ♠
10 de ♥
Valets de ♥
Reine de ♥
Roi de ♥
As de ♥
# Règles du jeu :
Il s’agit de former des paires de cartes selon le principe suivant :
Sur une table, il y aura les 10 cartes disposer aléatoirement faces cachées. Il faudra
piocher 2 cartes aux choix sur la table en essayant de former une paire.
- Compte des cartes:
La partie se joue en 10points
Chaque paire piocher par le joueur vaut 2 points.
# exemple:
Piocher reine de ♥ et 10 de ♠ , aucun point ne sera compté.
Piocher reine de ♥ et reine de ♥, 2 points accordés au joueur.
Un minimum de 3 paires piochées par un joueur veut dire que la partie est remporté par ce
dernier.
# - Indications:
Il y aura, en début de partie, un 3..2..1..go
La partie se joue en 1min avec deux décomptes timers généraux pour chacun des deux
joueurs.
Un tour dure 5 seconde par joueur. Ce dernier est synchronisé au timer général du joueur
ayant le tour.
Lorsqu'un joueur dépasse ses 5 secondes, il passe son tour au second joueur.
Lorsque le joueur pioche les deux cartes et qu'elles ne forment pas la paire, les cartes sont
retourner sur la tables et mélangées random.
Puis le tour et le décompte timer du second joueur s'active.
Le reste des secondes après la mauvaise pioche sont cumulables au timer générale du joueur
ayant le tour.
A chaque pioche des deux cartes par un joueur, ces dernières se mélangent random en faces
cachées sur la table.
Si le joueur ayant le tour pioche une paire, il peut continuer le jeu pendant les secondes
restante.(Décompte de 5sec)
A la fin du décompte timer général d'un joueur, la partie est remportée par l'opposant.
Cas d'exception: le compte des cartes.
(Si un joueur détient plus de cartes que son opposant et que son timer général se termine, il
remporte tout de même la partie)
Un chat devra être intégrer pour permettre un échange écrit entre les deux joueurs.
Il faudra aussi stocker le nombres de points pour chaque joueur, ainsi que leur date time.
Un compteur de victoires / défaites devra être aussi affiché et stocké.
Des animations devront être faites pour développer l’entièreté de ce mini jeu.
# ●Technique:
-Setting up a MERN stack pour le développement.
-Utiliser Redux et SASS.
-Vous avez le choix: material-ui , styled-components ou autre.
-Containerizing l'application en utilisant Docker.
-Le Code source doit être pushé sur GitHub attaché avec un Readme et une vidéo de
démonstration du fonctionnel
- Votre code sera évalué sur la base de : la structure du code, les meilleures pratiques de 
programmation, la lisibilité.
- Mettez l'accent sur la qualité du code. Ne piratez pas quelque chose rapidement, prenez votre 
temps et créez quelque chose de propre.
- Nous sommes à la recherche de quelque chose de réactif et créatif

<p align="right">(<a href="#top">retour au sommet</a>)</p>



### Built With
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [socket io](https://socket.io/)
* [NodeJS](https://nodejs.org/)

<p align="right">(<a href="#top">retour au sommet</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Code pour commencer

### Conditions préalables
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/YassineCherkaoui/Test_Full_Stack
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   * ```sh
  cd client
  ```
  * ```sh
  npm install
  ```
  * ```sh
  npm start
  ```

  puis ouvrez un nouveau terminal

  * ```sh
  cd server
  ```
  * ```sh
  npm install
  ```
    * ```sh
  npm start
  ```

<p align="right">(<a href="#top">retour au sommet</a>)</p>


<!-- LICENSE -->
## License

Distribué sous la licence MIT. Voir `LICENSE.txt` pour plus d'informations.

<p align="right">(<a href="#top">retour au sommet</a>)</p>



<!-- CONTACT -->
## Contact

YassineCherkaoui - [@CherkaouiYa](https://twitter.com/CherkaouiYa) - yassin.cherkaoui2000@gmail.com

Lien du projet: [https://github.com/YassineCherkaoui/Test_Full_Stack](https://github.com/YassineCherkaoui/Test_Full_Stack)

<p align="right">(<a href="#top">retour au sommet</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">retour au sommet</a>)</p>


[contributors-url]: https://github.com/YassineCherkaoui/Test_Full_Stack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/YassineCherkaoui/Test_Full_Stack/network/members
[stars-url]: https://github.com/YassineCherkaoui/Test_Full_Stack/stargazers
[issues-url]: https://github.com/YassineCherkaoui/Test_Full_Stack/issues
[license-url]: https://github.com/YassineCherkaoui/Test_Full_Stack/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cherkaouiya
[product-screenshot]: Screenshots/login_Page.png
[product-screenshot_2]: Screenshots/Game_Page.png
