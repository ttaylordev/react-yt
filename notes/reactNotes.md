every class we create must have a render method.

Two types of components
Class based

functional


# even handler is a function that rusn whenever an event occurs


#State 
 * a plain javascript object that is used to record and react to user events
 * each class based component has it's own state object
 * whenever a components state is changed, the component and all its' children rerender.
 * before we use it in a component we need to initialize the state object inside the class's constructor method.
 
 - whenever we have a key and a value that is the same exact string, we can condense it to be curly braces and the name of the variable {variable}
 
- passing data from parent component to child component  is done by passing a property on the child. (passing props)
- anytime the parent, re-renders the children do as well.

- when we use a functional component, the props from the parent arrives as an argument.


- in a functional component props are passed in as an argument 
 -  in a class component props are availiable in any method that we define with this.props.
 
 - when you refactor from one to the other, you'll need to change from just calling props to calling this.props.
 
<label>map</label>
 ```js
 
 var array = [1,2,3];
 array.map
 
function map() {[native code]};
array.map(function(number) { return number * 2});

// [2, 4, 6] 

array.map(function(number) { return '<div> + number + </div>'})

  ```
 
 - React has a bunch of logic that aids in rendering lists. 
 - always add a key when listing items with .map 
  - the returned object in an HTTP request shoudl usually have a key that we can use.
  

 
 
 


