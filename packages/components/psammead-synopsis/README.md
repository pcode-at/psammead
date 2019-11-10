# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-synopsis - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-synopsis%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-synopsis%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-synopsis)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-synopsis) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-synopsis)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-synopsis&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/synopsis--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-synopsis.svg)](https://www.npmjs.com/package/@bbc/psammead-synopsis) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-synopsis` package exports a single Synopsis component. It uses a `p` HTML element.

It uses `@bbc/psammead-styles` for colours and font family and `@bbc/gel-foundations` for spacing and for GEL Typography implemented in Styled Components.

## Installation

`npm install @bbc/psammead-synopsis`

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| Script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|
| service | string | yes | N/A | `'news'` |

## Usage

```jsx
import Synopsis from '@bbc/psammead-synopsis';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => (
  <Synopsis script={latin} service="news">
    Text here
  </Synopsis>
);
```

### When to use this component

This component can be used at any point on a page.

<!-- ### When not to use this component -->

### Accessibility notes

Since this is just a `<p>` tag with associated styles, when you use this component, it has the same semantic meaning as a regular paragraph element.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).