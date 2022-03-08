import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Banner from '../pages/Banner';
import image1 from '../../img/1.jpg'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'
import image4 from '../../img/4.jpg'

    const About = () =>{
  return (
<div className="container">
<div className="py-4">
    <h1>About Page</h1>
    <Banner />
    <p className="lead">
    orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque risus. 
    Cras nec nisl a ex tristique dictum. Quisque commodo ultricies risus quis accumsan.
     Donec blandit eleifend purus, a tincidunt neque. Fusce consequat dolor ligula, id cursus neque porta nec.
      Nulla eget libero ut est pellentesque eleifend vitae ut sapien. Nam malesuada neque vitae tristique convallis. 
      Donec iaculis dui sem, et efficitur lectus fringilla ut. Mauris sit amet luctus felis.
       Etiam sodales, ante scelerisque mollis varius, velit purus tempor dolor, sed tempor massa nisl non felis.
     Praesent dignissim magna sed neque efficitur pulvina
    </p>
    <p className="lead">
    orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at scelerisque risus. 
    Cras nec nisl a ex tristique dictum. Quisque commodo ultricies risus quis accumsan.
     Donec blandit eleifend purus, a tincidunt neque. Fusce consequat dolor ligula, id cursus neque porta nec.
      Nulla eget libero ut est pellentesque eleifend vitae ut sapien. Nam malesuada neque vitae tristique convallis. 
      Donec iaculis dui sem, et efficitur lectus fringilla ut. Mauris sit amet luctus felis.
       Etiam sodales, ante scelerisque mollis varius, velit purus tempor dolor, sed tempor massa nisl non felis.
     Praesent dignissim magna sed neque efficitur pulvina
    </p>
</div>
</div>

  );
}

export default About; 