import React, { Component } from 'react'
import {Col,Form, Button, FormGroup} from 'react-bootstrap'
import {handleAnswerQuestion} from '../actions/shared'
import { connect } from 'react-redux'

class Poll extends Component {
    state = {
        optionSelected: 'optionOne'
    }
    handleRadio = (e) => {
        e.persist()
         this.setState(() => ({
             optionSelected: e.target.id
         }))
    }
    //TODO figure out why this is resetting app. Maybe try swapping button to onClick instead of form onSubmit
    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, authedUser, question} = this.props
        dispatch(handleAnswerQuestion({
            authedUser,
            qid: question.id,
            answer: this.state.optionSelected

        }))
    }
    render() {
        const {question} = this.props
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="exampleForm.fromBasicCheckbox">
                    <Form.Label as="legend">
                        Would you rather? <br/>
                    </Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            id='optionOne'
                            name='formHorizontalRadio'
                            label = {question.optionOne.text}
                            onChange={this.handleRadio}
                        />
                        <Form.Check
                            type='radio'
                            id='optionTwo'
                            label = {question.optionTwo.text}
                            name='formHorizontalRadio'
                            onChange={this.handleRadio}
                        />
                    </Col>
                    <Button variant='primary' type='submit'>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}
function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        questions: questions,
        users: users
    }
}
export default connect(mapStateToProps)(Poll)
//export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    // handleLike = (e) => {
    //     e.preventDefault()
    //     const {dispatch, tweet, authedUser} = this.props
    //     dispatch(handleToggleTweet({
    //         id: tweet.id,
    //         hasLiked: tweet.hasLiked,
    //         authedUser
    //     }))
    // }