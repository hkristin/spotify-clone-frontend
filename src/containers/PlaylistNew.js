import React, { Component } from 'react'
import { addPlaylist } from '../actions/index'
import { connect } from 'react-redux'

class PlaylistNew extends Component {
    state = {
        creator: ''
    }


handleChange = e => {
    this.setState({
    [e.target.name]: e.target.value
})
}


handleSubmit = e => {
    e.preventDefault()
    this.props.addPlaylist(this.state)
    document.getElementById('new-playlist-form').reset()
    this.props.history.push('/playlists')
}

render() {
    return (
        <form id="new-playlist-form" onSubmit={this.handleSubmit}>
            <h3>Add New Playlist</h3>
            <label>Creator</label> <br />
            <input type="text" onChange={this.handleChange} value={this.state.creator} name="creator"/>
            <br /> <br />
            <input type="submit" value="Create Playlist" />
        </form>
        )
    }
}

export default connect(null, { addPlaylist })(PlaylistNew)