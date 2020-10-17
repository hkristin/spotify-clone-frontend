import React, { Component } from 'react'
import PlaylistCard from '../components/PlaylistCard'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { fetchPlaylists, addPlaylist} from '../actions/index'

class Playlists extends Component {

  componentDidMount() {
    this.props.fetchPodcasts()
  }

  render() {
    return(
      <div className="playlists-container">
        < AddButton name="Add Playlist" addPlaylist={this.props.addPlaylist}/>
        {this.props.playlists.map((p, id) => < PlaylistCard key={id} playlist={p} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    addPlaylist: playlist => dispatch(addPlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)