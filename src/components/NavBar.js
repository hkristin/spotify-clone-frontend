import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav id="nav-bar-container">
          <ul id="nav-links">
            <li>< NavLink className="nav-link" to="/">Home</ NavLink ></li>
            <li>< NavLink className="nav-link" to="/artists">All Artists</ NavLink ></li>
            <li>< NavLink className="nav-link" to="/songs">All Songs</ NavLink ></li>
            <li>< NavLink className="nav-link" to="/playlists">All Playlists</ NavLink ></li>
            <li>< NavLink className="nav-link" to="/playlists/new">Add Playlist</ NavLink ></li>
            
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar