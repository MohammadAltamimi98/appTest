import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';


export class FavModel extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    {this.props.FavData.map((value, index) =>
                        <div key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>${value.title}</Card.Title>
                                    <Card.Text>
                                        {value.thumbnail}
                                    </Card.Text>
                                    <Button variant="primary" onClick={e => this.props.deleteFav(value.slug)} >Delete</Button>
                                    <br />
                                    <br />
                                    <Button variant="primary" onClick={e => this.props.updateFav(value.slug, value.title, value.thumbnail)}>Update</Button>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    )}</Jumbotron>
            </div>
        )
    }
}

export default FavModel;





