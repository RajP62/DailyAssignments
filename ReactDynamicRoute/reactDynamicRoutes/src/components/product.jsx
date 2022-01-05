import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "styled-components";

const Li = Style.li`
color: white;
display:block;
`;

const ProductHolder = Style.div`
    background: black;
    display: grid;
    list-style: none;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

export default ()=>{
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:2000/allProducts/${id}`).then(data=>{
            console.log(`Product data is ${data}`)
            setProduct(data.data);
        })
    },[]);

    return <ProductHolder>
        <Li>Name is : {product.name}</Li>
        <Li>price is : {product.price}</Li>
        <Li>Id is : {product.id}</Li>
    </ProductHolder>
    
}