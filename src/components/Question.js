import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Col, Row, Image} from 'react-bootstrap'
import Result from './Result'
import Poll from './Poll'

class Question extends Component {
    render() {
        const {user, questions, id} = this.props
        const question = questions[id]
        const author = question.author
        const avatarURL = this.props.users[author].avatarURL
        const answered = question.optionOne.votes.includes(user.id) ||
            question.optionTwo.votes.includes(user.id)
        return (
            <Container className='question'>
                <Row>
                    <Col>
                        {answered
                            ? `Asked by ${author}`
                            : `${author} asks`
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={avatarURL} />
                    </Col>
                    <Col>
                        {(!answered)
                            ? <Poll question={question} />
                            : <div className='answered'>
                                <Result user_id = {user.id} question={question}/>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
            )
    }
}
function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params
    return {
        id,
        user: users[authedUser],
        questions: questions,
        users: users
    }
}
export default connect(mapStateToProps)(Question)