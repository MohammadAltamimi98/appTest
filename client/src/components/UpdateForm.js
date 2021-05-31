import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class UpdateForm extends Component {
    render() {
        return (
            <div>

                <Form onSubmit={this.props.updateItem}>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={this.props.updatetitle} placeholder="Enter title" value={this.props.title} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="text" onChange={this.props.updatethumbnail} placeholder="Enter Thumbnail" value={this.props.thumbnail} />
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
