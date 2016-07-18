import React, { Component } from 'react';
  // we're pulling off the Component property from the React object.

// functional component, some info goes in, some JSX comes out.
    // const SearchBar = () => {
    //   return <input />;
    // };

// class component. create a new instance of it, by using the new keyword
// render is a method on the object that we create when we instantiate a new instance of the SearchBar class.
class SearchBar extends Component{ // extends off of React.component
  render() { 
    return <input onChange={this.onInputChange} />; // tapping into a regular browser event.
  }
  
  onInputChange(event) { // the event object describes the event which occured
    console.log(event);
  }
  
}

export default SearchBar;