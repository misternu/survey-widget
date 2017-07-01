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
  if (props.editing) {
    let questions = props.survey.questions.map((question, qIndex) => {
      let choices = question.choices.map((choice, cIndex) => {
        return (
          <ListItem
            style={{padding: '0'}}
            key={cIndex}
            rightIcon={<ContentClear onClick={() => { props.handleDeleteChoice(qIndex, cIndex) }} />}>
            <TextField fullWidth
              value={choice}
              onChange={event => { props.handleChoiceChange(event, qIndex, cIndex) }}
              hintText='Type an answer here'
            />
          </ListItem>
        )
      })
      return (
        <Card key={qIndex} style={{padding: '20px', margin: '10px'}}>
          <TextField fullWidth
            id={qIndex.toString + 'title'}
            value={question.text}
            onChange={event => props.handleQuestionChange(event, qIndex)}
            hintText='Type your question here'
          />
          <List>
            {choices}
          </List>
          <CardActions>
            <FlatButton label='Add Choice' onClick={() => { props.handleNewChoice(qIndex) }} />
            <FlatButton
              label='Delete Question'
              onClick={() => { props.handleDeleteQuestion(qIndex) }}
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
          <MenuItem primaryText='View JSON' onClick={props.handleOpen} />
          <MenuItem primaryText='Delete Survey' onClick={props.handleDeleteSurvey} />
        </IconMenu>
        <TextField
          value={props.survey.name}
          onChange={props.handleNameChange}
          style={{width: '85%'}} />
        {questions}
        <CardActions>
          <FlatButton label='Add Question' onClick={props.handleNewQuestion} />
        </CardActions>
      </Card>
    )
  } else {
    return <div className='editor' />
  }
}

SurveyEditor.propTypes = {
  survey: PropTypes.object,
  editing: PropTypes.bool,
  handleNameChange: PropTypes.func,
  handleNewQuestion: PropTypes.func,
  handleDeleteSurvey: PropTypes.func,
  handleOpen: PropTypes.func
}

export default SurveyEditor
