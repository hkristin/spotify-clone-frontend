import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav id="nav-bar-container">
          <ul id="nav-links">
            <li className="nav-link">< NavLink to="/">Home</ NavLink ></li>
            <li className="nav-link">< NavLink to="/artists">All Artists</ NavLink ></li>
            <li className="nav-link">< NavLink to="/songs">All Songs</ NavLink ></li>
            <li className="nav-link">< NavLink to="/playlists">All Playlists</ NavLink ></li>
            <li className="nav-link">< NavLink to="/playlists/new">Add Playlist</ NavLink ></li>
            
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar