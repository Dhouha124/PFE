import Navigation from "../components/navigation";
import { Outlet } from "react-router-dom";

const Navlayout=()=>{
return(
    <div>
    <Navigation/>
     <Outlet/>
    
    </div>
)
}

export default Navlayout;