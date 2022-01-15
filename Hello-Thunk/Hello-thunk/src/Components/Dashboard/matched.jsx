import GhUserCard from "./ghUserCard";
import Style from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const DivContainer = Style.div`
display: grid;
grid-template-columns: repeat(4, 20%);
gap: 5%;
`;

export default ({data,setPage, showGhUsers, name, page})=>{
    return <>
    <DivContainer>
    {data.items.map(el=><GhUserCard data = {el}/>)}

    </DivContainer>
    {data.items.length>=1? <AiOutlineArrowLeft onClick={()=>{setPage(prev=>prev===1? prev : prev-1 ); showGhUsers(name,page)}} style={{fontSize: "30px",marginTop: "10px", cursor: "pointer"}}/> : null}
    {data.items.length>=1? <AiOutlineArrowRight onClick={()=>{setPage(prev=>prev+1); showGhUsers(name,page)}} style={{fontSize: "30px", marginTop: "10px", cursor: "pointer"}}/> : null}
    
    </>
}