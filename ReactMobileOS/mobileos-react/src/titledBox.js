import React from "react";
import Heading from './heading';
import List from './list'

export default function({title,lists}){
    return <>
    {console.log(title,lists)}
    <Heading title={title}/>
    <ul>
    {lists.map((el)=>{
        // console.log(index)
        return <List key={el.title}  title={el.title} style={el.style}/>}
    )}
    </ul>
    </>

}