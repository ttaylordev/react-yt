// import React object into this file.
// kind of like a require statement in NodeJS
// it knows to look into the node_modules for react.
import React from 'react';  // used to create and manage components
import ReactDOM from 'react-dom'; // used to render the components directly to the DOM.

// 1). Create a new component. This component should produce some HTML

const App = () => { // factory that creates instances.
  return <div>Hello World!</div>; // this is a class not an instance.
}
// the value of this. is slightly different for fat arrows functions.

// the above code compiles into:

      //
      // var _temploralUndefined = {};
      // var App = _temploralUndefined;
      // 
      // App = function App() {
      //   return React.createElement {
      //     "div",
      //     null,
      //     "Hello World!"
      //   };
      // };
      // 
      
// it can be nested just like normal html as we3ll, the Elements are appended as a property of the parent6 object.


// 2). Take this component's generated HTML and place it on the DOM.
// we need to instantiate components before we try and render them to the DOM.
// App is a class of the component
// <app /> is an instance of that App class
// reactDOM takes two arguments, the component to render, and the component to append it to. 
ReactDOM.render(<App />, document.querySelector('.container')); 



// ################################# \\
// ## ----- aditional notes ----- ## \\
// ################################# \\

// < div/> creates a self closing tag.