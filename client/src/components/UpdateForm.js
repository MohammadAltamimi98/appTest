import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class UpdateForm extends Component {
    render() {
        return (
            <div>


                <Form>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="text" placeholder="Enter Thumbnail" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Changes
                    </Button>
                </Form>

            </div>
        )
    }
}

export default UpdateForm
