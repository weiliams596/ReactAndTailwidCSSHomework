import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LifeTest from './Pages/LifeTest';

export default function ClassTest() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('MOUNT');
        const timer = setInterval(() => {
            setCount(count+1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('UNMOUNT');
        };
    },[]);

    useEffect(()=>{
        console.log('COUNT CHANGED', count);
    },[count]);
  return (
    <div>
        <h1>React lifecycle</h1>
        <p> {count}</p>
        <Link to="/"><button>Go back</button></Link>
        <LifeTest/>
    </div>
  )
}
