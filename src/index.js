
import React from 'react';  
import ReactDOM from 'react-dom'; 
import AK from './components/api_key';
import SearchBar from './components/search_bar';

const API_KEY = AK;

// 1). Create a new component. This component should produce some HTML
const App = () => { // factory that creates instances.
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// 2). Take this component's generated HTML and place it on the DOM.
ReactDOM.render(<App />, document.querySelector('.container')); 
