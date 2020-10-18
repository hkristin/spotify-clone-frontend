import React from 'react'
import { connect } from 'react-redux'

const ArtistCard = ({artist}) => {
  let grammyElem
  if(artist.grammy_winner) {
    grammyElem = <strong>Grammy Award Winner!</strong>
  }
  return (
    <div className="artist-card">
      Name: <span id="artist-name">{artist.name}</span> <br />
      Genre: <span id="artist-genre">{artist.genre}</span> <br />
      Hometown: <span id="artist-hometown">{artist.hometown}</span> <br />
      <span id="artist-hometown">{grammyElem}</span><br />
      <a id="artist-link" rel="noopener noreferrer" target="_blank" href={artist.link}>Give it a Try!</a> <br />
      <br /><br />
    </div>
  )
}

export default connect(null)(ArtistCard)
