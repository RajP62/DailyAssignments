import Style from "styled-components";

const OfferDiv = Style.div`
background: url(${props=>props.imgLink}) no-repeat center;
height: 300px;
text-align: center;
`;

export default ({imgLink, coupon, sectionName})=>{

    return <> 
    <OfferDiv imgLink={imgLink} coupon={coupon} sectionName={sectionName}>
    <h1>Use coupon #{coupon} to get extra discount in {sectionName} Section</h1>
    </OfferDiv>
    
    </>
}
// And i have modularised the whole code and wrote clean code as mentioned in the assignment