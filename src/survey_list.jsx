import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Card from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

let SelectableList = makeSelectable(List)

const SurveyList = props => {
  let surveys = props.surveys.map((survey, index) => {
    return (
      <ListItem
        key={index}
        value={index}
        onClick={() => { props.startEdit(index) }}>
        {survey.name}
      </ListItem>
    )
  })
  let cardStyle = {
    width: '300px',
    float: 'left',
    margin: '20px'
  }
  let selection = props.editing ? props.index : null
  return (
    <Card style={cardStyle}>
      <SelectableList value={selection}>
        <FloatingActionButton
          onClick={props.handleNewSurvey}
          style={{float: 'right', 'marginRight': '20px'}}
          mini>
          <ContentAdd />
        </FloatingActionButton>
        <Subheader>Surveys</Subheader>
        {surveys}
      </SelectableList>
    </Card>
  )
}

SurveyList.propTypes = {
  surveys: PropTypes.array,
  index: PropTypes.number,
  editing: PropTypes.bool,
  handleNewSurvey: PropTypes.func
}

export default SurveyList
