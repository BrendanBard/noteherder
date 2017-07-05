import React from 'react'

const Note= (props) =>{
    const handleClick = () => {
        console.log('oh gawd y')
    }
return(
    <a  className="active" onClick={handleClick}>
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