import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions ( state={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const {question} = action
            return {
                ...state,
                [question.id]: question,
            }
        case ANSWER_QUESTION:
            const {qid, answer, authedUser} = action
            let updated_answer = {
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat(authedUser)
            }
            let updated_question = {
                    ...state[qid],
                    [answer]: updated_answer
                }
            return {
                ...state,
                [qid]: updated_question
                }
        default:
            return state
    }
}