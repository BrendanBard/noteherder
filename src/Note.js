import React from 'react'

const Note= (props) =>{
    
return(
    <a href="/notes/note-1497983165049" className="active">
              <li>
                <div className="note">
                  {props.note.title}
                  <div className="note-body">
                   {props.note.body}
                  </div>
                </div>
              </li>
            </a>
)
}
export default Note