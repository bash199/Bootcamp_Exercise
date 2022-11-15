import React, {useState, useEffect} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
import TodoList from "./TodoList";
import styled from "styled-components";
const Div = styled.div`
   background:#008080;
   color: wheat;
   width: 100%;
   height: 100vh;

`;
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
      <Div>
         <center>
            <TodoList
               listOfTodos={listOfTodos}
               setListOfTodos={setListOfTodos}
               inpt={inpt}
               setInpt={setInpt}
            />
         </center>
      </Div>
   );
};

export default App;
