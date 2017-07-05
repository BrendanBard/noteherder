import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes:{
            'note-1': {
                id: 'note-1',
                title: 'PETYA Dogs',
                body: 'check this sweet .bat flying around'
            },
            'note-2': {
                id: 'note-2',
                title: 'Lazurus did bangladesh',
                body: '81 million',
            },
      },
      noteStatus:{
        selectedTitle: '',
        selectedBody: ''
      }

    }
  }
  selectedNote = (title, body) => {
    const newState = {...this.state}
    newState.noteStatus.selectedTitle = title
    newState.noteStatus.selectedBody = body
    const t = document.getElementById('title')
    const b = document.getElementById('body')
    this.setState(newState, () =>   
    t.value = newState.noteStatus.selectedTitle,
    b.value = newState.noteStatus.selectedBody
     );
  }
  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} changeSelectedNote={this.selectedNote}/>
      </div>
    );
  }
}

export default App;