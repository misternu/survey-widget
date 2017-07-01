import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SurveyEditor = props => {
  if (props.editing) {
    let questions = props.survey.questions.map((question, qIndex) => {
      let choices = question.choices.map((choice, cIndex) => {
        return (
          <div className="list-item" key={cIndex}>
            <input autoFocus type="text"
              value={choice}
              onChange={event => {props.handleChoiceChange(event, qIndex, cIndex)}}
            />
            <button onClick={() => {props.handleDeleteChoice(qIndex, cIndex)}}>Delete</button>
          </div>
        )
      })
      return (
        <div className="question" key={qIndex}>
          <textarea value={question.text} onChange={event => props.handleQuestionChange(event, qIndex)} />
          <button onClick={() => {props.handleDeleteQuestion(qIndex)}}>Delete</button>
          {choices}
          <div className="list-item" onClick={() => {props.handleNewChoice(qIndex)}}>Add New Choice</div>
        </div>
      )
    })
    return (
      <div className='editor'>
        <h3>Editing
          <input autoFocus type="text"
            value={props.survey.name}
            onChange={props.handleNameChange}
          />
          <button onClick={props.handleDeleteSurvey}>Delete</button>
        </h3>
        {questions}
        <div className="list-item" onClick={props.handleNewQuestion}>Add New Question</div>
      </div>
    )
  } else {
    return <div className='editor'></div>
  }
}

export default SurveyEditor
