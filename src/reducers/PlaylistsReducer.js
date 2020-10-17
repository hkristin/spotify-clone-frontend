export default (state = [], action) => {
    switch(action.type) {
      case "GET_PLAYLISTS":
        return [...action.payload]
      case "ADD_PLAYLIST":
        return [...state, action.payload]
      case "REMOVE_PLAYLIST":
        let newPlaylists = state.filter((playlist, id) => {
          return id !== action.payload
        })
        return [...newPlaylists]
      default:
        return state
    }
  }