import React, { Component } from 'react';
  // we're pulling off the Component property from the React object.

// functional component, some info goes in, some JSX comes out.
    // const SearchBar = () => {
    //   return <input />;
    // };

// class component. create a new instance of it, by using the new keyword
// render is a method on the object that we create when we instantiate a new instance of the SearchBar class.
class SearchBar extends Component{ // extends off of React.component
  
  // initializing state in the class based component
  // all JS classes have a special method called constructor, it's the first and only function called automatically whenver a new instance of a class is created. 
  // it is reserved for setup inside the class, like initializing variables, initializing state, etc.
  // each instance of a component has its' own state.
  
  constructor(props) {
    // Component has it's own constructor method, we can call that method on a parent class by calling 'super'.
    super(props);
    // whenever we use state we initialize it by creating a new object and assigning it to this.state. The object we pass will also contain properties that we want to record on the state. e.g. 'term' (shorthand for searchTerm)
    this.state = { term: ''}; // the value of the input.
  }
  
  render() { 
    return <input onChange={event => console.log(event.target.value)} />; // tapping into a regular browser event.
  }
  
}

export default SearchBar;





######## second version ######## 

import React, { Component } from 'react';
  // we're pulling off the Component property from the React object.

// functional component, some info goes in, some JSX comes out.
    // const SearchBar = () => {
    //   return <input />;
    // };

// class component. create a new instance of it, by using the new keyword
// render is a method on the object that we create when we instantiate a new instance of the SearchBar class.
class SearchBar extends Component{ // extends off of React.component
  
  // initializing state in the class based component
  // all JS classes have a special method called constructor, it's the first and only function called automatically whenver a new instance of a class is created. 
  // it is reserved for setup inside the class, like initializing variables, initializing state, etc.
  // each instance of a component has its' own state.
  
  constructor(props) {
    // Component has it's own constructor method, we can call that method on a parent class by calling 'super'.
    super(props);
    // whenever we use state we initialize it by creating a new object and assigning it to this.state. The object we pass will also contain properties that we want to record on the state. e.g. 'term' (shorthand for searchTerm)
    this.state = { term: ''}; // the value of the input.
  }
  
  render() { 
    return (
    <div>
      <input onChange={event => this.setState({ term: event.target.value })} /> 
      Value of the input : {this.state.term}
    </div>
    );
  }       // tapping into a regular browser event. calling a built-in method to change the state of the object based on what is input by the user.
} // whenever we use a javascript variable inside jsx, we've got to use handlebars

export default SearchBar;



dont' ever manuyally change the state without using setState() method.









############## third section ###################


### Controlled Copmonents ### 
- when index.js calls the SearchBar class, a new instance is created.

 - the input changing tells the input that it needs to change
 - at times, the state should tell the input what the current value should be.
 
 - when we tell the input that the value is provided by this.state.term we're tellig it that it is a controlled input.
 - controlled form element.
 
 - the value will only update when the state changes. 
 
 - this.setStat() causes the component to re-render, which will cause the state to update. 
 
 - there's a layer of additional abstraction here.
  - when a user types in the input field, they are not causing they value to change, rather, they are triggering an on change event, which then causes the value to change.
  
  - we don't want an imparetive flow of data
  - we want a declarative form of data

#####  

- a fnctional component may contain a class based component

- when the state updates, it causes the entire copmonent to re-render. 

### Downwards DataFlow, 
- only the most parent component shoudl be responsible for fetching data. 




### ask yourself ### 

- do I expect this component6 to need to maintain any kind of state?



