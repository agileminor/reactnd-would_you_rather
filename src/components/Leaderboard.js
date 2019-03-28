import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import User from './User'
import { connect } from 'react-redux'
/* add sorting of users */
class Leaderboard extends Component {
    render() {
        const {users} = this.props
        const user_ids = Object.keys(users)
        return (
            <Container className='leaderboard'>
                {user_ids.map((user_id) =>
                    <User id={user_id} key={user_id}/>)}
            </Container>
            )
        }
    }
function mapStateToProps({authedUser, users}) {
  return {
    test_login: authedUser === '' ? false : true,
    users: users
  }
}

export default connect(mapStateToProps)(Leaderboard)

