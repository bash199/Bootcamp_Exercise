import React from "react";
import {Button} from "./TodoList";
const Todo = ({text, handleDelete, done, handleDone, index}) => {
   return (
      <div style={{marginTop: "10px"}}>
         <p
            onClick={() => handleDone(index, done, text)}
            style={{display: "inline-block", margin: "0 15px 0 5px"}}>
            {done ? <>&#x2713;</> : <>&#10005;</>}- {text}
         </p>
         <Button
            onClick={() => {
               handleDelete(index);
            }}>
            Delete
         </Button>
      </div>
   );
};

export default Todo;
