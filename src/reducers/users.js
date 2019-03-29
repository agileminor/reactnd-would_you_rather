import { RECEIVE_USERS, ANSWER_USER_QUESTION, ADD_USER_QUESTION } from '../actions/users'

export default function users ( state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ANSWER_USER_QUESTION :
        const {qid, answer, authedUser} = action
        let updated_answers = {
            ...state[authedUser]['answers'],
            [qid]: answer
        }
        let updated_user = {
            ...state[authedUser],
            answers: updated_answers
        }
        return {
            ...state,
            [authedUser]: updated_user
        }
        case ADD_USER_QUESTION :
        const {new_question} = action
        updated_user = {
            ...state[new_question.author],
            questions: state[new_question.author].questions.concat(new_question.id)
        }
        return {
            ...state,
            [new_question.author]: updated_user
        }
        default:
            return state
    }
}