import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
    return (
        <div className = 'Main'>
            <Sidebar />
            <NoteList notes={props.notes} changeSelectedNote={props.changeSelectedNote}/>
            <NoteForm changeSelectedNote={props.changeSelectedNote}/>
        </div>  
    )
}
export default Main