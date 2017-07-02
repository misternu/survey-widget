import React from 'react'
import PropTypes from 'prop-types'
import SurveyList from './SurveyList'
import SurveyEditor from './SurveyEditor'
// import SurveyJSON from './survey_json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'

const Main = (props) => {
  let surveyString = JSON.stringify(props.surveys.get(props.edit.get('index')), null, 2)
  return (
    <MuiThemeProvider><div>
      <SurveyList {...props} />
      <SurveyEditor {...props} />
      <Dialog {...props}
        open={props.edit.get('open')}
        onRequestClose={props.onCloseDialog}>
        <div style={{whiteSpace: 'pre', fontFamily: 'Monaco'}}>
          {surveyString}
        </div>
      </Dialog>
    </div></MuiThemeProvider>
  )
}

Main.propTypes = {
  surveys: PropTypes.object,
  edit: PropTypes.object,
  onCloseDialog: PropTypes.func
}

export default Main
