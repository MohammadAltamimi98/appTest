import React, { Component } from 'react'
import axios from 'axios'
import Model from './Model'
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiData: [],
        }
    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.url}/art`);
        // console.log(request);
        this.setState({
            apiData: request.data,
        })
        // console.log(this.state.apiData);
    }

    addToFav = async (data) => {
        // console.log(data);
        const postReq = await axios.post(`${this.state.url}/art/favorite`, data)

        this.setState({
            message: postReq.data,
        })

        console.log(this.state.message);
    }

    render() {
        return (
            <div>
                <Model apiData={this.state.apiData} addToFav={this.addToFav} />
            </div>
        )
    }
}

export default Main
