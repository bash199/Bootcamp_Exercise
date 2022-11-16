import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";
import {Routes, Route, Link, useParams} from "react-router-dom";
import TodoList from "./TodoList";
import styled from "styled-components";

const Div = styled.div`
   color: wheat;
   width: 100%;
   display: flex;
   justify-content: center;
   text-align: center;
   height: 100vh;
`;

const ACTIONS = {
   HANDLEADD: "handleAdd",
   CHANGEDONE: "changeDone",
   FILTERLISTOFTASKS: "filterListOfTasks",
};
const reducer = (listOfTasks, action) => {
   setToLocalStorage(listOfTasks);
   switch (action.type) {
      case ACTIONS.HANDLEADD:
         return [...listOfTasks, newTask(action.payload)];
      case ACTIONS.FILTERLISTOFTASKS:
         return listOfTasks.filter(({id}) => {
            return id !== action.id;
         });
      case ACTIONS.CHANGEDONE:
         return listOfTasks.map((element) =>
            element.id !== action.payload.id ? element : newTask(action.payload)
         );
      case "setInit":
         return action.payload;
      default:
         return listOfTasks;
   }
};

const newTask = ({model, image, id}) => {
   return {model: model, image: image, id: id};
};
const setToLocalStorage = (arr) => {
   const dataToLS = JSON.stringify(arr);
   localStorage.setItem("listOfTasks", dataToLS);
};
const App = () => {
   const [inpt, setInpt] = useState("");
   const [inptImg, setInptImg] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [listOfTasks, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.listOfTasks) ?? []
   );

   useEffect(() => {
      try {
         const fetchData = async () => {
            setIsLoading((prev) => !prev);
            const {data} = await axios.get(
               "https://6374dcec48dfab73a4eb2b23.mockapi.io/vehicles"
            );
            setToLocalStorage(data);
            setIsLoading((prev) => !prev);
         };
         fetchData();
      } catch (err) {
         console.log(err);
      }
   }, [listOfTasks]);

   return (
      <Div>
         <TodoList
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            dispatch={dispatch}
            listOfTasks={listOfTasks}
            addtextOfTask={ACTIONS.HANDLEADD}
            changeDone={ACTIONS.CHANGEDONE}
            inpt={inpt}
            setInpt={setInpt}
            setInptImg={setInptImg}
            inptImg={inptImg}
            filterListOfTasks={ACTIONS.FILTERLISTOFTASKS}
         />
      </Div>
   );
};

export default App;
