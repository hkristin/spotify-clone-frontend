import React from 'react'

const DeleteButton = props => {
  return (
    <button id="delete-button" onClick={() => props.deletePlaylist(props.playlist_id)}>{props.name}</button>
  )
}

export default DeleteButton