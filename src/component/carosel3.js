


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel1 extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png"width={100}  height={300}/>
                    A Vitamin C-rich layering serum                
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/1vdRezQzRhK1SVXTnLqVi9/8a01f173136cea10bae5cd6db7f1a6d2/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Medium-704x374px.png" width={100} height={300} />
                    Embracing, vitamin-rich hydration
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/3UAKC6yH3BYxQev4acOFFT/fbb59b494750cea8213461af9846686d/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-medium.png" width={100} height={300}/>
                    A Vitamin C-rich layering serum  
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/1vdRezQzRhK1SVXTnLqVi9/8a01f173136cea10bae5cd6db7f1a6d2/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Medium-704x374px.png" width={100} height={300} />
                    Embracing, vitamin-rich hydration
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/01laTaIShnTooDZD1MhA5r/3e326d7aca06bef11fd4420ee54345f5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.png" width={100} height={300}/>
                    A Vitamin C-rich layering serum  
                </div>
            </Carousel>
        );
    }
} 
export default DemoCarousel1