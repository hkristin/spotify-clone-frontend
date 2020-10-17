import React from 'react'
import { connect } from 'react-redux'

const ArtistCard = ({artist}) => {
  return (
    <div className="artist-card">
      Name: <span id="artist-name">{artist.name}</span> <br />
      Genre: <span id="artist-genre">{artist.genre}</span> <br />
      Hometown: <span id="artist-hometown">{artist.hometown}</span> <br />
      Grammy Winner?: <span id="artist-grammy-winner">{artist.grammy_winner}</span> <br />
      <a id="artist-link" rel="noopener noreferrer" target="_blank" href={artist.link}>Give it a Try!</a> <br />
      <br /><br />
    </div>
  )
}

export default connect(null)(ArtistCard)