import Lottie from "lottie-react"
import animation1 from "../animations/29879-development-poky-heads.json"
const Header=() =>{
    return(<>
   

         <div class="container"/>
             <div class="row" >
    <div class="col">
    <Lottie animationData={animation1} loop={true} />;

    </div>
    <div class="col">
      Column
    </div>
    /</div>
    </>)
   }
   export default  Header;