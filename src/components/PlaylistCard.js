import React from 'react'
import { connect } from 'react-redux'
import { deletePlaylist } from '../actions/index'
import DeleteButton from './DeleteButton'

const PlaylistCard = ({playlist, deletePlaylist}) => {
  return (
    <div id={playlist.id} className='playlist-card'>
      Creator: <span id="playlist-creator">{playlist.creator}</span> <br />
      <a id="playlist-link" rel="noopener noreferrer" target="_blank" href={playlist.link}>Give it a Try!</a> <br />
      < DeleteButton name="Delete Playlist" playlist_id={playlist.id} deletePlaylist={deletePlaylist}/>
      <br /><br />
    </div>
  )
}

export default connect(null, { deletePlaylist })(PlaylistCard)