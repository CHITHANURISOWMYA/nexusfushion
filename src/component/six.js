import  styl from "./heading.module.css"
import  style from "./heading.module.css"
import  stylee from "./heading.module.css"

const Six=()=>{
    return(
        <>
         
            <div className={styl.flexcontainer}>
             <div className={style.flexleft}><img src="https://www.aesop.com/u1nb1km7t5q7/42B1XVC211ivzeEyQ3ZmjB/0cf1fc8119933c67ba6f946e7be6f2d0/Aesop-Generic-Images-Facial-Appointments-1-Mid-Tablet-1400x788px.jpg"  width="100%" height="500px"/></div>
             <div className={stylee.flexright}>
                <p>Facial Appointments</p>
                
                <h3>Composure for the skin and senses</h3>
                For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.
               <br/>  <br/>
               <button style={{width:"250px"}}>  Learn more        </button>
               </div>
              </div>
        </>
    )
}
export default Six