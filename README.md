# Micro Frontend Case Study

Case study for [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) with [Module Federation](https://webpack.js.org/concepts/module-federation/).

**Important**: this repository does not use any monorepo tools (like Lerna) to reinforce that each application is completely independent.

## Running

## Only Webpack clean projects

Start the host:

```bash
cd host
yarn
yarn start
```

Open the browser and navigate to [http://localhost:3000/](http://localhost:3000/).

The host will render with error on Micro Frontend, because it is not started yet. So let's start the first one:

```bash
cd mf-webpack-01
yarn
yarn start
```

Refresh the host and now you will see the micro frontend rendered.

## Next.js hosting

Start the host:

```bash
cd host-nextjs
yarn
yarn dev
```

Open the browser and navigate to [http://localhost:3000/](http://localhost:3000/).

The host will render with error on Micro Frontend, because it is not started yet. So let's start the first one:

```bash
cd mf-webpack-01
yarn
yarn start
```

Refresh the host and now you will see the micro frontend rendered.
