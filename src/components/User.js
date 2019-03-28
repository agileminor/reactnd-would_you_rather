import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Row, Image} from 'react-bootstrap'

class User extends Component {
    render() {
        const {users, id} = this.props
        const user = users[id]
        return (
            <Row className='user'>
                <Col>
                <Image src={user.avatarURL} roundedCircle/>
                </Col>
                <Col>
                    <h2>{user.name}</h2>
                    Answered Questions  {Object.keys(user.answers).length}<br/>
                    Created Questions {Object.keys(user.questions).length}
                </Col>
            </Row>
            )
        }
    }

function mapStateToProps({authedUser, users, questions}) {
    return {
        questions: questions,
        users: users
    }
}
export default connect(mapStateToProps)(User)