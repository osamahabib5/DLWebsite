import React from 'react'

function Playlist() {
    let {title, length, short_desc, long_desc, thumbnail} = this.props.details;
    return (
        <div className="playlistItem" onClick={this.props.changeVideo}>
            <img src={thumbnail} />
            {title}
            {short_desc} ({length})
        </div>
    )
}

export default Playlist
