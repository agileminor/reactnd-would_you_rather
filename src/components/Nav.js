import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { NavLink} from 'react-router-dom'

class MyNav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(''))
  }
  render() {
    const {test_login, user} = this.props
    const user_name = user ? user.name : ''
    const linkStyle = {
      margin: 10,
    }
     return (
    <Navbar bg="light">
      <Nav className="mr-auto">
        <NavLink style={linkStyle} to="/">Home</NavLink>
        <NavLink style={linkStyle} to="/add" activeClassName='active'>New Question </NavLink>
        <NavLink style={linkStyle} to="/leaderboard" activeClassName='active'>Leaderboard</NavLink>
        {test_login &&
          <span style={linkStyle}>Hello, {user_name} </span>
        }
        {test_login &&
          <NavLink style={linkStyle} to="" onClick = {this.handleLogout}>Logout</NavLink>
        }
        </Nav>
      </Navbar>
  )
  }

}

function mapStateToProps({authedUser, users}) {
  return {
    test_login: authedUser === '' ? false : true,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(MyNav)
