import React, {useContext, useState} from "react";
import {useEffect} from "react";
import {ctx} from "../../App";
import ListItem from "./ListItem";
const Blabla = () => {
   const {state} = useContext(ctx);
   const [list, setList] = useState(state);
   useEffect(() => {
      setList(state)
   }, [state]);
   return (
      <div>
         {list.map((e) => {
            return <ListItem key={e} itemData={e} />;
         })}
      </div>
   );
};

export default Blabla;
