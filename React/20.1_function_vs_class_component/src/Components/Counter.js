import {Component} from "react";
import "./Counter.css";

class Counter extends Component {
   state = {count: this.props.num};
   increment = () => {
      this.setState((prev) => {
         return {count: prev.count + 1};
      });
   };
   decrement = () => {
      this.setState((prev) => {
         return {count: prev.count - 1};
      });
   };
   render() {
      return (
         <div className="Counter">
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <div>{this.state.count}</div>
         </div>
      );
   }
}

export default Counter;
