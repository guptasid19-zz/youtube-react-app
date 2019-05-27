import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import searchYoutube from 'youtube-api-v3-search';
import VideoList from './components/video_list';
import VIdeoDetail from './components/video_detail';
import {YOUTUBE_API_KEY} from '../config';
 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [], selectedVideo: null };
        this.videoSearch('Chernobyl');
    }

    videoSearch(term){
        searchYoutube(YOUTUBE_API_KEY, { q: term, part:'snippet',
        type:'video' } , (error, result) => {
            if(!error)
                this.setState({ videos: result.items, selectedVideo: result.items[0] });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange = {(term) => this.videoSearch(term)}/>
                <VIdeoDetail video = {this.state.selectedVideo} />
                <VideoList videos = {this.state.videos} 
                    onVideoSelected = {(video) => this.setState({selectedVideo: video})}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

