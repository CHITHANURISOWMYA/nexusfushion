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
        <div  className={styl.flexcontainerrss} style={{fontSize:"16px"}} >
        <div  className={style1.flex11}>
            Orders and support
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>

            About <hr/>
            our story <br/>
            Foundation <br/>
            Careers <br/>
            private policy <br/>
            Accessibility <br/>
            Cookies policy  <br/>
        </div> 

        <div className={style2.flex22}>
            Services
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>
           Social Media
            <hr/>
            Instagram<br/>
            Twitter <br/>
            LinkedIn <br/>
            Wechat <br/>
            Weibo <br/>

        </div>

        <div className={style3.flex33}>
            Location 
            <hr/>
            contact us <br/>
            FAQs <br/>
            Shippings <br/>
            Returns <br/>
            Order histroy  <br/>
            Sustainability
            <hr/>
            All Aseop products are vegan <br/>
            and we do not test our formula or ingredients on animals <br/>
            Learn More<br/>
     
        </div>
        </div>
       </div>
        
        
        
        
        
        </>
    )
}
export default Footer