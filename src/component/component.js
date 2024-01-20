import App from "./carosel"
import AutoCarousel from "./carosel"
import Carousel from "./carosel"
import Carosel from "./carosel"
import DemoCarousel from "./carosel2"
import HoverableCarousel from "./carosel2"
import DemoCarousel1 from "./carosel3"
import Eigth from "./eigth"
import Five from "./five"
import Footer from "./footer"
import Four from "./four"
import Head from "./head"
import Navbar from "./navbar"
import Second from "./second"
import Seven from "./seven"
import Six from "./six"
import Third from "./third"

  
  const Component=()=>{
    return (
        <>
        <h4 style={{backgroundColor:"chocolate",color:"black"}}> Trained Aesop consultants are available to provide bespoke skin care advice.<a href="">Book a complimentary video consultation</a></h4>
        <h4 style={{backgroundColor:"black",color:"white",height:"50px"}}>Click and Collect is now available in Hong Kong. Complimentary shipping over $400.</h4>
       <Navbar/>

       <AutoCarousel/>
       <br/>    <br/>    <br/>
       <DemoCarousel/>
       <br/>    <br/>    <br/>
       <Head/>
       <br/>    <br/>    <br/>
       <Second/>
       <br/>    <br/>    <br/>
       <Third/>
       <br/>    <br/>    <br/>
        <DemoCarousel1/>
        <br/>    <br/>    <br/>
       <Four/>
       <br/>    <br/>    <br/>
       <Five/>
       <br/>    <br/>    <br/>
       <Six/>
       <br/>    <br/>    <br/>
<Seven/>
<br/>    <br/>    <br/>
<Eigth/>
<br/>    <br/>    <br/>
<Footer/>


        </>
    )
  }
  export default Component