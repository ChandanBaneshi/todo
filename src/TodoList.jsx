import React from 'react'
import './App.css'

export const TodoList = (props) => {


  return (
    <>
    <div className='todo_style'>
        
    <h2 > 
      <i className ="fa-solid fa-circle-xmark" 
      aria-hidden= "true"
       style={{color: "red"}}
      onClick = {()=>{
        props.onSelect(props.id);
      }}
    /></h2>
    {/* < i class = "FontAwesomeIcon icon=fa-solid fa-circle-xmark" /> */}

    

     <li>{props.text}</li>
     </div>
     </>
  )
};

export default TodoList;
