export default (state = [], action) => {
    switch(action.type) {
      case "GET_ARTISTS":
        return [...action.payload]
      case "ADD_ARTIST":
        return [...state, action.payload]
      case "REMOVE_ARTIST":
        let newArtists = state.filter((artist, id) => {
          return id !== action.payload
        })
        return [...newArtists]
      default:
        return state
    }
}