import Main from '../views/Main'
import {Container} from 'flux/utils'
import SurveysStore from '../data/SurveysStore'
import SurveyEditStore from '../data/SurveyEditStore'
import SurveyActions from '../data/SurveyActions'

function getStores () {
  return [
    SurveysStore,
    SurveyEditStore
  ]
}

function getState () {
  return {
    surveys: SurveysStore.getState(),
    edit: SurveyEditStore.getState(),

    onAddSurvey: SurveyActions.addSurvey,
    onSelectSurvey: SurveyActions.selectSurvey,
    onChangeName: SurveyActions.changeName,
    onDeleteSurvey: SurveyActions.deleteSurvey,
    onNewQuestion: SurveyActions.addQuestion,
    onDeleteQuestion: SurveyActions.deleteQuestion,
    onChangeQuestion: SurveyActions.changeQuestion,
    onNewChoice: SurveyActions.addChoice,
    onDeleteChoice: SurveyActions.deleteChoice,
    onChangeChoice: SurveyActions.changeChoice,
    onOpenDialog: SurveyActions.openDialog,
    onCloseDialog: SurveyActions.closeDialog
  }
}

export default Container.createFunctional(Main, getStores, getState)
