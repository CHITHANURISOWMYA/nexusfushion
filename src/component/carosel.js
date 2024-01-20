

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sty from "./heading.module.css"

const AutoCarousel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.aesop.com/u1nb1km7t5q7/7dKHiPfPBsge1FkJ4umaFH/74fc4803ee1d2e9be84b401e0482c7f5/Aesop_B_Triple_C_2024_Web_Homepage_Primary_Full_Bleed_Tablet_1536x1230px.jpg"
          alt="First slide"
          width={200}
          height={400}
        />
        <Carousel.Caption className={sty.text}>
          <p>Potent and peerless
            <h4>B Triple C Facial Balancing Gel</h4>
Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.aesop.com/u1nb1km7t5q7/5uZeUNd83HTU8XVJSaKkXa/7c4f0dee74473257b53fef6a7cd3fe31/Aesop_Festive_Sleeve_Asia_Web_Homepage_Primary_50-50_Tablet_1536x950px.jpg"
          alt="Second slide"
          width={200}
          height={400}
        />
         <Carousel.Caption className={sty.text}>
          <p>Potent and peerless
            <h4>Joyous gift preparation</h4>
Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.aesop.com/u1nb1km7t5q7/8gLnhGeixIz9d94iuHi78/fadd7f6d1cd42b274ad2073273c1e9e5/Aesop_Lucent_2023_Web_Homepage_Primary_50-50_Tablet_1536x950px.jpg" 
          alt="Third slide"
          width={200}
          height={400}
        />
       <Carousel.Caption className={sty.text}>
          <p>Potent and peerless
            <h4>Joyous gift preparation</h4>
Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AutoCarousel;


   