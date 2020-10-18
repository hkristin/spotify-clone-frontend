import { combineReducers } from 'redux'
import artists from './ArtistsReducer'
import songs from './SongsReducer'
import playlists from './PlaylistsReducer'


const rootReducer = combineReducers({
    artists,
    songs,
    playlists
}) 

export default rootReducer