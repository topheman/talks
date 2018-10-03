~ $ git clone https://github.com/facebook/react.git && cd react
~/react $ vi ./packages/shared/ReactFeatureFlags.js
~/react $ yarn
~/react $ yarn build dom-client,core,react-cache,schedule --type=NODE
~/react $ ls ./build/node_modules/
react     react-cache     react-dom     scheduler
~/react $ cp -a ./build/node_modules/* ../react-fiber-experiments/react-modules/