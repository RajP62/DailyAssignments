import Style from "styled-components";

const DivCard = Style.div`
display: grid;
color: white;
border: 2px solid black;
background-color: black;
`;

export default ({data})=>{
    return <>
    <DivCard>
        <img style={{width: "100%"}} src={data.avatar_url}></img>
        <h1 style={{display: "block"}}>Username : {data.login}</h1>
    </DivCard>
    </>
}