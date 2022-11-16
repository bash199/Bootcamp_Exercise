import Todo from "./Todo";
import React, {useState} from "react";
import TodoTitle from "./TodoTitle";
import styled from "styled-components";
import {Spinner} from "./Spinner";
import axios from "axios";
const MainDiv = styled.div`
   width: 100%;
`;
const Div = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;
const HeaderBox = styled.div`
   width: 100%;
   background: orange;
   padding: 10px;
`;
export const Button = styled.button`
   width: fit-content;
   margin: 0px 5px;
   background: whitesmoke;
   border: 1px solid white;
   color: teal;
   border-radius: 2px;
   cursor: pointer;
`;
const TodoList = ({
   listOfTasks,
   inpt,
   dispatch,
   addtextOfTask,
   setInpt,
   changeDone,
   isLoading,
   setIsLoading,
   setInptImg,
   inptImg,
   filterListOfTasks,
}) => {
   const [editInput, setEditInput] = useState("");
   const handleAdd = async (inpt, inptImg) => {
      try {
         if (inpt && inptImg) {
            setIsLoading((prev) => !prev);
            const {
               data: {image, model, id},
            } = await axios.post(
               "https://6374dcec48dfab73a4eb2b23.mockapi.io/vehicles",
               {
                  model: inpt,
                  image: inptImg,
               }
            );
            dispatch({
               type: addtextOfTask,
               payload: {model: model, image: image, id: id},
            });
            setInpt("");
            setInptImg("");
            setIsLoading((prev) => !prev);
         }
      } catch (err) {
         console.log(err);
      }
   };
   const handleDone = async (afterid, editedInput) => {
      if (editedInput) {
         try {
            const {
               data: {image, model, id},
            } = await axios.put(
               `https://6374dcec48dfab73a4eb2b23.mockapi.io/vehicles/${afterid}`,
               {model: editedInput}
            );
            dispatch({
               type: changeDone,
               payload: {model: model, id: id, image: image},
            });
         } catch (err) {
            console.log(err);
         }
      }
   };
   const insertTasks = () => {
      return listOfTasks.map(({model, image, id}) => {
         return (
            <Todo
               id={id}
               image={image}
               handleDone={handleDone}
               handleDelete={handleDelete}
               model={model}
               key={id}
               setEditInput={setEditInput}
               editInput={editInput}>
               model
            </Todo>
         );
      });
   };
   const handleDelete = async (id) => {
      try {
         const {data} = await axios.delete(
            `https://6374dcec48dfab73a4eb2b23.mockapi.io/vehicles/${id}`
         );
         dispatch({type: filterListOfTasks, id: data.id});
      } catch (err) {
         console.log(err.message);
      }
   };
   return (
      <MainDiv>
         <HeaderBox>
            <TodoTitle />
            <input
               value={inpt}
               onChange={({target}) => {
                  setInpt(target.value);
               }}
               type="text"
               placeholder="Add Model"
            />
            <input
               value={inptImg}
               onChange={({target}) => {
                  setInptImg(target.value);
               }}
               type="text"
               placeholder="Add Image"
            />
            <Button onClick={() => handleAdd(inpt, inptImg)}>
               Add vehicle
            </Button>
         </HeaderBox>
         {isLoading && <Spinner />}
         {!isLoading && <Div>{insertTasks()}</Div>}
      </MainDiv>
   );
};

export default TodoList;
