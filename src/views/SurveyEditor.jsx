import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import ContentClear from 'material-ui/svg-icons/content/clear'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const SurveyEditor = props => {
  if (props.edit.get('editing')) {
    let surveyIndex = props.edit.get('index')
    let survey = props.surveys.get(surveyIndex)
    let questions = survey.get('questions').map((question, qIndex) => {
      let choices = question.get('choices').map((choice, cIndex) => {
        return (
          <ListItem
            style={{padding: '0'}}
            key={cIndex}
            rightIcon={<ContentClear onClick={() => {
              props.onDeleteChoice(surveyIndex, qIndex, cIndex)
            }} />}>
            <TextField fullWidth
              value={choice}
              onChange={event => { props.onChangeChoice(surveyIndex, qIndex, cIndex, event.target.value) }}
              hintText='Type an answer here'
            />
          </ListItem>
        )
      })
      return (
        <Card key={qIndex} style={{padding: '20px', margin: '10px'}}>
          <TextField fullWidth
            id={qIndex.toString + 'title'}
            value={question.get('text')}
            onChange={event => props.onChangeQuestion(surveyIndex, qIndex, event.target.value)}
            hintText='Type your question here'
          />
          <List>
            {choices}
          </List>
          <CardActions>
            <FlatButton label='Add Choice' onClick={() => { props.onNewChoice(surveyIndex, qIndex) }} />
            <FlatButton
              label='Delete Question'
              onClick={() => { props.onDeleteQuestion(surveyIndex, qIndex) }}
              style={{float: 'right'}}
            />
          </CardActions>
        </Card>
      )
    })
    let editorStyle = {
      width: '500px',
      margin: '20px',
      padding: '20px',
      float: 'left'
    }
    return (
      <Card style={editorStyle}>
        <IconMenu style={{float: 'right'}}
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText='View JSON' onClick={props.onOpenDialog} />
          <MenuItem primaryText='Delete Survey' onClick={() => { props.onDeleteSurvey(surveyIndex) }} />
        </IconMenu>
        <TextField
          name={props.edit.get('index').toString()}
          value={survey.get('name')}
          onChange={event => { props.onChangeName(surveyIndex, event.target.value) }}
          style={{width: '85%'}} />
        {questions}
        <CardActions>
          <FlatButton label='Add Question' onClick={() => { props.onNewQuestion(surveyIndex) }} />
        </CardActions>
      </Card>
    )
  } else {
    return <div className='editor' />
  }
}

SurveyEditor.propTypes = {
  surveys: PropTypes.object,
  edit: PropTypes.object,
  onChangeName: PropTypes.func,
  onDeleteSurvey: PropTypes.func,
  onNewQuestion: PropTypes.func,
  onOpenDialog: PropTypes.func
}

export default SurveyEditor
