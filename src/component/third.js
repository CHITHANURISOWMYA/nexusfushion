

import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Third=()=>{
    return(
        <>
         
            <div className={styl.flexcontainer}style={{fontSize:"16px"}}>
             <div className={style.flexleft}><img src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg"  width="100%" height="500px"/></div>
             <div className={stylee.flexright}>
               
                
                <h3> Efficacious pairings</h3>
              Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.
               <br/>  <br/>
               <button style={{width:"250px"}}>  Read more         </button>
               </div>
              </div>
        </>
    )
}
export default Third