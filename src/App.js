import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

    const listOfItems = () => {
    setItems((oldItem)=>{
      return [...oldItem , inputList]
      })
    setInputList('')
  };
  const deleteItems =(id)=>{
      setItems ((oldItem)=>{
        return oldItem.filter((arrElem, index)=>{
          return index !==id;
        });
      });
  };

 return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="add a item" onChange={itemEvent} value ={inputList} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {items.map((itemval, index) => {
               return <TodoList 
               id = {index}
               key = {index}
               text = {itemval}
               onSelect = {deleteItems}  
               />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
