import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import {loadingBarReducer} from 'react-redux-loading'
/* combineReducers creates the equivalent of taking
    the part of state of the same name, and action and returning
    the results to the same named part of state, ie
    x: x(state.x, action)
*/
export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
})