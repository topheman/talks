// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  // Cite,
  Deck,
  Heading,
  // ListItem,
  // List,
  // Quote,
  Slide,
  // Text,
  Image,
  // CodePane,
  Appear
} from "spectacle";
// import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactLogo: require("../assets/react-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#900000"
}, {
  primary: 'Source Sans Pro',
  secondary: 'sans-serif'
});

// override theme
console.log(theme);
theme.screen.progress.pacman.color = theme.screen.colors.tertiary;
theme.screen.progress.pacman.pacmanTop.background = theme.screen.colors.tertiary;
theme.screen.progress.pacman.pacmanBottom.background = theme.screen.colors.tertiary;
theme.screen.progress.pacman.point.borderColor = theme.screen.colors.tertiary;
theme.screen.controls.nextIcon.fill = theme.screen.colors.tertiary;
theme.screen.controls.prevIcon.fill = theme.screen.colors.tertiary;
for (let i = 1; i <= 6; i++) {
  theme.screen.components.heading[`h${i}`].color = theme.screen.colors.tertiary;
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={3}><a href="https://github.com/topheman/npm-registry-browser" target="_blank" title="npm-registry-browser on github">npm-registry-browser</a></Heading>
          {/* <br/>
          <Heading size={5}><a href="https://github.com/topheman/npm-registry-browser" target="_blank" title="npm-registry-browser on github">Pourquoi j'ai fait ce projet</a></Heading> */}
          <div>
            <Image src={images.reactLogo} width="100px"/>
          </div>
          <p>
            <a href="http://labs.topheman.com" target="_blank">Christophe Rosset</a> / <a href="https://twitter.com/topheman" target="_blank">@topheman</a>
          </p>
          <p><a href="https://www.meetup.com/fr-FR/ReactJS-Paris/" title="Meetup ReactJS Paris" target="_blank">ReactJS Paris - 18 avril 2018</a></p>
          <p>
            <span role="img" aria-label="TV">
              📺
            </span>{" "}
            <a
              href="http://dev.topheman.com/pourquoi-realiser-topheman-npm-registry-browser-video-talk/"
              title="Video du talk"
              target="_blank"
            >
              Voir la vidéo du talk
            </a>
          </p>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="300px"/>
        </Slide>
        <Slide>
          <Heading size={3}>📒 Constat</Heading>
        </Slide>
        <Slide>
          <Heading size={5}>🔦 Veille</Heading>
          <ul>
            <li>Beaucoup de contenus de qualité</li>
            <li>Sur tous sujets</li>
            <li>Très pointus</li>
            <li>Payant / Gratuit</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>🌎 Accès à des communautés IRL</Heading>
          <ul>
            <li>Meetups</li>
            <li>Conférences</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>CEPENDANT</Heading>
          <p>La difficulté n'est pas de trouver du contenu de qualité,</p>
          <p>mais d'en faire la synthèse.</p>
          <Appear>
            <ul>
              <li>Choisir les technologies</li>
              <li>Les faire cohabiter dans un vrai projet</li>
            </ul>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5}>🥅 BUT</Heading>
          <p>Avoir un projet référence à partager.</p>
          <p>Aller plus loin pour React que :</p>
          <ul>
            <li><a href="https://github.com/topheman/webpack-babel-starter" title="topheman/webpack-babel-starter on github" target="_blank">topheman/webpack-babel-starter</a></li>
            <li><a href="https://github.com/topheman/d3-react-experiments" title="topheman/d3-react-experiments on github" target="_blank">topheman/d3-react-experiments</a></li>
            <li><a href="https://github.com/topheman/react-es6-redux" title="topheman/react-es6-redux on github" target="_blank">topheman/react-es6-redux</a></li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>💡 Trouver une idée de projet</Heading>
          <p>Qui sera un prétexte pour :</p>
          <ul>
            <li>Exposer des bonnes pratiques</li>
            <li>Intégrer diverses technologies</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>⚒ Fonctionnalités <small>(d'une app dans la vie réelle)</small></Heading>
          <ul>
            <li>Appel à API externe</li>
            <li>Utilisation de librairies tierces</li>
            <li>Gestion du mobile</li>
            <li>...</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>⛓ Contraintes</Heading>
          <ul>
            <Appear><li>Expérience developpeur</li></Appear>
            <Appear><li>Travail en équipe
              <ul>
                <li>Linter / Prettier</li>
                <li>Mock d'APIs</li>
              </ul>
            </li></Appear>
            <Appear><li>Qualité de code
              <ul>
                <li>Tests unitaires</li>
                <li>Tests end to end</li>
              </ul>
            </li></Appear>
            <Appear><li>Automatisation
              <ul>
                <li>CIs (travis / cypress)</li>
                <li>Deploiement</li>
              </ul>
            </li></Appear>
            <Appear><li>Documentation</li></Appear>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}><a href="https://github.com/topheman/npm-registry-browser" target="_blank" title="topheman/npm-registry-browser on github">📺 DEMO</a></Heading>
        </Slide>
        <Slide>
          <Heading size={5}>Pourquoi utiliser</Heading>
          <ul>
            <li>create-react-app</li>
            <li>!redux</li>
            <li>material-ui</li>
            {/* <li>recompose</li> */}
            {/* <li>cypress</li> */}
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>Pourquoi utiliser create-react-app</Heading>
          <ul>
            <li>Eviter de se focaliser sur webpack
              <ul>
                <li>Laisser cette partie à d'autres projets</li>
              </ul>
            </li>
            <li>Toolkit très populaire dans la communauté React</li>
            <li>Ne pas <code>npm run eject</code>
              <ul>
                <li>Rend le projet plus ré-utilisable</li>
              </ul>
            </li>
          </ul>
          {/* <p>Next : Passage à Webpack 4 / utilisation des <a href="https://medium.com/webpack/webpack-4-released-today-6cdb994702d4" target="_blank">webpacks-preset</a> #0CJS</p> */}
        </Slide>
        <Slide>
          <Heading size={5}>Limitations de create-react-app</Heading>
          <p>Ne pas pouvoir :</p>
          <ul>
            <li>Ajouter des plugins babel</li>
            <li>Aliaser des modules via <code>resolve.alias</code></li>
            <li>Utilser <code>HtmlWebpackPlugin</code> ou <code>webpack.DefinePlugin</code> - workaround: <a href="https://github.com/topheman/npm-registry-browser/blob/master/bin/expand-metadatas.js" target="_blank">bin/expand-metadatas.js</a></li>
            <li>Sass sourcemaps - (<a href="https://github.com/facebook/create-react-app/pull/4195" title="create-react-app: Opt-in support for SASS and CSS-modules using SASS files added, using both .scss and .sass extensions." target="_blank">prévu pour la create-react-app@2</a>)</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>Pourquoi ne pas utiliser Redux ?</Heading>
          <BlockQuote style={{fontSize: "50%"}}>
People often choose Redux before they need it. “What if our app doesn’t scale without it?” Later, developers frown at the indirection Redux introduced to their code. “Why do I have to touch three files to get a simple feature working?” Why indeed!
<br/><br />
People blame Redux, React, functional programming, immutability, and many other things for their woes, and I understand them. It is natural to compare Redux to an approach that doesn’t require “boilerplate” code to update the state, and to conclude that Redux is just complicated. In a way it is, and by design so.
          </BlockQuote>
          <p>Source: <a href="https://github.com/topheman/npm-registry-browser#why-not-use-redux-" target="_blank">You Might Not Need Redux</a> / Dan Abramov.</p>
          <Appear><Heading size={6}>Ne pas utiliser Redux par défaut</Heading></Appear>
        </Slide>
        {/* <Slide>
          <Heading size={5}>Pourquoi utiliser material-ui ?</Heading>
          <p>Toute app est basée sur un UI-Kit (fait-maison ou basé sur une librairie comme material-ui)</p>
          <p>Une introduction au css-in-js</p>
        </Slide> */}
        {/* <Slide>
          <Heading size={5}>Pourquoi utiliser recompose ?</Heading>
          <ul>
            <li>Une librairie très utilisée sur les projets React</li>
            <li>Déjà utilisée par material-ui, donc déjà en grande partie dans le bundle</li>
          </ul>
        </Slide> */}
        {/* <Slide>
          <Heading size={5}>Pourquoi utiliser cypress ?</Heading>
          <ul>
            <li>Déjà utilisé Selenium + SauceLabs, l'occasion de tester une nouvelle solution</li>
          </ul>
        </Slide> */}
        <Slide>
          <Heading size={5}>🔍 A approfondir</Heading>
          <ul>
            <li>Gestion des mocks - <a href="https://mock-npm-registry-browser.surge.sh/" target="_blank">exemple en ligne</a> / <a href="https://github.com/topheman/npm-registry-browser#mock-mode" target="_blank">Doc</a></li>
            <li>Server proxy API de developpement (create-react-app)</li>
            <li>material-ui / css-in-js</li>
            <li>react-markdow</li>
            <li>react-testing-library</li>
            <li>Cypress</li>
            <li><a href="http://dev.topheman.com/project-to-help-getting-into-making-react-apps/" target="_blank">Article de blog</a></li>
          </ul>
        </Slide>
        {/* <Slide>
          <Heading size={5}>✉️ A venir</Heading>
          <ul>
            <li>Court terme (pour la v1.0.0)
              <ul>
                <li>fixes de bug</li>
              </ul>
            </li>
            <li>Moyen terme
              <ul>
                <li>Ajout de nouvelles fonctionnalités</li>
              </ul>
            </li>
          </ul>
        </Slide> */}
        <Slide>
          <Heading size={4} style={{marginTop: -100}}>MERCI</Heading>
          <Image src={images.reactLogo} width="200px" className="fade-in"/>
          <p style={{position: "absolute", top: "240px", left: 0, width: "100%"}}><a href="https://twitter.com/topheman" target="_blank">@topheman</a></p>
        </Slide>
        <Slide>
          <Heading size={4} style={{marginTop: -100}}>Questions ? 👆</Heading>
          <div>
            <Image src={images.reactLogo} width="200px" className="fade-in"/>
          </div>
          <p style={{position: "absolute", top: "240px", left: 0, width: "100%"}}><a href="https://twitter.com/topheman" target="_blank">@topheman</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>📝 Ressources</Heading>
          <ul>
            <li><a href="https://github.com/topheman/npm-registry-browser" target="_blank">topheman/npm-registry-browser</a></li>
            <li>Blog posts :
              <ul>
                <li><a href="http://dev.topheman.com/project-to-help-getting-into-making-react-apps/" target="_blank">A project to help getting into making React apps</a></li>
              </ul>
            </li>
            <li>
              <span role="img" aria-label="TV">
                📺
              </span>{" "}
              <a
                href="http://dev.topheman.com/pourquoi-realiser-topheman-npm-registry-browser-video-talk/"
                title="Video du talk"
                target="_blank"
              >
                Vidéo du talk
              </a>
            </li>
          </ul>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="300px"/>
        </Slide>
        <Slide>
          <Heading size={3}><a href="https://github.com/topheman/npm-registry-browser" target="_blank" title="npm-registry-browser on github">npm-registry-browser</a></Heading>
          {/* <br/>
          <Heading size={5}><a href="https://github.com/topheman/npm-registry-browser" target="_blank" title="npm-registry-browser on github">Pourquoi j'ai fait ce projet</a></Heading> */}
          <div>
            <Image src={images.reactLogo} width="100px"/>
          </div>
          <p>
            <a href="http://labs.topheman.com" target="_blank">Christophe Rosset</a> / <a href="https://twitter.com/topheman" target="_blank">@topheman</a>
          </p>
          <p><a href="https://www.meetup.com/fr-FR/ReactJS-Paris/" title="Meetup ReactJS Paris" target="_blank">ReactJS Paris - 18 avril 2018</a></p>
          <p>
            <span role="img" aria-label="TV">
              📺
            </span>{" "}
            <a
              href="http://dev.topheman.com/pourquoi-realiser-topheman-npm-registry-browser-video-talk/"
              title="Video du talk"
              target="_blank"
            >
              Voir la vidéo du talk
            </a>
          </p>
        </Slide>
      </Deck>
    );
  }
}
