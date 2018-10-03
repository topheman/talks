// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  CodePane,
  // Cite,
  Deck,
  Heading,
  // Image,
  // ListItem,
  // List,
  // Quote,
  Slide,
  // Text,
  Appear
  // CodePane,
  // Code
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
            <img src="./assets/spinner.gif" style={{ marginTop: 30 }}/>
          </div>
          <br/>
          <Heading size={5}><a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">react-fiber-experiments</a></Heading>
          <p>
            by <a href="http://labs.topheman.com">Christophe Rosset</a> / <a href="https://twitter.com/topheman">@topheman</a>
          </p>
          <p style={{fontSize: "0.7em"}}><a href="https://www.meetup.com/fr-FR/ReactJS-Paris/events/255052088/">meetup ReactJS</a> - oct 2018</p>
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
          <p>
            Necessary for Async rendering
            <br />
            (now <a href="https://github.com/facebook/react/commit/0dc0ddc1ef5f90fe48b58f1a1ba753757961fc74" target="_blank">Concurrent React</a>)
          </p>
        </Slide>
        <Slide>
          <Heading size={4}>Suspense</Heading>
          <p>Disclaimer</p>
          <ul>
            <li>⚠️ Still under active development</li>
            <li>APIs are unstable and might change</li>
          </ul>
        </Slide>
        <Slide>
          <Heading size={4}>How to test Suspense right now ?</Heading>
          <p>You will need to <a href="https://github.com/topheman/react-fiber-experiments/tree/master/react-modules#readme" target="_blank">make your own custom build of React</a>.</p>
        </Slide>
        <CodeSlide
          className="slide-font-size-3"
          lang="javascript"
          code={require("!raw-loader!../snippets/MakeCustomReactBuild.sh")}
          ranges={[
            { loc: [0, 0], title: "Make your own React build", note: <a href="https://github.com/topheman/react-fiber-experiments/tree/master/react-modules#readme">Link</a> },
            { loc: [0, 1], title: "Clone facebook/react repo" },
            { loc: [1, 2], title: "Set enableSuspense flag", note: <a href="https://github.com/facebook/react/blob/d79238f1eeb6634ba7a3df23c3b2709b56cbb8b2/packages/shared/ReactFeatureFlags.js#L19" target="_blank">Link</a> },
            { loc: [2, 3], title: "Install repo dependencies" },
            { loc: [3, 4], title: "Generate packages" },
            { loc: [4, 6] },
            { loc: [6, 7], title: "Copy packages to your project" }
          ]}
        />
        <Slide>
          <p>Transition and Spinners</p>
          <p><a href="https://react-fiber-experiments.surge.sh/suspense/regular-rendering">DEMO</a></p>
          <div>
            <img src="./assets/spinner.gif" style={{ marginTop: 30 }}/>
          </div>
          <p style={{ fontSize: "70%" }}>Demos accessible <a href="https://react-fiber-experiments.surge.sh">online</a></p>
          <p style={{ fontSize: "70%" }}>Source code available on <a href="https://github.com/topheman/react-fiber-experiments">github</a></p>
        </Slide>
        <CodeSlide
          className="slide-font-size-4"
          lang="javascript"
          code={require("!raw-loader!../snippets/WithoutSuspense.js")}
          ranges={[
            { loc: [12, 13], title: "Without Suspense" },
            { loc: [22, 28], title: "Init loading states" },
            { loc: [28, 33], title: "Launch network requests" },
            // { loc: [33, 40], title: "Ensure page switch re-render" },  
            { loc: [44, 67] },
            { loc: [45, 49], title: "Init state as loading" },
            { loc: [49, 66], title: "Launch request" },
            { loc: [50, 58] },
            { loc: [52, 56], title: "Add data to state on success" },
            { loc: [58, 66] },
            { loc: [60, 64], title: "Add error to state on error" },
            { loc: [67, 90] },
            { loc: [90, 93], title: "render" },
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
          {/* <Appear>
            <table
              cellPadding={20}
              style={{
                textAlign: "center",
                borderCollapse: "collapse",
                margin: "0 auto"
              }}
            >
              <thead>
                <tr>
                  <td>Strategy / Network</td>
                  <td>Fast</td>
                  <td>Slow</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wait</td>
                  <td>🙂</td>
                  <td>☹️</td>
                </tr>
                <tr>
                  <td>Spin</td>
                  <td>☹️</td>
                  <td>🙂</td>
                </tr>
              </tbody>
            </table>
          </Appear> */}
        </Slide>
        <Slide>
          <video
            src="https://i.giphy.com/id16Oibm3oRMs.mp4"
            autoPlay
            loop
            muted
            playsinline
            onError="this.onerror=()=>{};this.src='https://i.giphy.com/id16Oibm3oRMs.mp4';">
            <img src="https://i.giphy.com/id16Oibm3oRMs.gif " alt="" />
          </video>
        </Slide>
        <Slide>
          <Heading size={5}>With Suspense</Heading>
          <p><a href="https://react-fiber-experiments.surge.sh/suspense/async-rendering">DEMO</a></p>
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "2rem" }}
            lang="javascript"
            source={require("!raw-loader!../snippets/RegularInit.js")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "2rem" }}
            lang="javascript"
            source={require("!raw-loader!../snippets/SuspenseInit.js")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "2rem" }}
            lang="diff"
            source={require("!raw-loader!../snippets/SuspenseInit.diff")}
          />
        </Slide>
        <CodeSlide
          className="slide-font-size-4"
          lang="javascript"
          code={require("!raw-loader!../snippets/WithSuspense.js")}
          ranges={[
            { loc: [69, 70], title: <span>With Suspense</span> },
            { loc: [2, 3], title: "Previously \"simple-cache-provider\"" },
            { loc: [5, 6] },
            { loc: [25, 28] },
            { loc: [26, 27] },
            { loc: [29, 32] },
            { loc: [30, 31] },
            { loc: [33, 53] },
            { loc: [35, 36], title: "1rst check the cache" },
            { loc: [35, 36], title: "Throw promise / Stop render" },
            { loc: [26, 27], title: "Make Network call / Resolve promise" },
            { loc: [35, 36], title: "Resume render" },
            { loc: [38, 42] },
            { loc: [38, 39] },
            { loc: [39, 42] },
            { loc: [40, 41] },
            { loc: [57, 65] },
            { loc: [58, 59], title: "1rst check the cache" },
            { loc: [58, 59], title: "Throw promise / Stop render" },
            { loc: [30, 31], title: "Make Network call / Resolve promise" },
            { loc: [58, 59], title: "Resume render" },
            { loc: [60, 61] },
            { loc: [69, 76], title: "Spinning logic" },
            { loc: [71, 74] },
            { loc: [72, 73] },
            { loc: [33, 53], title: "Pitfall" },
            { loc: [34, 36] },
            { loc: [34, 35], title: "No stopping render" },
            { loc: [30, 31], title: "Launch request ..." },
            { loc: [57, 65] },
            { loc: [58, 59], title: "Request already pending ..." }
          ]}
        />
        <Slide>
          <ul>
            <li>Data dependencies move down where data is rendered</li>
            <li>Parent component is in control of the Placeholder behavior</li>
            <li>No more dealing with loading states
              <br />No more ternaries for your spinning logic
            </li>
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
            { loc: [15, 22], title: "Return a Promise that will resolve in {duration}ms" },
            { loc: [17, 21] },
            { loc: [24, 28] },
            { loc: [25, 26], title: "1rst check the cache" },
            { loc: [25, 26], title: "Throw promise / Stop render" },
            { loc: [18, 19], title: "Wait / Resolve promise" },
            { loc: [25, 26], title: "Resume render" },
            { loc: [26, 27] },
            { loc: [32, 37] },
            { loc: [33, 36] },
            { loc: [34, 35] }
          ]}
        />
        <Slide>
          <img
            style={{ width: "60%", minWidth: 550 }}
            src="https://media.giphy.com/media/KfctfVkNN1Kg"
            srcSet="https://media.giphy.com/media/KfctfVkNN1Kg/200w.webp 200w,https://media.giphy.com/media/KfctfVkNN1Kg/giphy.webp 480w,"
            alt=""
          />
        </Slide>
        <Slide>
          <Heading size={5}>Conclusion</Heading>
          <ul>
            <li>Still in development</li>
            <li>Very interesting concepts / future of data fetching in React</li>
            <li>If library maintainer, definitly look into it</li>
            <Appear>
              <li>Want to do routing with Suspense ? Try <a href="https://github.com/reach/router" target="_blank">@reach/router</a></li>
            </Appear>
            <Appear><li><code>React.lazy()</code></li></Appear>
            <Appear><li>List of <a href="https://github.com/topheman/react-fiber-experiments#resources" target="_blank">resources</a> on project repo</li></Appear>
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
        <Slide>
          <Heading size={3}>Questions ?</Heading>
          <Heading size={6} style={{ fontSize: "80%", marginTop: 40 }}>
            <a href="https://github.com/topheman/react-fiber-experiments" target="_blank" title="react-fiber-experiments on github">topheman/react-fiber-experiments</a>
          </Heading>
          <p style={{ fontSize: "60%" }}>
            by <a href="http://labs.topheman.com">Christophe Rosset</a> / <a href="https://twitter.com/topheman">@topheman</a>
          </p>
        </Slide>
      </Deck>
    );
  }
}
