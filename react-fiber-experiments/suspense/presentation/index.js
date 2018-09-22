// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#900000"
}, {
  primary: "Source Sans Pro",
  secondary: "sans-serif"
});

// override theme
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
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={3}><a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">React Suspense</a></Heading>
          <div>
            <Image src={`.${require("../assets/spinner.gif")}`} style={{ marginTop: 30 }}/>
          </div>
          <br/>
          <Heading size={5}><a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">react-fiber-experiments</a></Heading>
          <p>
            by <a href="http://labs.topheman.com">Christophe Rosset</a> / <a href="https://twitter.com/topheman">@topheman</a>
          </p>
        </Slide>
        <Slide>
          <p>Credits to <a href="https://twitter.com/ryanflorence">Ryan Florence</a> for <a href="https://www.youtube.com/watch?v=X-kA8B2QzjY">his talk at React Rally</a> which inspired me.</p>
        </Slide>
        <Slide>
          <Heading size={4}><a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">topheman/react-fiber-experiments</a></Heading>
          <br />
          <Heading size={6}>Goal</Heading>
          <p>Provide a tool to better understand the benefits of the new features of React fiber</p>
        </Slide>
        <Slide>
          <Heading size={3}>React Fiber</Heading>
          <p>A complete rewrite of React core</p>
          <p>Shipped in React v16 (Fragments, Portals, ErrorBoundaries ...)</p>
          <p>Necessary for Async rendering (Suspense, Time Slicing)</p>
        </Slide>
        <Slide>
          <Heading size={4}>How to test Suspense right now ?</Heading>
          <ul>
            <li>⚠️ Still under active development</li>
            <li>APIs are unstable and might change</li>
          </ul>
          <p>You will need to <a href="https://github.com/topheman/react-fiber-experiments/tree/master/react-modules#readme" target="_blank">make your own custom build of React</a>.</p>
        </Slide>
        <Slide>
          <p><Heading size={4}>Routing</Heading></p>
          <p>Transition and Spinners</p>
          <p><a href="https://react-fiber-experiments.surge.sh/suspense/regular-rendering">DEMO</a></p>
          <div>
            <Image src={`.${require("../assets/spinner.gif")}`} style={{ marginTop: 30 }}/>
          </div>
        </Slide>
        <CodeSlide
          className="slide-font-size-4"
          lang="javascript"
          code={require("!raw-loader!../snippets/WithoutSuspense.js")}
          ranges={[
            { loc: [12, 13], title: "Without Suspense" },
            { loc: [22, 28], title: "Init loading states" },
            { loc: [28, 33], title: "Launch network requests" },
            { loc: [33, 40], title: "Ensure page switch re-render" },
            { loc: [40, 43], title: "Ensure no setState on unmounted component" },
            { loc: [44, 67] },
            { loc: [45, 49], title: "Init state as loading" },
            { loc: [49, 66], title: "Launch request" },
            { loc: [50, 58] },
            { loc: [52, 56], title: "Add data to state on success" },
            { loc: [58, 66] },
            { loc: [60, 64], title: "Add error to state on error" },
            { loc: [67, 90] },
            { loc: [90, 93] },
            { loc: [92, 93] },
            { loc: [95, 121] },
            { loc: [115, 121] },
            { loc: [114, 115] },
            { loc: [95, 114] },
            { loc: [97, 104] },
            { loc: [106, 112] },
            { loc: [105, 106] },
            { loc: [104, 105] }
          ]}
        />
        <Slide>
          <ul>
            <li>Loading states all over the place</li>
            <li>Spinners flashing on fast connexions</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>With Suspense</Heading>
          <p><a href="https://react-fiber-experiments.surge.sh/suspense/async-rendering">DEMO</a></p>
        </Slide>
        <Slide>
          <CodePane
            style={{fontSize: "2rem"}}
            lang="javascript"
            source={require("!raw-loader!../snippets/SuspenseInit.js")}
          />
        </Slide>
        <CodeSlide
          className="slide-font-size-4"
          lang="javascript"
          code={require("!raw-loader!../snippets/WithSuspense.js")}
          ranges={[
            { loc: [69, 70], title: <span>With Suspense</span> },
            { loc: [2, 3] },
            { loc: [5, 6] },
            { loc: [25, 28] },
            { loc: [26, 27] },
            { loc: [29, 32] },
            { loc: [30, 31] },
            { loc: [33, 53] },
            { loc: [35, 36], title: "Stop render / throw promise" },
            { loc: [38, 42] },
            { loc: [38, 39] },
            { loc: [39, 42] },
            { loc: [40, 41] },
            { loc: [57, 65] },
            { loc: [58, 59], title: "Stop render / throw promise" },
            { loc: [60, 61] },
            { loc: [69, 76] },
            { loc: [71, 74] },
            { loc: [72, 73] },
            { loc: [33, 53] },
            { loc: [34, 36] },
            { loc: [34, 35], title: "Avoid waterfall" }
          ]}
        />
        <Slide>
          <ul>
            <li>Data dependencies move down where data is rendered</li>
            <li>Parent component is in control of the Placeholder behavior</li>
            <li>No more dealing with loading states</li>
            <li>Cache for free</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={4}>Playing with Placeholders</Heading>
          <p><a href="https://react-fiber-experiments.surge.sh/suspense/placeholder">DEMO</a></p>
        </Slide>
        <CodeSlide
          className="slide-font-size-4"
          lang="javascript"
          code={require("!raw-loader!../snippets/PlayWithPlaceholder.js")}
          ranges={[
            { loc: [3, 4] },
            { loc: [14, 23] },
            { loc: [15, 22] },
            { loc: [17, 21] },
            { loc: [24, 28] },
            { loc: [25, 26] },
            { loc: [26, 27] },
            { loc: [32, 37] },
            { loc: [33, 36] },
            { loc: [34, 35] }
          ]}
        />
        <Slide>
          <Heading size={5}>@reach/router</Heading>
          <p>Suspense is not only a router concern</p>
          <p>Though suspense aware routers can really leverage its power</p>
          <ul>
            <li>history.replace while suspending</li>
            <li>Scroll management / Focus can rely on cache</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={5}>Conclusion</Heading>
          <ul>
            <li>Still in development</li>
            <li>Very interesting concepts / future of data fetching in React</li>
            <li>If library maintainer, definitly look into it</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={4}>Next</Heading>
          <br />
          <Heading size={6}><a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">topheman/react-fiber-experiments</a></Heading>
          <p>Test more features ...</p>
          <p>Try it 😉 👇</p>
          <p><a href="https://react-fiber-experiments.surge.sh/" title="try the demo">https://react-fiber-experiments.surge.sh</a></p>
        </Slide>
      </Deck>
    );
  }
}
