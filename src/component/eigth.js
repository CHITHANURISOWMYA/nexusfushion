 import styl from "./heading.module.css"
 import style1 from "./heading.module.css"
 import style2 from "./heading.module.css"
 import style3 from "./heading.module.css"


const Eigth=()=>{
    return(
        <>
         
            
         <div className={styl.flexcontainerrs}>
             <div className={style1.flex1}>
             <h6>Certified B Corp</h6>
We meet the highest verified standards of social and environmental performance, transparency and accountability.
             </div>

             <div className={style2.flex2}>
             <h6>Leaping Bunny approved</h6>
             Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.
             </div>

             <div className={style3.flex3}>
             <h6>PETA recognition</h6>
             We appear on PETA's internationally recognised vegan and cruelty-free list
             </div>
             
             
              </div>

        </>
    )
}
export default Eigth