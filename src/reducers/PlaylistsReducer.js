export default (state = [], action) => {
    switch(action.type) {
      case "GET_PLAYLISTS":
        return [...action.payload]
      case "ADD_PLAYLIST":
        return [...state, action.payload]
      case "DELETE_PLAYLIST":
        let newPlaylists = state.filter((playlist) => {
          return playlist.id !== action.payload
        })
        return [...newPlaylists]
      default:
        return state
    }
  }