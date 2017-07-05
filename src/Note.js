import React from 'react'

const Note= (props) =>{
    const handleClick = () => {
        
    }
return(
    <a className="active" onClick={() => {
            props.changeSelectedNote(props.note.title, props.note.body)
            
        }}>
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