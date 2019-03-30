import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyNav from './Nav'
import PollDisplay from './PollDisplay'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'



//TODO
// update readme
//add sorting of displayed polls and leaderboard
//
class App extends Component {
  state = {
    users: {}
  }

  componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    // move routes except poll outside check, add checks in component
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar/>
              <Fragment>
              {this.props.loading ? null : <MyNav/>}
                {
               (this.props.loading || this.props.authedUser==='')
                ? <Fragment>
                  <Switch>
                  <Route path='/question/:id' component={Question} />
                  <Route path='/' component={Login} />
                  </Switch>
                    </Fragment>
                : <div>
                    <Route path='/' exact component={PollDisplay} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/question/:id' component={Question} />
                  </div>
              }
              </Fragment>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
      authedUser: authedUser,
      users: users,
      questions: questions,
      user: users[authedUser],
      loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
