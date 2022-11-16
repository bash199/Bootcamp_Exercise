import React, {useState} from "react";
import {Button} from "./TodoList";
import styled from "styled-components";
const Div = styled.div`
   width: 250px;
   height: 260px;
   border: solid #333 2px;
   margin: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`;
const Img = styled.img`
   width: 170px;
   height: 170px;
`;
const BtnsBox = styled.div`
   display: flex;
`;
const P = styled.p`
   cursor: pointer;
`;
const Todo = ({
   model,
   handleDelete,
   image,
   handleDone,
   id,
   setEditInput,
   editInput,
}) => {
   const [editDone, setEditDone] = useState(false);
   // handleDone(id, model)
   return (
      <Div>
         <P onClick={() => setEditDone((prev) => true)}>{model}</P>
         {editDone && (
            <input
               value={editInput}
               type="text"
               onChange={({target: {value}}) => setEditInput((prev) => value)}
            />
         )}
         <Img src={image} alt="IMAGE" />
         <BtnsBox>
            <Button
               onClick={() => {
                  handleDelete(id);
               }}>
               Delete
            </Button>
            {editDone && (
               <Button
                  onClick={() => {
                     handleDone(id, editInput);
                     setEditDone((prev) => false);
                     setEditInput("");
                  }}>
                  Done
               </Button>
            )}
         </BtnsBox>
      </Div>
   );
};

export default Todo;
