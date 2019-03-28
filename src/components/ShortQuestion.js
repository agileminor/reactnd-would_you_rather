import React, {Component} from 'react'
import {Col, Row, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class ShortQuestion extends Component {
    render () {
        const {users, question} = this.props
        return (
                <Row>
                    <Col>
                        <Row>
                            <Col className='short-question'>
                                {question.author} asks <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Image src={users[question.author].avatarURL} />
                            </Col>
                            <Col>
                                <Link to={`/question/${question.id}`}>
                                    Would you rather <br/>
                                    {question.optionOne.text} <br/>
                                    View Poll
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

function mapStateToProps({users}) {
    return {
        users: users
    }
}
export default connect(mapStateToProps)(ShortQuestion)
