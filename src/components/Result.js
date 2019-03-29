import React, { Component } from 'react'
import {Col, Row} from 'react-bootstrap'

class Result extends Component {
    render () {
        const {question, user_id} = this.props
        const one_count = question.optionOne.votes.length
        const two_count = question.optionTwo.votes.length
        const answered_one = question.optionOne.votes.includes(user_id)
        const answered_two = question.optionTwo.votes.includes(user_id)
        return (
            <Col>
                <Row>
                    Results
                </Row>
                <Row>
                    {question.optionOne.text} Stats: {one_count} out of {one_count + two_count} votes, {one_count / (one_count + two_count) *100}%
                    {answered_one ? "(You voted for this option)" : ""}
                </Row>
                <Row>
                    {question.optionTwo.text}  Stats: {two_count} out of {one_count + two_count} votes, {two_count / (one_count + two_count) *100}%
                    {answered_two ? "(You voted for this option)" : ""}
                </Row>
            </Col>
            )
        }
    }

export default Result