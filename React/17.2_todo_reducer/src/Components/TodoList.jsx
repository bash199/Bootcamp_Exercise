import Todo from "./Todo";
import TodoTitle from "./TodoTitle";
import styled from "styled-components";
export const Button = styled.button`
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
}) => {
   const handleAdd = () => {
      if (inpt) {
         dispatch({type: addtextOfTask, payload: {text: inpt, done: false}});
         setInpt("");
      }
   };
   const handleDone = (index, done, inpt) => {
      dispatch({
         type: changeDone,
         payload: {text: inpt, done: !done, index: index},
      });
   };
   const insertTasks = () => {
      return listOfTasks.map((item, i) => {
         return (
            <Todo
               index={i}
               done={item.done}
               handleDone={handleDone}
               handleDelete={handleDelete}
               text={item.text}
               key={item.text + i}>
               item.text
            </Todo>
         );
      });
   };
   const handleDelete = (indexOfCurrentClickedTask) => {
      dispatch({type: "filterListOfTasks", index: indexOfCurrentClickedTask});
   };
   return (
      <div>
         <TodoTitle />
         <input
            value={inpt}
            onChange={({target}) => {
               setInpt(target.value);
            }}
            type="text"
            placeholder="Add Todo"
         />
         <Button onClick={handleAdd}>Add Task</Button>
         {insertTasks()}
      </div>
   );
};

export default TodoList;
