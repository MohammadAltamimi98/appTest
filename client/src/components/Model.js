import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';

export class Model extends Component {
    render() {
        return (
            <Jumbotron>
                {this.props.apiData.map((value, index) =>
                    <div key={index}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>${value.title}</Card.Title>
                                <Card.Text>
                                    {value.thumbnail}
                                </Card.Text>
                                <Button variant="primary" onClick={e => this.props.addToFav(value)} >add to favorite</Button>



                            </Card.Body>
                        </Card>
                        <br />

                    </div>
                )}

            </Jumbotron>)
    }
}

export default Model
