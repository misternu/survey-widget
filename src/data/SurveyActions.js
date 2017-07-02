import SurveyActionTypes from './SurveyActionTypes'
import SurveyDispatcher from './SurveyDispatcher'

const Actions = {
  addSurvey () {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.ADD_SURVEY
    })
  },

  selectSurvey (index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.SELECT_SURVEY,
      index: index
    })
  },

  changeName (index, text) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.CHANGE_NAME,
      index: index,
      text: text
    })
  },

  deleteSurvey (index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.DELETE_SURVEY,
      index: index
    })
  },

  addQuestion (index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.ADD_QUESTION,
      index: index
    })
  },

  deleteQuestion (survey, index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.DELETE_QUESTION,
      survey: survey,
      index: index
    })
  },

  changeQuestion (survey, index, text) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.CHANGE_QUESTION,
      survey: survey,
      index: index,
      text: text
    })
  },

  addChoice (survey, index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.ADD_CHOICE,
      survey: survey,
      index: index
    })
  },

  deleteChoice (survey, question, index) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.DELETE_CHOICE,
      survey: survey,
      question: question,
      index: index
    })
  },

  changeChoice (survey, question, index, text) {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.UPDATE_CHOICE,
      survey: survey,
      question: question,
      index: index,
      text: text
    })
  },

  openDialog () {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.OPEN_DIALOG
    })
  },

  closeDialog () {
    SurveyDispatcher.dispatch({
      type: SurveyActionTypes.CLOSE_DIALOG
    })
  }
}

export default Actions
