import {getInitialData, saveQuestion, saveQuestionAnswer} from '../utils/api'
import {receiveUsers, answerUserQuestion, addUserQuestion} from './users'
import {receiveQuestions, addQuestion, answerQuestion} from './questions'
import { setAuthedUser} from './authedUser'
import { showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = ''

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestion (new_question) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return saveQuestion(new_question)
            .then((question) => {
            dispatch(addQuestion(question))// the question has the user ID!!!
            dispatch(addUserQuestion(question))
        })
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        dispatch(answerUserQuestion(info))
        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handleAnswerQuestion: ', e)
                alert('There was an error answering the question. Try again')
            })
    }
}

