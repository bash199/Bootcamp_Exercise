import Todo from "./Todo";
const TodoList = ({setListOfTodos, listOfTodos, inpt, setInpt}) => {
   const addTodo = () => {
      if (inpt) {
         setListOfTodos((prevVal) => {
            return [
               ...prevVal,
               {
                  text: inpt,
               },
            ];
         });
         setInpt("");
      }
   };
   const insertTodos = () => {
      return listOfTodos.map((item) => {
         return (
            <Todo
               filterListOfTodos={filterListOfTodos}
               text={item.text}
               key={item.text}>
               item.text
            </Todo>
         );
      });
   };
   const filterListOfTodos = (textOfCurrentClickedTodo) => {
      setListOfTodos(
         listOfTodos.filter((item) => {
            return item.text !== textOfCurrentClickedTodo;
         })
      );
   };
   return (
      <div>
         <h1>TODO's</h1>
         <h4>Local Storage CRUD app</h4>
         <p>CRUD - Create Read Update Delte</p>
         <input
            value={inpt}
            onChange={({target}) => {
               setInpt(target.value);
            }}
            type="text"
            placeholder="Add Todo"
         />
         <button onClick={addTodo}>Add</button>
         {insertTodos()}
      </div>
   );
};

export default TodoList;
