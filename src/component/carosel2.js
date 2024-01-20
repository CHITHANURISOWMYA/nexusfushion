


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png" width={100}  height={400}/>
                    A Vitamin C-rich layering serum                
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/1vdRezQzRhK1SVXTnLqVi9/8a01f173136cea10bae5cd6db7f1a6d2/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Medium-704x374px.png" width={100} height={300} />
                    Embracing, vitamin-rich hydration
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png" width={100} height={300}/>
                    A Vitamin C-rich layering serum  
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/1vdRezQzRhK1SVXTnLqVi9/8a01f173136cea10bae5cd6db7f1a6d2/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Medium-704x374px.png" width={100} height={300} />
                    Embracing, vitamin-rich hydration
                </div>
                <div>
                    <img src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png" width={100} height={300}/>
                    A Vitamin C-rich layering serum  
                </div>
            </Carousel>
        );
    }
} 
export default DemoCarousel