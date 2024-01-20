import styl from "./heading.module.css"
import style1 from "./heading.module.css"
import style2 from "./heading.module.css"
import style3 from "./heading.module.css"

const Footer=()=>{
    return(
        <>
       <div style={{width:"100%",backgroundColor:"black",color:"white"}}>
       <h6>Subscribe to Aesop communications</h6>
        <hr/>
       <button style={{width:"100%",backgroundColor:"black",color:"white"}}>Email address </button>
        <div  className={styl.flexcontainerrss} >
        <div  className={style1.flex11}>
            Orders and support
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>
        </div> 

        <div className={style2.flex22}>
            Services
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>
        </div>

        <div className={style3.flex33}>
            Location 
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>
        </div>
        </div>
       </div>
        
        
        
        
        
        </>
    )
}
export default Footer