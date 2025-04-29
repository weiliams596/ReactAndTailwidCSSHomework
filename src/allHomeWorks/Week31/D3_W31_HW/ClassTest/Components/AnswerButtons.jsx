import React, { useContext } from 'react';
import AnswerContext from './AnswerContext';

export default function AnswerButtons() {
    const {dispatch} = useContext(AnswerContext);
  return (
    <div>
      <button onClick={() => dispatch({type: 'success'})}>Ok</button>
      <button onClick={() => dispatch({type: 'error'})}>Not Ok</button>
      <button onClick={() => dispatch({type: 'clear'})}>Claer</button>
    </div>
  )
}
