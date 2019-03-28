import React, { Component } from 'react'
import {connect} from 'react-redux'
import SubDisplay from './SubDisplay'
import { Container, Col, Row } from 'react-bootstrap'

class PollDisplay extends Component {
    state = {
            answer_type: 'unanswered'
    }
    selectAnswered = (e) => {
        e.preventDefault()
        e.persist()
        this.setState(() => ({
            answer_type: 'answered',
        }))
    }
    selectUnanswered = (e) => {
        e.preventDefault()
        e.persist()
        this.setState(() => ({
            answer_type: 'unanswered'
        }))
    }
    render() {
    const default_back ={backgroundColor: '#b7b8b8'};
    const main_back ={backgroundColor: '#b7b8b8', "border": "1px solid black"};
    const select_back ={backgroundColor: '#90b890'};
        return (
            <Container >
                <Row>
                    <Col onClick = {this.selectUnanswered} style={this.state.answer_type === 'unanswered' ? select_back : default_back}>
                        Unanswered
                    </Col>
                    <Col onClick = {this.selectAnswered} style={this.state.answer_type === 'answered' ? select_back : default_back}>
                        Answered
                    </Col>
                </Row>
                    <Container style={main_back}>
                        <SubDisplay answer_type={this.state.answer_type} />
                    </Container>
                </Container>
            )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
      authedUser,
      users: users,
      questions: questions,
      user: users[authedUser],
    }
}
export default connect(mapStateToProps)(PollDisplay)