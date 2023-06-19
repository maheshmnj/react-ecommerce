# react-Todoist

### Runnig the project

```bash
npm install
npm start
```

#### Learnings from the project

We have used TSX files instead of JSX files. TSX files are typescript files that contain JSX code. TSX files are compiled into JS files using the typescript compiler.
The benefit of using TSX files is that we can use typescript in our react project and get all the benefits of typescript. Mainly we won't have to worry about runtime errors.

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

### Components in React

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

This is how we create a component in React:

```JSX
//Footer.js
export default function Footer() {
    return (
        <>
             <h3>Footer</h3>
             <p>All rights reserved</p>
        </>
    );
}
```

We can also use a es6 arrow function to create a component, But notice that we cannot use export default with arrow functions. This is because arrow functions are anonymous functions and we need to assign them to a variable before exporting them.

```JSX

const Container = (props)=>{
    return <div className="ui-container">
    {props.children}
    </div>;
}

export default Container;
```

This is invoked as follows:

```
<Container><p>This is container content</p> </Container>
```

_Things to remember about components_

- Define one component per file
- Components must start with a capital letter
- Components can be defined as functions or classes
- Components can be nested within other components
- Components can accept arguments called props
- Components return a single React element, which is a JavaScript object
- Components can be composed together to create more complex UIs

### Props

Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are immutable, which means that a component cannot change its props. Props are passed to components via HTML attributes.

```JSX

//App.js
import React from "react";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <h1>My App</h1>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

//Footer.js

export default function Footer(props) {
  return (
    <>
      <h3>Footer</h3>
      <p>All rights reserved &copy; {props.year}</p>
    </>
  );
}
```

props.children is a special prop that is passed to components automatically. It represents the content between the opening and closing tags when invoking a component.

```JSX
//App.js
import React from "react";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <h1>My App</h1>
      <Footer year={new Date().getFullYear()}>
        <p>Contact us at
          <a href="mailto:example@email.com"> email here</a>
        </p>
      </Footer>
    </>
  );
}

//Footer.js

export default function Footer(props) {
  return (
    <>
      <h3>Footer</h3>
      <p>All rights reserved &copy; {props.year}</p>
      {props.children}
    </>
  );
}
```

the above code will render the following HTML:

```HTML
<h3>Footer</h3>
<p>All rights reserved &copy; 2020</p>
<p>Contact us at
  <a href="mailto:
    email here"> email here</a>
</p>
```

So basically any content between the opening and closing tags of a component is passed to the component as props.children.

```JSX
<GreetUser user="Sam" id="2" />
```

get transformed into

```JSX
React.createElement(GreetUser, { user: "Sam", id: "2" });
```

### Importing and Exporting

In JavaScript, we can import and export code from one file to another. This is called module system. There are two types of exports: named exports and default exports.

Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

Default exports are useful to export only a single value. A default export can be a function, a class, an object or anything else. During the import, it is mandatory to use the same name of the corresponding object.
A file can have only one default export.

e.g a footer component can be exported as follows:

```JSX
//Footer.js
export default function Footer() {
    ...
    ...
}
```

and imported as follows:

```JSX
//App.js
import Footer from "./Footer";
```

Also note that we can import multiple components from a single file as follows:

```JSX
//App.js
import Footer, { Header, Content } from "./Layout";
```

### Using props and variables in components

````JSX

1. Using string concatenation

```JSX
<img src={'/images/' + props.imageName} />
````

2. Using template literals

```JSX
<img src={`/images/${props.imageName}`} />
```

3. Using string interpolation

```JSX
<img src={'/images/${props.imageName}'} />
```

4. boolean attributes

```JSX
<input type="text" disabled={true} />
```

5. Variables

```JSX
const disabled = true;
<input type="text" disabled={disabled} />
```
