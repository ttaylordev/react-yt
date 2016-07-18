
import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import AK from './components/api_key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = AK;

YTSearch({key: AK, term: 'surfboards'}, function(data){
  console.log(data);
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/*<VideoDetail />*/}
        {/*<Video_List />*/}
        {/*<VideoListItem />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
