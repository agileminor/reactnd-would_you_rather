import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import {handleAddQuestion} from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        textQ1: '',
        textQ2: '',
        toHome: false,
    }
    handleChangeQ1 = (e) => {
        const textQ1 = e.target.value

        this.setState(() => ({
            textQ1
        }))
    }
    handleChangeQ2 = (e) => {
        const textQ2 = e.target.value

        this.setState(() => ({
            textQ2
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {textQ1, textQ2} = this.state
        const {dispatch, user} = this.props
        const new_question = {
            optionOneText: textQ1,
            optionTwoText: textQ2,
            author: user.id
        }
        dispatch(handleAddQuestion(new_question))
        this.setState(() => ({
            textQ1: '',
            textQ2: '',
            toHome: true,
        }))
    }
    render() {
        const {textQ1, textQ2, toHome} = this.state
        if (toHome === true) {
            return <Redirect to="/" />
        }
        return (
            <Container >
                <h3> Create New Question </h3>
                Complete the question:
                <h2> Would you rather </h2>
                <form className='new-question' onSubmit={this.handleSubmit}>
                <textarea
                        placeholder="Enter Option One text here"
                        value={textQ1}
                        onChange={this.handleChangeQ1}
                        className='textarea'
                        maxLength={280}
                    />
                    OR
                <textarea
                        placeholder="Enter Option Two text here"
                        value={textQ2}
                        onChange={this.handleChangeQ2}
                        className='textarea'
                        maxLength={280}
                    />
                    <br/>
                <Button
                        variant='primary'
                        type='submit'
                        disabled={textQ1 === '' || textQ2 === ''}>
                        Submit
                    </Button>
                </form>
            </Container>
            )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        user: users[authedUser],
    }
}
export default connect(mapStateToProps)(NewQuestion)