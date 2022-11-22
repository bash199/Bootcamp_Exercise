import React, {Component} from "react";

class Todo extends Component {
   state = {
      listOfToDos: [
         {name: "CSS", completed: true},
         {name: "JavaScript", completed: true},
         {name: "Learn React", completed: false},
         {name: "Learn mongoDB", completed: false},
         {name: "Learn Node JS", completed: false},
      ],
   };

   inserTodos = () => {
      return this.state.listOfToDos.map((el, i) => {
         return (
            <p
               style={{textDecoration: el.completed ? "line-through" : "none"}}
               onClick={() => this.handleClick(i)}
               key={i}>
               {el.name} - {el.completed ? "V" : "X"}
            </p>
         );
      });
   };

   handleClick = (i) => {
      const changedComp = !this.state.listOfToDos[i].completed;
      this.setState((prev) => {
         return [
            ...prev.listOfToDos,
            (prev.listOfToDos[i] = {
               ...prev.listOfToDos[i],
               completed: changedComp,
            }),
         ];
      });
   };
   
   render() {
      return <div>{this.inserTodos()}</div>;
   }
}

export default Todo;