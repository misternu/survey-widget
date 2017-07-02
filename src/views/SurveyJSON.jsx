import React from 'react'
import PropTypes from 'prop-types'

const SurveyJSON = props => {
  let string = props.editing ? JSON.stringify(props.survey, null, 4) : ''
  return (
    <div className='json'>
      {string}
    </div>
  )
}

SurveyJSON.propTypes = {
  editing: PropTypes.bool,
  survey: PropTypes.object
}
export default SurveyJSON
