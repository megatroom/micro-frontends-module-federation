# Micro Frontend Case Study

**Important**: this repository does not use any monorepo tools (like Lerna) to reinforce that each application is completely independent.

First, start the host:

```bash
cd host
yarn
yarn start
```

The host will render with error on Micro Frontend, because it is not started yet. So let's start the first one:

```bash
cd mf-webpack-01
yarn
yarn start
```

Refresh the host and now you will see the micro frontend rendered.
