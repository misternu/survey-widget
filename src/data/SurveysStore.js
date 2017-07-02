import {ReduceStore} from 'flux/utils'
import SurveyActionTypes from './SurveyActionTypes'
import SurveyDispatcher from './SurveyDispatcher'
import Immutable from 'immutable'

class SurveysStore extends ReduceStore {
  constructor () {
    super(SurveyDispatcher)
  }

  getInitialState () {
    return Immutable.List()
  }

  reduce (state, action) {
    switch (action.type) {
      case SurveyActionTypes.ADD_SURVEY:
        let name = 'Survey ' + (state.size + 1).toString()
        return state.push(Immutable.Map({name: name, questions: Immutable.List()}))

      case SurveyActionTypes.CHANGE_NAME:
        return state.update(action.index, survey => survey.set('name', action.text))

      case SurveyActionTypes.DELETE_SURVEY:
        return state.delete(action.index)

      case SurveyActionTypes.ADD_QUESTION:
        return state.update(action.index, survey => {
          return survey.update('questions', questions => {
            return questions.push(Immutable.Map({text: '', choices: Immutable.List()}))
          })
        })

      case SurveyActionTypes.DELETE_QUESTION:
        return state.update(action.survey, survey => {
          return survey.update('questions', questions => {
            return questions.delete(action.index)
          })
        })

      case SurveyActionTypes.CHANGE_QUESTION:
        return state.update(action.survey, survey => {
          return survey.update('questions', questions => {
            return questions.update(action.index, question => {
              return question.set('text', action.text)
            })
          })
        })

      case SurveyActionTypes.ADD_CHOICE:
        return state.update(action.survey, survey => {
          return survey.update('questions', questions => {
            return questions.update(action.index, question => {
              return question.update('choices', choices => {
                return choices.push('')
              })
            })
          })
        })

      case SurveyActionTypes.DELETE_CHOICE:
        return state.update(action.survey, survey => {
          return survey.update('questions', questions => {
            return questions.update(action.question, question => {
              return question.update('choices', choices => {
                return choices.delete(action.index)
              })
            })
          })
        })

      case SurveyActionTypes.UPDATE_CHOICE:
        return state.update(action.survey, survey => {
          return survey.update('questions', questions => {
            return questions.update(action.question, question => {
              return question.update('choices', choices => {
                return choices.set(action.index, action.text)
              })
            })
          })
        })

      default:
        return state
    }
  }
}

export default new SurveysStore()
