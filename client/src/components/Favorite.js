import React, { Component } from 'react'
import axios from 'axios'
import FavModel from './FavModel'

export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            FavData: [],
            showUpdate: false,
            title: '',
            thumbnail: '',
            slugName: '',
        }
    };

    componentDidMount = async () => {

        const requestFav = await axios.get(`${this.state.url}/art/favorite`)

        this.setState({
            FavData: requestFav.data
        })
        console.log(this.state.FavData);

    }


    deleteFav = async (slug) => {
        const deleteFav = await axios.delete(`${this.state.url}/art/favorite/${slug}`)

        this.setState({
            FavData: deleteFav.data
        })


    }
    updateStuff = (e) => {
        this.setState({
            title: e.target.value,
            thumbnail: e.target.value
        })
    }


    updateFav = async (e) => {

    }

    render() {
        return (<FavModel FavData={this.state.FavData} deleteFav={this.deleteFav} />)
    }
}

export default Favorite;
