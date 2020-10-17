import React, { Component } from 'react'
import { addPlaylist } from '../actions/index'
import { connect } from 'react-redux'
import { render } from '@testing-library/react'


handleChange = e => {
    this.setState({
    [e.target.name]: e.target.value
})
}


handleSubmit = e => {
    e.preventDefault()
    this.props.addPlaylist(this.state)
    document.getElementById('new-playlist-form').reset()
    this.props.history.push('/playlists')
}

render() {
    return (
        
    )
}


export default connect(null, { addPlaylist })(PlaylistNew)