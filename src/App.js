import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Lazarus did Bangladesh',
          body: '81 million',
        },
        'note-2': {
          id: 'note-2',
          title: 'PETYA dogs',
          body: 'Hey, look at that .bat flying around!',
        },
      },
      currentNote: this.blankNote(),
       
      
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  render() {

    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
    }
    const noteData = {
      notes: this.state.notes,
      currentNote:this.state.currentNote,
    }

    return (
      <div className="App">
        <Main
          {...noteData}
         {...actions}
        />
      </div>
    );
  }
}

export default App