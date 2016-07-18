import _ from 'lodash';
import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import AK from './components/api_key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item';

const API_KEY = AK;


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
    YTSearch({key: AK, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 480);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
         onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
         videos={this.state.videos} />
        {/*<VideoListItem />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 



// onVideoSelect // passes a function that manipulates another component
//  it adds a method into video_list.js