export default (state = [], action) => {
    switch(action.type) {
      case "GET_SONGS":
        return [...action.payload]
      case "ADD_SONG":
        return [...state, action.payload]
      case "REMOVE_SONG":
        let newSongs = state.filter((song, id) => {
          return id !== action.payload
        })
        return [...newSongs]
      default:
        return state
    }
  }