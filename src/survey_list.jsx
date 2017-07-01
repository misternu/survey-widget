import React, { Component } from 'react'
import PropTypes from 'prop-types';

const SurveyList = props => {
  let surveys = props.surveys.map((survey, index) => {
    let className = 'list-item'
    if (props.editing && index == props.index) {
      className += ' select'
    }
    return (<div
      className={className}
      key={index}
      onClick={() => {
        props.startEdit(index)}}>
      {survey.name}
    </div>)
  })
  return (
    <div className='list'>
      <h3>Surveys:</h3>
      {surveys}
      <div className='list-item' onClick={props.handleNewSurvey}>Add New Survey</div>
    </div>
  )
}

export default SurveyList
