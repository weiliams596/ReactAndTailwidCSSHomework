import React, { useReducer } from "react";


const ChangeColor = (state,action)=>{
  // switch(action.type){
  //   case "white":
  //     return {
  //       ...state,
  //       color: "white"
  //     };
  //   case "black":
  //     return {
  //       ...state,
  //       color: "black"
  //     };
  //     case "blue":
  //       return {
  //       ...state,
  //        color: "blue"
  //       };
  //   default:
  //     return state;
  // }
  return {...state,color:action.type};
};

export default function Homework() {
  const [state, dispatch] = useReducer(ChangeColor, {color: "white"});
  return <div>
    <h1>Homework</h1>
    <p>This is the homework for week 31 day 1</p>
    <button onClick={()=>dispatch({type:"white"})}>Change to White</button>
    <button onClick={()=>dispatch({type:"black"})}>Change to Black</button>
    <button onClick={()=>dispatch({type:"blue"})}>Change to Blue</button>
    <div id="colorchanger" style={{backgroundColor:state.color}}></div>
  </div>;
}
