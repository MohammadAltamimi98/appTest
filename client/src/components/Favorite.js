import React, { Component } from 'react'
import axios from 'axios'
import FavModel from './FavModel'
import UpdateForm from './UpdateForm'

export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            FavData: [],
            showForm: false,
            title: '',
            thumbnail: '',
            slug: '',
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

        this.componentDidMount();
    }



    showUpdateForm = (slug, title, thumbnail) => {
        this.setState({
            showForm: true,
            title: title,
            slug: slug,
            thumbnail: thumbnail
        });
    }

    updatetitle = (e) => this.setState({ title: e.target.value })
    updatethumbnail = (e) => this.setState({ thumbnail: e.target.value })

    updateItem = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_SERVER_URL}/art/favorite/${this.state.slug}`;
        await axios.put(url, {
            title: this.state.title,
            thumbnail: this.state.thumbnail,
        });


        this.setState({
            showForm: false,
        });

        this.componentDidMount();
    }





    render() {
        return (<>
            <FavModel FavData={this.state.FavData} deleteFav={this.deleteFav}
                showUpdateForm={this.showUpdateForm} />
            {
                this.state.showForm &&
                <> <UpdateForm
                    updateItem={this.updateItem}
                    updatethumbnail={this.updatethumbnail}
                    updatetitle={this.updatetitle}
                    title={this.state.title}
                    thumbnail={this.state.thumbnail}

                />
                </>
            }
        </>)
    }
}

export default Favorite;
