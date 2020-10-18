import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Artists from './Artists'
import Songs from './Songs'
import Playlists from './Playlists'
import PlaylistNew from './PlaylistNew'

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <h1>Welcome To My Spotify Clone App!</h1>
        <Router>
        <Switch>
            <Route exact path="/artists" component={ Artists } />
            <Route exact path="/songs" component={ Songs } />
            <Route exact path="/playlists" component={ Playlists } />
            <Route exact path="/playlists/new" component={ PlaylistNew } />
          </Switch>
        </Router>

        <a href="/artists" >View Artists</a> <br />
        <a href="/songs" >View Songs</a> <br />
        <a href="/playlists" >View Playlists</a> <br />
        <a href="/playlists/new" >New Playlist</a>
      </div>
    )
  }
}

export default Home