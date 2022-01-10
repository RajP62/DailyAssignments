import {Navbar} from "../navbar/navbar"
import Offers from "../offers/offers"
import Footer from "../footer/footer"
import { Route, Routes} from "react-router-dom";
import Appearels from "../appearels/appearels";

export default ()=>{
    
    return <>
    <Navbar/>
    <Routes>
        <Route path="/appearels" element={<Offers imgLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSks0bLtfhB-QpuYvaXXDZa_yByzchfAyNpeQ&usqp=CAU"} coupon={`appearelsDisc`} sectionName={`Appearels`}/>}></Route>

        <Route path="/cases&covers" element={<Offers imgLink={"https://images.unsplash.com/photo-1535469145415-8e49c30eae75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzZXxlbnwwfHwwfHw%3D&w=1000&q=80"} coupon={`cases&covers@100`} sectionName={`Cases&Covers`}/>}></Route>

        <Route path="/mobile" element={<Offers imgLink={"https://i.gadgets360cdn.com/products/large/redmi-note-10s-db-600x800-1620030866.jpg"} coupon={`mobile@10k`} sectionName={`Mobiles`}/>}></Route>

        <Route path="/blu-ray" element={<Offers imgLink={"https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/SecondLast.jpg"} coupon={`protectEye-100`} sectionName={`Blue-Ray`}/>}></Route>

        <Route path="/computers" element={<Offers imgLink={"https://media.istockphoto.com/vectors/modern-computer-cartoon-vector-id862739386?k=20&m=862739386&s=170667a&w=0&h=q489NvaFLLZTyi1sDO3sOx7NSwaV577qETqZqo-ExyQ="} coupon={`getComputer30`} sectionName={`Computers`}/>}></Route>

        <Route path="/electronics" element={<Offers imgLink={"https://thumbs.dreamstime.com/z/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"} coupon={`electronicRock`} sectionName={`Electronics`}/>}></Route>

        <Route path="/faq" element={<h1>This is faq page</h1>}></Route>

        <Route path="/about" element={<h1>Welcome to the about section</h1>}></Route>

        <Route path="/contactus" element={<h1>This is contact us page</h1>}></Route>
    </Routes>
    <Footer/>
    </> 
}