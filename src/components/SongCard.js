import React from 'react'
import { connect } from 'react-redux'

const SongCard = ({song}) => {
  return (
    <div className="song-card">
      Title: <span id="song-title">{song.title}</span> <br />
      Release Date: <span id="song-release-date">{song.release_date}</span> <br />
      Album: <span id="song-album">{song.album}</span> <br />
      <a id="song-link" rel="noopener noreferrer" target="_blank" href={song.link}>Give it a Try!</a> <br />
      <br /><br />
    </div>
  )
}

export default connect(null)(SongCard)