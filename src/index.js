
import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import AK from './components/api_key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = AK;


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { videos: [] };
    
    YTSearch({key: AK, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
        {/*<VideoDetail />*/}
        {/*<VideoListItem />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
