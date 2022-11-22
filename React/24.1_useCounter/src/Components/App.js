import React, {useState} from "react";
import ChangeNumber from "./ChangeNumber";


export const useValue = (num) => {
   const [state, setState] = useState(num);
   const addOne = () => {
      setState(state + 1);
   };
   const removeOne = () => {
      setState(state - 1);
   };
   const double = () => {
      setState(state * 2);
   };
   const divide = () => {
      setState(state / 2);
   };
   return [state, addOne, removeOne, double, divide];
};

const App = () => {
   return (
      <div>
         <ChangeNumber />
      </div>
   );
};

export default App;
