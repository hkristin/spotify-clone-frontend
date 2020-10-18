import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists} from '../actions/index'
import ArtistCard from '../components/ArtistCard'

class Artists extends Component {

  componentDidMount() {
    this.props.fetchArtists()
  }

  render() {
    return(
      <div className="artists-container">
        {this.props.artists.map((p, id) => < ArtistCard key={id} artist={p} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists)