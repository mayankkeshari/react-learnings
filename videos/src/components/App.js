import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/YouTube";

export default class App extends React.Component {
  KEY = "AIzaSyBVhW9YhIvIHKRLSMrBGr9_IeVHh57mdSU";
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: this.KEY,
        type: "video",
      },
    });
    this.setState({ 
      videos: res.data.items,
      selectedVideo: res.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    // Default load child videos
    this.onTermSubmit('child');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
