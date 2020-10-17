import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <h1>Welcome To My SPotify Clone App!</h1>
        <a className="home-page-link" href="/artists">View Artists</a> <br />
        <a className="home-page-link" href="/songs">View Songs</a> <br />
        <a className="home-page-link" href="/playlists">View Playlists</a> <br />
        <a className="home-page-link" href="/playlists/new">Add New Playlist</a> <br />
      </div>
    )
  }
}

export default Home