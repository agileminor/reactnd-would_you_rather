import React, { Component } from 'react'
import MyNav from './Nav'
import PollDisplay from './PollDisplay'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'sarahedo',
      users : [
        {
          id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '../../images/snow.jpg',
          answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
          },
          questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
          avatarURL: '../../images/tyler.jpg',
          answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
          },
          questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
        {
          id: 'johndoe',
          name: 'John Doe',
          avatarURL: '../../images/leaf.jpg',
          answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionOne'
          },
          questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        }
      ],
      questions : [
        {
          id: '8xf0y6ziyjabvozdd253nd',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
          }
        },
        {
          id: '6ni6ok3ym7mf1p33lnez',
          author: 'johndoe',
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: 'become a superhero',
          },
          optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillian'
          }
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <MyNav/>
        Hello {this.state.user}
      {/*<PollDisplay user={this.state.users.filter(user => user.id === this.state.user)} questions={this.state.questions}/>*/}
      <NewQuestion />
      </div>
    )
  }
}

export default App;
