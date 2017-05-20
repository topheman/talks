// Import React
import React from "react";

import BarChart from './BarChart';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactLogo: require("../assets/react-logo.png"),
  d3Logo: require("../assets/d3-logo.png")
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

const barChartConfig = {
  '<BarChart data={[2,8,5,3]}/>': {
    data: [2,8,5,3]
  },
  '<BarChart data={[3,7,8,9,2]} barColor="orange" textColor="grey"/>': {
    data: [3,7,8,9,2],
    barColor: 'orange',
    textColor: 'grey'
  },
  '<BarChart data={[2,8,5,3]} width={600} />': {
    data: [3,7,8,9,2],
    width: 600
  }
};

export default class Presentation extends React.Component {
  state = {
    barChartRef: `<BarChart data={[2,8,5,3]}/>`
  }
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={3}><a href="https://github.com/topheman/d3-react-experiments" target="_blank" title="d3-react-experiments on github">Mixing React &amp; d3</a></Heading>
          <br/>
          <Heading size={5}><a href="https://github.com/topheman/d3-react-experiments" target="_blank" title="d3-react-experiments on github">d3-react-experiments</a></Heading>
          <div>
            <Image src={images.reactLogo} width="100px"/>
            <Image src={images.d3Logo} width="100px"/>
          </div>
          <p>
            by <a href="http://labs.topheman.com">Christophe Rosset</a> / <a href="https://twitter.com/topheman">@topheman</a>
          </p>
          <p><a href="http://bestofweb.paris/" title="Best Of Web">Best Of Web 2017</a></p>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="300px"/>
          <Image src={images.d3Logo} width="300px"/>
        </Slide>
        <Slide>
          <Heading size={3}> Back to basics</Heading>
        </Slide>
        <Slide>
          <Heading size={5}>React basics</Heading>
          <p>Any modification to <code>state</code> / <code>props</code> / <code>context</code><br/>will trigger a re-render to <a href="https://facebook.github.io/react/docs/optimizing-performance.html" target="_blank">VirtualDOM</a></p>
          <p>Changes will be flushed to the DOM</p>
          <p style={{color: 'red'}}>No DOM direct access</p>
          <p><strike><code>el.appendChild(childNode)</code></strike></p>
          <p><strike><code>el.innerHTML = 'foo'</code></strike></p>
        </Slide>
        <Slide>
          <Heading size={5}>React basics</Heading>
          <p>Event delegation</p>
          <p style={{color: 'red'}}>No DOM direct access</p>
          <p><code>{`onClick={handler}`}</code><br/>≠<br/><code>onclick="javascript:alert('toto')"</code></p>
          <p style={{fontSize: '80%'}}><strike><code>el.addEventListener('click', handler, false)</code></strike></p>
        </Slide>
        <Slide>
          <Heading size={5}>D3 basics</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code.examples/minimal-d3.example")}/>
          <p><a href="https://jsbin.com/xiyibocuzo/edit?js,output" target="_blank">Demo</a></p>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/minimal-d3.example")}
          ranges={[
            {loc: [0, 0], title: <span>Minimal d3 example</span>},
            {loc: [2, 3]},
            {loc: [7, 8]},
            {loc: [3, 6]},
            {loc: [8, 16]},
            {loc: [16, 22]}
          ]}>
        </CodeSlide>
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="250px"/>
          <div style={{display: 'inline-block'}}>
            <span style={{position: 'relative', top: '-120px', fontSize: '250%', padding: '20px'}}>👉 DOM 👈</span>
          </div>
          <Image src={images.d3Logo} width="250px"/>
        </Slide>
        <Slide>
          <Heading size={5}>Not made for each other at first glance</Heading>
          <List>
            <ListItem>Immutability vs mutability</ListItem>
            <ListItem>VirtualDOM vs Direct DOM access</ListItem>
          </List>
          <p><a href={require('../assets/reconciliation-error.png')} target="_blank">React reconciliation</a></p>
          <p><small><a href="https://www.reddit.com/r/reactjs/comments/2riuwa/mutating_reacts_dom/" target="_blank">Mutating React's DOM</a></small></p>
        </Slide>
        <Slide>
          <Heading size={5}>Mixing d3 &amp; React</Heading>
          <p>Presenting 3 different approaches to mix those two libraries.</p>
          <p><a href="https://topheman.github.io/d3-react-experiments/devtools/#/d3/transition-multi-line-chart" target="_blank">DEMO</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>1) Vanilla d3 based</Heading>
          <ul>
            <li>Pure vanilla d3 code embedded in React component</li>
            <li>Direct access to embedded DOM node</li>
          </ul>
          <p>
            <a href="https://topheman.github.io/d3-react-experiments/devtools/#/d3/transition-multi-line-chart" target="_blank">DEMO (React embedding d3)</a>
          </p>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/d3.TransitionMultiLineChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>React component<br/>embedding d3 code</span>},
            {loc: [0, 1]},
            {loc: [12, 13]},
            {loc: [14, 24]},
            {loc: [4, 9]},
            {loc: [6, 7]},
            {loc: [205, 211]},
            {loc: [208, 209]},
            {loc: [114, 123]},
            {loc: [56, 59]},
            {loc: [98, 102]},
            {loc: [195, 204]},
            {loc: [199, 200]},
            {loc: [202, 203]},
            {loc: [124, 128]},
            {loc: [129, 136]},
            {loc: [137, 144]},
            {loc: [145, 153]},
            {loc: [154, 158]},
            {loc: [160, 161]},
            {loc: [161, 163]},
            {loc: [164, 165]},
            {loc: [166, 171]},
            {loc: [172, 183]},
            {loc: [179, 180]}
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={5}>Vanilla d3 based ✅</Heading>
          <ul>
            <li>Don't mess with d3's root DOM node by rendering the exact same markup</li>
            <li>Use React's <a href={require('../assets/react-lifecycle-hooks.png')} target="_blank">lifecycle hooks</a>
              <ul>
                <li>To ensure props update taken in account</li>
                <li>For optimization (split data update vs size update)</li>
              </ul>
            </li>
          </ul>
          <p><a href="http://dev.topheman.com/d3-react-chart-components/" target="_blank">SEE BLOG POST</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>2) React faux DOM</Heading>
          <CodePane
            style={{fontSize: '18px'}}
            lang="js"
            source={`render() {
  const rootNode = ReactFauxDOM.createElement('svg');
  // ... some d3-like code
  return rootNode.toReact();
}
`}/>
          <p>Trick d3 with a <strong>DOM like structure</strong> that renders to React</p>
          <p>
            Think of it like <code>jsdom</code> with a <code>.toReact()</code> method<br/>that renders into React elements
          </p>
          <p><a href="https://topheman.github.io/d3-react-experiments/devtools/#/d3/react-faux-dom/static-multi-line-chart" target="_blank">DEMO (Using react-faux-dom)</a></p>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/react-faux-dom.StaticMultiLineChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>React component<br/>embedding d3 code<br/>rendering with React thanks to<br/>ReactFauxDOM</span>},
            {loc: [0, 1]},
            {loc: [12, 13]},
            {loc: [4, 8]},
            {loc: [8, 9]},
            {loc: [101, 104]},
            {loc: [102, 103]},
            {loc: [40, 41]},
            {loc: [46, 47]},
            {loc: [57, 65]},
            {loc: [66, 75]},
            {loc: [69, 70]},
            {loc: [80, 88]},
            {loc: [89, 97]},
            {loc: [98, 99]},
            {loc: [102, 103]}
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={5}>React faux DOM ✅</Heading>
          <ul>
            <li>Keep the same d3 code</li>
            <li>Generated svg (universal ready)</li>
            <li>Animations ... 🙁</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>3) Pure JSX</Heading>
          <ul>
            <li>Computation managed by d3</li>
            <li>Render managed by React</li>
          </ul>
          <ul style={{marginTop: 0}}>
            {Object.keys(barChartConfig).map(configKey => (
              <li
                key={configKey}
                style={{
                  cursor: 'pointer',
                  fontWeight: configKey === this.state.barChartRef ? 'bold' : 'normal',
                  listStyleType: 'none'
                }}
                onClick={() => this.setState({barChartRef: configKey})}
              >
                <code>{configKey}</code>
              </li>
            ))}
          </ul>
          <div>
            <BarChart {...barChartConfig[this.state.barChartRef]}/>
          </div>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/BarChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>Pure JSX Chart component<br/>D3 for computation<br/>React for rendering</span>},
            {loc: [0, 1]},
            {loc: [2, 4]},
            {loc: [5, 12]},
            {loc: [6, 7]},
            {loc: [12, 15]},
            {loc: [16, 28]},
            {loc: [17, 27]},
            {loc: [19, 25]},
            {loc: [20, 24]},
            {loc: [21, 22]},
            {loc: [22, 23]},
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={5}>Pure JSX ✅</Heading>
          <ul>
            <li>Make your own *</li>
            <li>Use an existing library (like <a href="https://formidable.com/open-source/victory/" target="_blank">Victory</a>)</li>
          </ul>
          <p style={{fontSize: '75%'}}>* You might end up creating the same kind of components as existing libraries ...</p>
        </Slide>
        <Slide>
          <Heading size={6}>Compose / Reuse Pure JSX Component Charts</Heading>
          <CodePane
            style={{maxHeight: '500px'}}
            lang="js"
            source={require("raw-loader!../assets/code.examples/victory.TransitionMultiLineChart.example")}/>
          <p><a href="https://topheman.github.io/d3-react-experiments/devtools/#/victory/transition-multi-line-chart" target="_blank">DEMO</a></p>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/victory.TransitionMultiLineChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>Compose / Reuse<br/>Pure JSX Component Charts</span>},
            {loc: [0, 1]},
            {loc: [4, 5], title: <span>Chart components primitives</span>},
            {loc: [8, 10], title: "Functional component"},
            {loc: [9, 10]},
            {loc: [10, 18]},
            {loc: [33, 39]},
            {loc: [39, 50]},
            {loc: [50, 68]},
            {loc: [54, 66]}
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={6}>Compose / Reuse Pure JSX Component Charts ✅</Heading>
          <ul>
            <li>Easier to read (declarative syntax)</li>
            <li>No lifecycle hooks needed</li>
            <li>Can be stateless (functional component)</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>What about complex charts ?</Heading>
          <p><a href="https://topheman.github.io/d3-react-experiments/devtools/#/victory/count-npm-downloads" target="_blank">DEMO</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>What about complex charts ?</Heading>
          <ul style={{fontSize: '80%'}}>
            <li>OK for advanced charts</li>
            <li>Not so good for complex ones (better use embedded vanilla d3) 🤔</li>
          </ul>
          <p><a href="http://dev.topheman.com/d3-react-components-with-victory-reusability-composability/" target="_blank">SEE BLOG POST</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>Approaches addressed</Heading>
          <ul>
            <li>Embed vanilla d3 code inside React <component></component>
              <ul>
                <li><a href="https://topheman.github.io/d3-react-experiments/devtools/#/d3/transition-multi-line-chart" target="_blank">d3 embedded</a></li>
              </ul>
            </li>
            <li>Provide a DOM like structure to d3 that renders to React
              <ul>
                <li><a href="https://topheman.github.io/d3-react-experiments/devtools/#/d3/react-faux-dom/static-multi-line-chart" target="_blank">react-faux-dom</a></li>
              </ul>
            </li>
            <li>Pure JSX components
              <ul>
                <li><a href="https://topheman.github.io/d3-react-experiments/devtools/#/victory/transition-multi-line-chart" target="_blank">Victory</a></li>
                <li><a href="https://topheman.github.io/d3-react-experiments/devtools/#/recharts/transition-multi-line-chart" target="_blank">Recharts</a> <small>(bonus)</small></li>
              </ul>
            </li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={4}>Questions ?</Heading>
        </Slide>
        <Slide>
          <Heading size={5}>Resources</Heading>
          <ul>
            <li><a href="https://github.com/topheman/d3-react-experiments">topheman/d3-react-experiments</a></li>
            <li>Blog posts (explanations):
              <ul>
                <li><a href="http://dev.topheman.com/d3-react-chart-components/">Plain d3 code and React working together</a></li>
                <li><a href="http://dev.topheman.com/d3-react-components-with-victory-reusability-composability/">D3 React Components with Victory – Reusability / Composability</a></li>
              </ul>
            </li>
            <li>Libraries:
              <ul>
                <li><a href="https://github.com/Olical/react-faux-dom">react-faux-dom</a></li>
                <li><a href="https://formidable.com/open-source/victory/">Victory</a></li>
              </ul>
            </li>
          </ul>
        </Slide>
        <Slide>
          // TODO final slide - repeat first one
        </Slide>
      </Deck>
    );
  }
}
