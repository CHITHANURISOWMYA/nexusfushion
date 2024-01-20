
import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Second=()=>{
    return(
        <>
         
            <div className={styl.flexcontainer}>
             <div className={style.flexright}>
             <p>online only</p>
                
                <h3>Familiar fragrances,doubled in volume</h3>
              For those who feel that 50 milliliter just fly by too quickly ,three of our unorthodox eaux de parfum-tacit,Hwyl and Marrakech Intense -are now avaliable
               <br/>  <br/>
               <button style={{width:"250px"}}>  Discover now        </button>

             </div>
             <div className={stylee.flexleft}>
             <img src="https://www.aesop.com/u1nb1km7t5q7/eyd7TwhtFoPcMMtmiYUYV/fcba6f1a9329b7cd9721e9b2c04feb71/Aesop_A_Guide_to_Fragrance_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg"  width="100%" height="500px"/>
               </div>
              </div>
        </>
    )
}
export default Second