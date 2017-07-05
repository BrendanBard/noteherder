import React, { Component } from 'react'

import './NoteForm.css'
class NoteForm extends Component {
    // activeNote(title, body){
    //     const t = document.getElementById('title')
    //     const b = document.getElementById('body')
    //     b.value = body
    //     t.value = title
    // }
    render(props) {
        return (
            <div className="NoteForm">
                <div className="form-actions">
                    <button id='delete' type="button"><i className="fa fa-trash-o" ></i>
                    </button>
                </div>
                <form>
                    <p>
                        <input id='title' type="text" name="title" placeholder="Title your note" />
                    </p>

                    <textarea id='body' name="body" ></textarea>
                </form>
            </div>
        )
    }
}

export default NoteForm