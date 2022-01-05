import { useEffect, useState } from "react"
import axios from "axios";
import Style from "styled-components";
import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid"
const Li = Style.li`
color: white;
display:block;
`;

const ProductHolder = Style.div`
background: black;
margin-bottom: 10px;
display: flex;
justify-content: center;
`;
const Td = Style.td`
color: white;
`;

const Table = Style.table`
display: block;
margin: auto;
color: white;
`;

export default ()=>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2000/allProducts").then(data=>{
            console.log(data);
            setProducts(data.data);
        });
    },[]);
    return <>
    {products.map(el=>
    <ProductHolder key={uuidv4()}>
        <Table>
            <tfoot>
           <tr>
               <td>{el.name} | </td>
               <td>{el.price} | </td>
               <td><Link to={`/product/${el.id}`}>More Details</Link></td>
           </tr>
           </tfoot>
        </Table>
         </ProductHolder> 
        )}
    </>
}