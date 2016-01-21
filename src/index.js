import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js';



const API_KEY = 'AIzaSyDkDthHccGpB7GyxxwYZTsCvg0yFEg2lW0';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('tigers');
  }



  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) =>  {
      // this.setState({videos}); //same as ({videos: videos});
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


//take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
