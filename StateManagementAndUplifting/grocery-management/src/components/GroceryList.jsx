// import React from 'react'
export default ({title,id, handleDeletion})=>{
    return <>
    <li>{title}</li>
    <button onClick={()=>{
        handleDeletion(id)
    }}>Delete Item</button>
    </>
}