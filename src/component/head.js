import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Head=()=>{
    return(
        <>
         
            <div className={styl.flexcontainer} style={{fontSize:"16px"}}>
             <div className={style.flexleft}><img src="https://www.aesop.com/u1nb1km7t5q7/6P8C5RW1wmFCchDrWBshjp/b1cc91da2597bb9a613dac7a1b5a1636/Aesop_A_Guide_to_Caring_for_Dry_Skin_Web_Secondary_Mid_05_Desktop_2560x1440px.jpg"  width="100%" height="500px"/></div>
             <div className={stylee.flexright}>
                <p>The Athenaeum</p>
                
                <h3> A guide to caring fir dry skin</h3>
               Exploring the Causes behind parced skin and formulation to restore hydreation
               <br/>  <br/>
               <button style={{width:"250px"}}>  Read more         </button>
               </div>
              </div>
        </>
    )
}
export default Head