import React, {Component} from "react";

class Time extends Component {
   state = {seconds: 60};
   bla = () => {
      setTimeout(() => {
         this.setState((prev) => {
            return {seconds: prev.seconds - 0.5};
         });
      }, 1000);
   };

   render() {
      return (
         <div>
            {/* {this.bla()} */}
            <input
               value={this.state.seconds}
               type="number"
               min={1}
               onChange={({target: {value}}) => {
                  this.setState((prev) => {
                     return {seconds: value};
                  });
               }}
            />
            <input
               value={this.state.seconds / 60}
               type="number"
               min={1}
               onChange={({target: {value}}) => {
                  this.setState((prev) => {
                     return {seconds: value};
                  });
               }}
            />
            <input
               value={this.state.seconds / 3600}
               type="number"
               min={1}
               onChange={({target: {value}}) => {
                  this.setState((prev) => {
                     return {seconds: value};
                  });
               }}
            />
         </div>
      );
   }
}

export default Time;
