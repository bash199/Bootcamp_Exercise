import React, {useState, useEffect} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
import TodoList from "./TodoList";
const useLocalStorage = (storageKey, fallbackState) => {
   const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
   );

   useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
   }, [value, storageKey]);

   return [value, setValue];
};
const App = () => {
   const [listOfTodos, setListOfTodos] = useLocalStorage("data", []);
   const [inpt, setInpt] = useState("");

   return (
      <div>
         <center>
            <TodoList
               listOfTodos={listOfTodos}
               setListOfTodos={setListOfTodos}
               inpt={inpt}
               setInpt={setInpt}
            />
         </center>
      </div>
   );
};

export default App;
