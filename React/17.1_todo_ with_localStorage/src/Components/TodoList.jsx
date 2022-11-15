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
const TodoList = ({setListOfTodos, listOfTodos, inpt, setInpt}) => {
   const handleAdd = () => {
      if (inpt) {
         setListOfTodos((prevVal) => {
            return [
               ...prevVal,
               {
                  text: inpt,
                  done: false,
               },
            ];
         });
         setInpt("");
      }
   };
   const handleDone = (index) => {
      setListOfTodos((prevVal) => {
         return prevVal.map((task, mapIndex) =>
            mapIndex == index ? {...task, done: !task.done} : task
         );
      });
   };
   const insertTasks = () => {
      return listOfTodos.map((item, i) => {
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
      setListOfTodos(
         listOfTodos.filter((item, index) => {
            return index !== indexOfCurrentClickedTask;
         })
      );
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
