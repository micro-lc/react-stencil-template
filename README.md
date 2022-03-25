# miro-lc React + Stencil template

[![Build Status][github-actions-svg]][github-actions]
[![Coverage Status][coverall-svg]][coverall-io]
[![Mia-Platform](https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147)](https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc)

This project contains a monorepo initialized with React + Vite and Stencil + Vite.

The idea behind this is to allow everyone to create UI components using [React](https://reactjs.org/), and then export them as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) using [Stencil](https://stenciljs.com/).

The provided Web Component example is [micro-lc-element-composer](https://github.com/micro-lc/micro-lc-element-composer) ready: it supports the injection of the `eventBus` property.

## Build React components

To build React components you can run: `yarn react build`, or simply `yarn build` inside the `packages/react` folder.
The build file will produce a `dist` folder inside `packages/react`.

## Build Stencil components

To build Stencil components you can run: `yarn stencil build`, or simply `yarn build` inside the `packages/stencil` folder.
The build file will produce a `dist` folder inside `packages/stencil`.

## Preview Stencil components

To preview Stencil components you can run: `yarn stencil start`. This will spin up a dev server on `localhost:3000`.

To insert and configure multiple Web Components you can edit the `index.html` file inside the `packages/stencil` folder.

[github-actions]: https://github.com/micro-lc/micro-lc-react-stencil-template/actions
[github-actions-svg]: https://github.com/micro-lc/micro-lc-react-stencil-template/workflows/Template%20CI/badge.svg
[coverall-svg]: https://coveralls.io/repos/github/micro-lc/micro-lc-react-stencil-template/badge.svg?branch=master
[coverall-io]: https://coveralls.io/github/micro-lc/micro-lc-react-stencil-template?branch=master
