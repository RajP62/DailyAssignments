import React from "react";

export default function({title,style}){
    console.log(style)
    return <li style={{
        listStyleType: `${style}`
    }}>{title}</li>
}