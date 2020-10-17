export const fetchArtists = () => {
    return dispatch => {
      return fetch(`http://localhost:3001/artists`)
        .then(res => res.json())
        .then(artists => {
          dispatch({type: "GET_ARTISTS", payload: artists})
        })
    }
}

export const fetchSongs = () => {
    return dispatch => {
      return fetch(`http://localhost:3001/songs`)
        .then(res => res.json())
        .then(songs => {
        dispatch({type: "GET_SONGS", payload: songs})
        })
    }
}

export const fetchPlaylists = () => {
    return dispatch => {
      return fetch(`http://localhost:3001/playlists`)
        .then(res => res.json())
        .then(playlists => {
        dispatch({type: "GET_PLAYLISTS", payload: playlists})
        })
    }
}

export const addPlaylist = playlist => {
    return dispatch => {
      return fetch(`http://localhost:3001/playlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({playlist: playlist})
      })
        .then(res => res.json())
        .then(playlist => {
  
          dispatch({type: "ADD_PLAYLIST", payload: playlist})
        })
    }
}

export const deletePlaylist = playlistId => {
    return dispatch => {
      return fetch(`http://localhost:3001/playlists/${playlistId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(playlist => {
          dispatch({type: "REMOVE_PLAYLIST", payload: playlistId})
        })
    }
  }