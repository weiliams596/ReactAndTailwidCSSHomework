import React, { useContext } from 'react';
import Context from '../Components/Context';

export default function Shower() {
    const {state} = useContext(Context);
  return (
    <div>
      <h2>{state.text}</h2>
    </div>
  )
}
