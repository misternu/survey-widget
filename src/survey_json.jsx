import React, { Component } from 'react'
import PropTypes from 'prop-types';

const SurveyJSON = props => {
  let string = props.editing ? JSON.stringify(props.survey, null, 4) : ''
  return (
    <div className="json">
      {string}
    </div>
  )
}

export default SurveyJSON
