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
      currentNote: {
        id: null,
        title: '',
        body: '',
      }
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  render() {
    return (
      <div className="App">
        <Main
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          setCurrentNote={this.setCurrentNote}
        />
      </div>
    );
  }
}

export default App