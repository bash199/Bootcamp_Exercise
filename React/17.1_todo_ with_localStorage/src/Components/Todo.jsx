import React from "react";

const Todo = ({text, filterListOfTodos}) => {
   return (
      <div style={{marginTop: "10px"}}>
         <input type="checkBox" />
         <p style={{display: "inline-block", margin: "0 15px 0 5px"}}>
            - {text}
         </p>
         <button
            onClick={() => {
               filterListOfTodos(text);
            }}>
            Delete
         </button>
      </div>
   );
};

export default Todo;
