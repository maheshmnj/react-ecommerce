# react-ecommerce

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/stackblitz-starters-w3yxax)

<!-- source: https://react-tutorial.app/ -->
### Runnig the project

```bash
npm install
npm start
```
### JSX

React uses a special syntax called JSX to solve that issue.
This JSX syntax may look similar to HTML, but it is NOT HTML.

```JSX
import React from "react";

const element = <p>My first JSX</p>
const root = document.getElementById('react-root')
createRoot(root).render(element)
```
JSX is not understood by browsers. So, we need a tool to transform it into valid JavaScript. This tool is called Babel.

The above JSX code gets transformed into the following JavaScript code:

```JSX
import React from "react";

const element = React.createElement(
  "p",
  null,
  "My first JSX"
);
```

- JSX is a special syntax for React that makes it easier to represent your UI
- JSX looks similar to HTML but it is not HTML
- JSX code you write gets transformed into - React.createElement
-JSX is not part of your browser. You need a tool to transform it into valid JavaScript.
