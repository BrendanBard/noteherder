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
        }
    }
  }
  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
