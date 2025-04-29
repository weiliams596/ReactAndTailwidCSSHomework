import React, { useReducer, useState } from "react";

const initalization = {
  count: 0,
  type: "",
};

const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
    switch (action.type) {
        case "submit":
            return { name: state.name, email: state.email };
        default:
            return state;
    }
}

export default function CLassTest() {
  const [state, dispatch] = useReducer(reduce, { count: 0 });
  const [state2, dispatch2] = useReducer(reducer2, { name:'', email:'' });
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(name,email);
  }
  return (
    <div>
      <h1>Introduction to useReducer.</h1>
      <div className="count-number">
        <p>Count: {state.count}</p>
        <p>Type: {state.type}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <form style={{marginTop: '20px'}} onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <label htmlFor="name">Name2</label>
        <input type="text" id="name" name="name" onChange={(e)=>{state2.name=e.target.value}}/>
        <label htmlFor="email">Email2</label>
        <input type="email" id="email" name="email" onChange={(e)=>{state2.email = e.target.value}}/>
        <button onClick={(e)=>{e.preventDefault();dispatch2({type:'submit'})}} >Submit</button>
      </div>
    </div>
  );
}
