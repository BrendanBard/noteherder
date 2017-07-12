import React, { Component } from 'react'
import RichTextEditor from 'react-rte'
import {Route, Switch} from 'react-router-dom'
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
      editorValue: RichTextEditor.createEmptyValue(),
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const idFromUrl = nextProps.match.params.id
    const note = nextProps.notes[idFromUrl] || this.blankNote()
    const noteNotFound = idFromUrl && !note.id
    if(idFromUrl && nextProps.fireBaseNotesSynced){
      this.props.history.push('/notes')
    }

    let editorValue = this.state.editorValue
    if (editorValue.toString('html') !== note.body) {
      editorValue = RichTextEditor.createValueFromString(note.body, 'html')
    }

    this.setState({ note, editorValue })
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
      time: '',
    }
  }
  getTime = () =>{
    var time = new Date().getTime()
    var date = new Date(time)
    return date.toDateString() +', ' +  date.getHours() +':' + date.getMinutes()
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    note.time = this.getTime()
    

    this.setState(
      { note },
      () => this.props.saveNote(note)
    )
  }

  handleEditorChanges = (editorValue) => {
    const note = {...this.state.note}
    note.body = editorValue.toString('html')
    
    this.setState(
      { note, editorValue },
      () => this.props.saveNote(note)
    )
    note.time = this.getTime()
  }

  handleRemove = () => {
    this.props.removeNote(this.state.note)
  }

  render() {
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={this.handleRemove}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>
          
          <RichTextEditor
            name="body"
            value={this.state.editorValue}
            onChange={this.handleEditorChanges}
          ></RichTextEditor>
        </form>
      </div>
    )
  }
}

export default NoteForm