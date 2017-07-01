class SurveyData {
  constructor (name = 'New Survey', question = '', choices = []) {
    this.name = name
    this.questions = []
  }

  newQuestion () {
    this.questions.push({
      text: '',
      choices: []
    })
  }
}

export default SurveyData
