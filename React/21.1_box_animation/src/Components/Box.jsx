import React, {Component} from "react";
import styled from "styled-components";
const Div = styled.div`
   width: 100px;
   height: 100px;
   background: purple;
   position: relative;
   margin-bottom: 5px;
   left: 5px;
   animation: mymove 2s;
   @keyframes mymove {
      from {
         left: -100px;
      }
      to {
         left: 5px;
      }
   }
`;
const Div2 = styled.div`
   width: 130px;
   height: 130px;
   margin-bottom: 5px;
   background: purple;
   position: relative;
   left: 5px;
   animation: mymove 2s;
   @keyframes mymove {
      from {
         left: -130px;
      }
      to {
         left: 5px;
      }
   }
`;
const Div3 = styled.div`
   width: 70px;
   height: 70px;
   background: purple;
   position: relative;
   left: 5px;
   animation: mymove 2s;
   @keyframes mymove {
      from {
         left: -70px;
      }
      to {
         left: 5px;
      }
   }
`;
export class Box extends Component {
   state = {show: false};
   componentDidMount() {
      this.timerID = setTimeout(() => {
         this.setState((prev) => {
            return {show: true};
         });
      }, 1000);
      setTimeout(() => {
         this.setState((prev) => {
            return {show: false};
         });
      }, 5000);
   }

   render() {
      return (
         <div>
            Box
            {this.state.show && <Div />}
            {this.state.show && <Div2 />}
            {this.state.show && <Div3 />}
         </div>
      );
   }
}

export default Box;
