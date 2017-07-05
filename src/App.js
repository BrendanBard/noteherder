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
                title: 'help from app',
                body: 'me'
            },
            'note-2': {
                id: 'note-2',
                title: 'help2 from app',
                body: 'me2',
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