import React from "react";
import {ReactComponent as DeleteIcon} from './assets/x.svg';
import {ReactComponent as DoneIcon} from './assets/check-circle-fill.svg';
import {ReactComponent as UndoneIcon} from './assets/check-circle.svg';
import "./input.scss";
function List(props) {
  let doneCounter=0;

 function DoneImg(props) {
     if (props.done) {
         return(
            <DoneIcon></DoneIcon>       
         );
     }else{

         return(
            <UndoneIcon></UndoneIcon>
         );
     }
 }

 function TextDone(props) {
  if (props.done) {
       return(
        <div className="text-decoration-line-through text-muted">
        {props.textObj}   
        </div>      
       );
   }else{
      return(
        <div>
        {props.textObj}   
        </div>  
       );
   }
 }
  return (
    <ul className="w-100 shadow-sm ps-0 mb-0  d-flex flex-column gap-1 overflow-auto" id="ulListObj">
      {props.items.map((item) => (      
        <li key={item.id} className=" d-flex align-content-center" id="listItem">
          <div className="container-fluid  d-flex align-items-center w-100 position-relative ">
          <button className="btn btnComponent align-self-start align-self-center ps-0" onClick={()=>{props.onDone(item)}}>
                <DoneImg done={item.done}></DoneImg>
          </button>

        <TextDone textObj={item.text} done={item.done}></TextDone>
         

            <button
              
              className="btn position-absolute end-0"
              onClick={() => {
                props.onItemDeleted(item)
              }}
            >
                <DeleteIcon></DeleteIcon>
            </button>
          </div>
        </li>

      ))}
      <div id="divRestCounter" className="container-fluid bg-white d-flex pt-1 position-sticky bottom-0 justify-content-between">
        {   
         props.items.forEach(element => {
           if (element.done) {
             doneCounter++;
           }
         })
        }
        <h6 >{props.items.length-doneCounter} item restantes</h6>
        <button onClick={()=>{
          props.onArrayItemsDeleted(props.items.filter((it)=>it.done));
        }}>Limpar concluidos</button>
      </div>
    </ul>
  );
}

export default List;
