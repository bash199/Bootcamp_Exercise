import React, {useState, useEffect, useReducer} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
import TodoList from "./TodoList";
import styled from "styled-components";
const Div = styled.div`
   background: #008080;
   color: wheat;
   width: 100%;
   height: 100vh;
`;
const ACTIONS = {
   HANDLEADD: "handleAdd",
   FILTERARR: "filterListOfTasks",
   CHANGEDONE: "changeDone",
};
const reducer = (listOfTasks, action) => {
   console.log(action.type);
   switch (action.type) {
      case ACTIONS.HANDLEADD:
         return [...listOfTasks, newTask(action.payload)];
      case ACTIONS.FILTERARR:
         return listOfTasks.filter((el, index) => {
            return index !== action.index;
         });
      case ACTIONS.CHANGEDONE:
         return listOfTasks.map((task, mapIndex) =>
            mapIndex !== action.payload.index ? task : newTask(action.payload)
         );
      default:
         return listOfTasks;
   }
};
const newTask = (task) => {
   return {text: task.text, done: task.done};
};

const App = () => {
   const [inpt, setInpt] = useState("");
   const [listOfTasks, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("listOfTasks")) ?? []
   );

   useEffect(() => {
      const dataToLS = JSON.stringify(listOfTasks);
      localStorage.setItem("listOfTasks", dataToLS);
   }, [listOfTasks]);

   return (
      <Div>
         <center>
            <TodoList
               dispatch={dispatch}
               listOfTasks={listOfTasks}
               addtextOfTask={ACTIONS.HANDLEADD}
               changeDone={ACTIONS.CHANGEDONE}
               inpt={inpt}
               setInpt={setInpt}
            />
         </center>
      </Div>
   );
};

export default App;
