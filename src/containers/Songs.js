import React, { Component } from 'react'
import SongCard from '../components/SongCard'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/index'

class Songs extends Component {

  componentDidMount() {
    this.props.fetchSongs()
  }

  render() {
    return(
      <div className="songs-container">
        {this.props.songs.map((s, id) => < SongCard key={id} song={s} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)