import {ReduceStore} from 'flux/utils'
import SurveyActionTypes from './SurveyActionTypes'
import SurveyDispatcher from './SurveyDispatcher'
import Immutable from 'immutable'

class SurveyDraftStore extends ReduceStore {
  constructor () {
    super(SurveyDispatcher)
  }

  getInitialState () {
    return Immutable.Map({
      editing: false,
      index: 0,
      length: 0,
      open: false
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case SurveyActionTypes.ADD_SURVEY:
        let newIndex = state.get('length')
        return state.set('index', newIndex)
          .set('length', newIndex + 1)
          .set('editing', true)

      case SurveyActionTypes.SELECT_SURVEY:
        return state.set('editing', true)
          .set('index', action.index)

      case SurveyActionTypes.DELETE_SURVEY:
        let newLength = state.get('length') - 1
        return state.set('editing', false)
          .set('index', 0)
          .set('length', newLength)

      case SurveyActionTypes.OPEN_DIALOG:
        return state.set('open', true)

      case SurveyActionTypes.CLOSE_DIALOG:
        return state.set('open', false)

      default:
        return state
    }
  }
}

export default new SurveyDraftStore()
