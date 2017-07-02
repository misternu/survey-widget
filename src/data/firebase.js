import SurveyActionTypes from './SurveyActionTypes'
import Immutable from 'immutable'
import * as firebase from 'firebase'

export const init = () => {
  let config = {
    apiKey: 'THISISNOTMYKEY',
    authDomain: 'surveys-77337.firebaseapp.com',
    databaseURL: 'https://surveys-77337.firebaseio.com',
    projectId: 'surveys-77337',
    storageBucket: 'surveys-77337.appspot.com',
    messagingSenderId: 'THISISNOTMYID'
  }
  firebase.initializeApp(config)
  return firebase.database()
}

class FirebaseClient {
  constructor () {
    this.dbRef =
  }
  getInitialState () {
    let dbRef = init().ref('/surveys')
    let callReduce = snapshot => {
      this.reduce(this.state, {
        type: SurveyActionTypes.LOAD_SURVEYS,
        surveys: snapshot.val()
      })
    }
    dbRef.once('value').then(snapshot => { console.log(snapshot.val()) })
    dbRef.on('value', callReduce)
    return Immutable.List()
  }
}

export default new FirebaseStore()
