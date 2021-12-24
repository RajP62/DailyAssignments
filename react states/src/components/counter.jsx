import {useState} from 'react'

export default function({initial}){
    const [counter, changeCounter] = useState(initial);
    const changeTheCount = (value)=>{
      if(value>1){
        changeCounter((v)=>v*value)
      }
      else{
        changeCounter((v)=>v+=value);
      }
    }
  return <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={()=>{changeTheCount(1)}}>Add</button>
    <button onClick={()=>{changeTheCount(-1)}}>Reduce</button>
    <button onClick={()=>{changeTheCount(2)}}>Double</button>
  </>
}