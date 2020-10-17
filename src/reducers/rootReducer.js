import { combineReducers, createStore } from 'redux'
import rootReducer, {
    ArtistsReducer,
    SongsReducer,
    PlaylistsReducer
  } from './reducers'

const rootReducer = combineReducers({
        ArtistsReducer,
        SongsReducer,
        PlaylistsReducer
  }) 

const store = createStore(rootReducer)
console.log(store.getState())