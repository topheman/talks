# topheman/talks

Slides of my talks. Hosted on : https://topheman.github.io/talks/

Deployed with [github actions](.github/workflows/deploy.yml):

- The source code of the slides that need a build step with bundling are in folders prefixed with `_`
- Those `_` folders are excluded from the deployment
- You need to build the slides into a statically deployable folder **on your local machine** before deploying.

This ensures that the source code will be deployable forever without bothering about updating dependencies once the slides of a talk are published.

Example available with `_talkA` and `_talkB` folders.
