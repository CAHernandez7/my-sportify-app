import React from 'react';
import './TrackList.css'; 
import SearchResults from '../SearchResults/SearchResults.js';
import Track from '../Track/Track.js';

class TrackList extends React.Component {
    render(){
        return (
        <div className="TrackList">
            {/* This takes the state made in App.js and uses it to render info. the Track component gives us the Info, Track.css gives us the style, and Tracklist is the location it is rendered */}
            {
                this.props.tracks.map(track => {
                    return <Track track={track} key={track.id}
                                  onAdd={this.props.onAdd}
                                  onRemove={this.props.onRemove}
                                  isRemoval={this.props.isRemoval}/>
                })
            }
        </div>
        )
    }
};

export default TrackList