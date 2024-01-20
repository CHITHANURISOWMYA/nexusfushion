
import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Five=()=>{
    return(
        <>
         
            <div className={styl.flexcontainer}>
             <div className={style.flexrigth}>
             
                
                <h3> Store locator</h3>
                Our consultants are available to host you in-store and provide tailored guidance on gift purchases. 
               <br/>  <br/>
               <button style={{width:"250px"}}> Find a near store      </button>

             </div>
             <div className={stylee.flexleft}>
             <img src="https://www.aesop.com/u1nb1km7t5q7/eyd7TwhtFoPcMMtmiYUYV/fcba6f1a9329b7cd9721e9b2c04feb71/Aesop_A_Guide_to_Fragrance_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg"  width="100%" height="500px"/>
               </div>
              </div>
        </>
    )
}
export default Five