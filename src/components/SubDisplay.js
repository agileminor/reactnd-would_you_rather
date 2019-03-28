import React, { Component } from 'react'
import ShortQuestion from './ShortQuestion'
import {connect} from 'react-redux'

class SubDisplay extends Component {
    render() {
        const {answer_type} = this.props
        const {questions, user} = this.props
        const answered_ids = Object.keys(user.answers)
        const unanswered_ids = Object.keys(questions).filter((x) => {
            return Object.keys(user.answers).indexOf(x) < 0
            })
        const questionIds = answer_type === 'answered'
        ? answered_ids
        : unanswered_ids
        return (
            <div className='sub-display'>
                {questionIds.map((questionId) =>
                    <ShortQuestion key={questionId} question={questions[questionId]}/>)}
            </div>
            )
        }
    }
function mapStateToProps({authedUser, users, questions}) {
    return {
        user: users[authedUser],
        questions: questions,
    }
}

export default connect(mapStateToProps)(SubDisplay)
