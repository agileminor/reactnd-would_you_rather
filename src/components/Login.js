import React, { Component } from 'react'
import {Container, Row, Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUser: ''
    }
    handleToggle = (e) => {
        e.persist()
        this.setState(() => ({
            selectedUser: e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.selectedUser))
    }
    render() {
        return(
            <Container>
                <Row>
                    Welcome to Would You Rather?
                </Row>
                <Row>
                    Please Sign in
                </Row>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect">
                            <Form.Control as="select" onChange={this.handleToggle}>
                                <option key='default'></option>
                                {this.props.userIds.map((userId) =>
                                    <option key={userId}>{userId}</option>
                                    )}
                            </Form.Control>
                        </Form.Group>
                    <Button variant='primary' type='submit'>
                        Sign In
                        </Button>
                    </Form>
                </Row>
            </Container>
            )
    }

}

function mapStateToProps({users}) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)