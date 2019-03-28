export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_USER_QUESTION = 'ANSWER_USER_QUESTION'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function answerUserQuestion ({qid, authedUser, answer}) {
    return {
        type: ANSWER_USER_QUESTION,
        qid,
        authedUser,
        answer
    }
}

export function addUserQuestion(new_question) {
    return{
        type: ADD_USER_QUESTION,
        new_question
    }
}