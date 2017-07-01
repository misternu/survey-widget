import React, { Component } from 'react'
import SurveyData from './survey_data'
import SurveyList from './survey_list'
import SurveyEditor from './survey_editor'
import SurveyJSON from './survey_json'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      surveyDatas: [],
      editing: false,
      index: 0
    }
  }

  startEdit (index) {
    this.setState({editing: true, index: index})
  }

  changeSurveys (func) { // This will safely mutate a copy of state and then change state
    let surveysCopy = this.state.surveyDatas.slice()
    func(surveysCopy)
    this.setState({surveyDatas: surveysCopy})
  }

  handleNameChange (event) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].name = event.target.value
    })
  }

  handleNewQuestion () {
    this.changeSurveys(surveys => {
      surveys[this.state.index].newQuestion()
    })
  }

  handleQuestionChange (event, index) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].questions[index].text = event.target.value
    })
  }

  handleDeleteQuestion (index) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].questions.splice(index, 1)
    })
  }

  handleChoiceChange (event, qIndex, cIndex) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].questions[qIndex].choices[cIndex] = event.target.value
    })
  }

  handleNewChoice (index) {
    let number = this.state.surveyDatas[this.state.index].questions[index].choices.length + 1
    let choiceString = 'choice ' + number.toString()
    this.changeSurveys(surveys => {
      surveys[this.state.index].questions[index].choices.push(choiceString)
    })
  }

  handleDeleteChoice (qIndex, cIndex) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].questions[qIndex].choices.splice(cIndex, 1)
    })
  }

  handleNewSurvey () {
    this.setState({ editing: true, index: (this.state.surveyDatas.length) })
    this.changeSurveys(surveys => {
      surveys.push(new SurveyData('New Survey'))
    })
  }

  handleDeleteSurvey () {
    this.changeSurveys(surveys => {
      surveys.splice(this.state.index, 1)
    })
    this.setState({editing: false})
  }

  render () {
    return (
      <div>
        <SurveyList
          surveys={this.state.surveyDatas}
          editing={this.state.editing}
          index={this.state.index}
          startEdit={(index) => { this.startEdit(index) }}
          handleNewSurvey={() => { this.handleNewSurvey() }}
        />
        <SurveyEditor
          editing={this.state.editing}
          survey={this.state.surveyDatas[this.state.index]}
          handleNameChange={event => { this.handleNameChange(event) }}
          handleDeleteSurvey={event => { this.handleDeleteSurvey() }}
          handleNewQuestion={event => { this.handleNewQuestion() }}
          handleQuestionChange={(event, index) => { this.handleQuestionChange(event, index) }}
          handleDeleteQuestion={(index) => { this.handleDeleteQuestion(index) }}
          handleChoiceChange={(event, qIndex, cIndex) => { this.handleChoiceChange(event, qIndex, cIndex) }}
          handleNewChoice={(index) => { this.handleNewChoice(index) }}
          handleDeleteChoice={(qIndex, cIndex) => { this.handleDeleteChoice(qIndex, cIndex) }}
        />
        <SurveyJSON
          editing={this.state.editing}
          survey={this.state.surveyDatas[this.state.index]}
        />
      </div>
    )
  }
}

export default Main
