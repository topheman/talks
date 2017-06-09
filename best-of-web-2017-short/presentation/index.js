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
  CodePane,
  Appear
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// if you're serving the presentation AND demo in local, you can override the links to the demo like:
// GH_PAGES_URL=http://localhost:5001 npm start
const GH_PAGES_URL = process.env.GH_PAGES_URL ? process.env.GH_PAGES_URL : 'https://topheman.github.io/d3-react-experiments';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactLogo: require("../assets/react-logo.png"),
  d3Logo: require("../assets/d3-logo.png"),
  bestOfWeb: require("../assets/bestofweb-logo.png"),
  youShallNotPass: require("../assets/you-shall-not-mutate-my-dom.gif")
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
  '<BarChart data={[3,7,8,9,2]} width={600} />': {
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
          <p><a href="http://bestofweb.paris/" title="Best Of Web">Best Of Web - 9 juin 2017</a></p>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="300px"/>
          <Image src={images.d3Logo} width="300px"/>
        </Slide>
        {/*<Slide>
          <Heading size={3}>🔎 Back to basics</Heading>
        </Slide>
        <Slide>
          <Image src={images.reactLogo} width="80px"/>
          <Heading size={5}> React basics 👀</Heading>
          <p style={{color: 'red'}}>No DOM access</p>
          <p style={{color: 'red'}}>No DOM mutation</p>
          <p><code>render()</code>: describe your UI</p>
          <p>React Only Updates What's Necessary</p>
        </Slide>*/}
        {/*<Slide>
          <Heading size={5}>React basics</Heading>
          <p style={{color: 'red'}}>Use React events</p>
          <p>No need for <code>.addEventListener</code></p>
          <p><code>{`onClick={handler}`}</code><br/>≠<br/><code>onclick="javascript:alert('toto')"</code></p>
        </Slide>*/}
        {/*<Slide>
          <Image src={images.d3Logo} width="80px"/>
          <Heading size={5}>D3 basics 🔍</Heading>
          <p>query DOM</p>
          <p>mutate DOM</p>
          <p>manage EVENTS</p>
        </Slide>*/}
        {/*<Slide>
          <Heading size={5}>D3 basics 🔍</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code.examples/minimal-d3.example")}/>
          <p><a href="https://jsbin.com/xiyibocuzo/edit?js,output" target="_blank">Demo</a></p>
        </Slide>*/}
        {/*<CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/minimal-d3.example")}
          ranges={[
            {loc: [0, 0], title: <span>Minimal d3 example</span>},
            {loc: [2, 3]},
            {loc: [7, 8]},
            {loc: [3, 6]},
            {loc: [8, 16]},
            {loc: [16, 22]},
            {loc: [23, 24]}
          ]}>
        </CodeSlide>*/}
        {/*<Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="250px"/>
          <div style={{display: 'inline-block'}}>
            <span style={{position: 'relative', top: '-120px', fontSize: '250%', padding: '20px'}}>🚫 DOM 👈</span>
          </div>
          <Image src={images.d3Logo} width="250px"/>
        </Slide>*/}
        {/* <Slide>
          <Heading size={5}>Not made for each other at first glance</Heading>
          <p><a href={require('../assets/reconciliation-error.png')} target="_blank">React reconciliation (previous React versions)</a> ⚠️</p>
          <p><small><a href="https://www.reddit.com/r/reactjs/comments/2riuwa/mutating_reacts_dom/" target="_blank">Mutating React's DOM</a></small></p>
        </Slide> */}
        {/*<Slide>
          <Image src={images.youShallNotPass} width="800px" />
          <p style={{fontSize: '80%'}}>but now you can 😇 ...</p>
        </Slide>*/}
        <Slide>
          <Heading size={5}>Different approaches</Heading>
          <p>React Components</p>
          <p>that generate charts</p>
        </Slide>
        <Slide>
          <Heading size={5}>1) Embed Pure d3<br/>inside a React Component</Heading>
          <ul>
            <li>React manages component state</li>
            <li>d3 manages DOM rendering inside the component</li>
          </ul>
          <p>
            <a href={`${GH_PAGES_URL}/devtools/#/d3/transition-multi-line-chart`} target="_blank">DEMO (React embedding d3)</a>
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
            {loc: [4, 9], title: <span>d3 imports</span>},
            {loc: [6, 7], title: <pre style={{fontSize: '40%', textAlign: 'left'}}><code>{`select(node)
  .attr('width', 400)
  .style('color', 'red');
`}</code></pre>},
            {loc: [205, 214]},
            {loc: [207, 213]},
            {loc: [208, 212]},
            {loc: [209, 211]},
            {loc: [209, 210], title: <span style={{fontSize: '50%'}}>When the ref attribute is used on an HTML element,<br/>the ref callback receives the underlying DOM element as its argument.</span>},
            {loc: [210, 211]},
            {loc: [209, 211]},
            {loc: [114, 123]},
            {loc: [56, 59]},
            {loc: [98, 102], title: <span>run d3 on this.rootNode</span>},
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
          <Heading size={5}>1) Embed Pure d3<br/>inside a React Component ✅</Heading>
          <CodePane
            style={{fontSize: '18px'}}
            lang="js"
            source={require("raw-loader!../assets/code.examples/react-d3-wrapper.example")}/>
          <p><a href="http://dev.topheman.com/d3-react-chart-components/" target="_blank">SEE BLOG POST</a></p>
        </Slide>
        <Slide>
          <Heading size={5}>1) Embed Pure d3<br/>inside a React Component ✅ ✅</Heading>
          <p>Avoid messing d3's internal root node</p>
          <p><a href={require('../assets/reconciliation-error.png')} target="_blank">React reconciliation (previous React versions)</a> ⚠️</p>
          <p><small><a href="https://www.reddit.com/r/reactjs/comments/2riuwa/mutating_reacts_dom/" target="_blank">Mutating React's DOM</a></small></p>
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
          <p>Still use <strong>pure d3 code</strong></p>
          <p>with <strong>fake DOM</strong> that renders to React</p>
          <p><a href={`${GH_PAGES_URL}/devtools/#/d3/react-faux-dom/static-multi-line-chart`} target="_blank">DEMO (Using react-faux-dom)</a></p>
        </Slide>
        {/*<Slide>
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
          <p>Don't use <strong>real DOM</strong></p>
          <p>Provide d3 with a <strong>DOM like structure</strong> that renders to React</p>
          <p style={{fontSize: '90%'}}><code>.appendChild()</code> <code>.setAttribute()</code> <code>.addEventListener()</code> ...</p>
          <p><code>.toReact()</code></p>
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
          <p><a href={`${GH_PAGES_URL}/devtools/#/d3/react-faux-dom/static-multi-line-chart`} target="_blank">DEMO (Using react-faux-dom)</a></p>
        </Slide>*/}
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/react-faux-dom.StaticMultiLineChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>React component<br/>embedding d3 code<br/>rendering with React thanks to<br/>ReactFauxDOM</span>},
            {loc: [0, 1]},
            {loc: [12, 13]},
            {loc: [4, 8]},
            {loc: [8, 9]},
            {loc: [40, 41]},
            {loc: [47, 48]},
            {loc: [70, 71]},
            {loc: [70, 76]},
            {loc: [77, 80]},
            {loc: [81, 89]},
            {loc: [90, 98]},
            {loc: [99, 100]}
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={5}>React faux DOM ✅</Heading>
          <ul>
            <li>Keep the same d3 code</li>
            <Appear><li>Use React to render svg (universal ready)</li></Appear>
            <Appear><li>Animations ... 🙁 (tweaks exist though)</li></Appear>
            <Appear><li>Necessary step for the next approach</li></Appear>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>3) Pure JSX</Heading>
          <ul>
            <li>Computation managed by d3</li>
            <li>Render managed by React</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>3) Pure JSX</Heading>
          <div>
            <BarChart {...barChartConfig[this.state.barChartRef]}/>
          </div>
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
          <p>Push further, composing / reusing React component charts ?... 😉</p>
          <p>Using libraries like <a href="https://formidable.com/open-source/victory/">Victory</a>, <a href="http://recharts.org/">ReCharts</a> or making your own ...</p>
          <p>👉</p>
        </Slide>
        <Slide>
          <Heading size={6}>Compose / Reuse React Component Charts</Heading>
          <CodePane
            style={{fontSize: '1.3rem', marginTop: '30px'}}
            lang="js"
            source={`import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';`}/>
          <CodePane
            style={{fontSize: '1.3rem', marginTop: '30px'}}
            lang="js"
            source={`import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';`}/>
          <p><a href={`${GH_PAGES_URL}/devtools/#/victory/transition-multi-line-chart`} target="_blank">DEMO (Victory)</a></p>
          <p><a href={`${GH_PAGES_URL}/devtools/#/recharts/transition-multi-line-chart`} target="_blank">DEMO (Recharts)</a></p>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code.examples/victory.TransitionMultiLineChart.example")}
          ranges={[
            {loc: [0, 0], title: <span>Compose / Reuse<br/>React Component Charts</span>},
            {loc: [0, 1]},
            {loc: [4, 5], title: <span>Chart components primitives</span>},
            {loc: [8, 10], title: "Functional component"},
            {loc: [9, 10]},
            {loc: [10, 12]},
            {loc: [15, 18]},
            {loc: [28, 29]},
            {loc: [33, 39]},
            {loc: [39, 50]},
            {loc: [50, 54]},
            {loc: [50, 68]},
            {loc: [52, 53]},
            {loc: [54, 66]},
            {loc: [56, 57]}
          ]}>
        </CodeSlide>
        <Slide>
          <Heading size={6}>Compose / Reuse React Component Charts ✅</Heading>
          <ul>
            <li>Easy to read / reuse (JSX declarative syntax)</li>
            <li>Multiple components available in existing libraries</li>
          </ul>
          <p style={{fontSize: '90%'}}><i>Victory</i> - Can be used in both Native and Web</p>
          <p><a href={`${GH_PAGES_URL}/devtools/#/recharts/transition-multi-line-chart`} target="_blank">Recharts</a> <small>(bonus)</small></p>
        </Slide>
        <Slide>
          <Heading size={4} style={{marginTop: -100}}>MERCI</Heading>
          <Image src={images.bestOfWeb} width="200px" className="fade-in"/>
        </Slide>
        <Slide>
          <Heading size={4}>Questions ? 👆</Heading>
          <div>
            <Image src={images.reactLogo} width="120px" style={{margin: 40}}/>
            <Image src={images.d3Logo} width="120px" style={{margin: 40}}/>
          </div>
        </Slide>
        <Slide>
          <p>(BONUS) ⏲</p>
          <Heading size={5}>What about complex charts ?</Heading>
          <p><a href={`${GH_PAGES_URL}/devtools/#/victory/count-npm-downloads`} target="_blank">DEMO</a></p>
        </Slide>
        <Slide>
          <p>(BONUS) ⏲</p>
          <Heading size={5}>What about complex charts ?</Heading>
          <ul style={{fontSize: '80%'}}>
            <li>OK for advanced charts</li>
            <li>Not so good for complex ones (better use embedded vanilla d3) 🤔</li>
          </ul>
          <p><a href="http://dev.topheman.com/d3-react-components-with-victory-reusability-composability/" target="_blank">SEE BLOG POST</a></p>
        </Slide>
        <Slide>
          <p>(BONUS) ⏲</p>
          <Heading size={5}>Approaches addressed</Heading>
          <ul>
            <li>Embed vanilla d3 code inside React <component></component>
              <ul>
                <li><a href={`${GH_PAGES_URL}/devtools/#/d3/transition-multi-line-chart`} target="_blank">d3 embedded</a></li>
              </ul>
            </li>
            <li>Provide a DOM like structure to d3 that renders to React
              <ul>
                <li><a href={`${GH_PAGES_URL}/devtools/#/d3/react-faux-dom/static-multi-line-chart`} target="_blank">react-faux-dom</a></li>
              </ul>
            </li>
            <li>Pure JSX components
              <ul>
                <li><a href={`${GH_PAGES_URL}/devtools/#/victory/transition-multi-line-chart`} target="_blank">Victory</a></li>
                <li><a href={`${GH_PAGES_URL}/devtools/#/recharts/transition-multi-line-chart`} target="_blank">Recharts</a> <small>(bonus)</small></li>
              </ul>
            </li>
          </ul>
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
        <Slide transition={['zoom', 'fade']}>
          <Image src={images.reactLogo} width="300px"/>
          <Image src={images.d3Logo} width="300px"/>
        </Slide>
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
          <p><a href="http://bestofweb.paris/" title="Best Of Web">Best Of Web - 9 juin 2017</a></p>
        </Slide>
      </Deck>
    );
  }
}
