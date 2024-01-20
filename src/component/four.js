import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Four=()=>{
    return(
        <>
         
         <div className={styl.flexcontainer}>
             <div className={style.flexrigth}><img src="https://www.aesop.com/u1nb1km7t5q7/1puhwTy0xTMusHggeBve7y/0809fe2c17c678369df30d00274cece8/Aesop-Other-Digital-Gift-Card-medium1.png"  width="70%" height="200px"/></div>
             <div className={stylee.flexleft}>
               
                
                <h3> Eminently suited to all</h3>
                An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections. 
               <br/>  <br/>
               <button style={{width:"250px"}}>  Purchase    </button>
               </div>
              </div>
        </>
    )
}
export default Four