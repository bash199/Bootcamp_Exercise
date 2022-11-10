import React, {useRef} from "react";
import "./App.css";
import Imgaes from "./Component/Imgaes";
import image1 from "./Component/Images/image1.jpeg";
import image2 from "./Component/Images/image2.jpeg";
import image3 from "./Component/Images/image3.jpeg";
import image4 from "./Component/Images/image4.jpeg";
import image5 from "./Component/Images/image5.webp";
import image6 from "./Component/Images/image6.jpeg";
import image1bw from "./Component/Images/BlackAndWihte1.jpeg";
import image2bw from "./Component/Images/BlackAndWihte2.jpeg";
import image3bw from "./Component/Images/image3-modified.jpeg";
import image4bw from "./Component/Images/imag4-modified.jpeg";
import image5bw from "./Component/Images/image5-modified.webp";
import image6bw from "./Component/Images/image6-modified.jpeg";
const App = () => {
   const getRef1 = useRef();
   const getRef2 = useRef();
   const getRef3 = useRef();
   const getRef4 = useRef();
   const getRef5 = useRef();
   const getRef6 = useRef();
   const hoverIn = (getRef, coloredImg) => {
      getRef.current.src = coloredImg;
   };
   const hoverOut = (getRef, img) => {
      getRef.current.src = img;
   };
   return (
      <div className="App">
         <header className="App-header">
            <Imgaes coloredImg={image1} getRef={getRef1} img={image1bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
            <Imgaes coloredImg={image2} getRef={getRef2} img={image2bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
            <Imgaes coloredImg={image3} getRef={getRef3} img={image3bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
            <Imgaes coloredImg={image4} getRef={getRef4} img={image4bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
            <Imgaes coloredImg={image5} getRef={getRef5} img={image5bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
            <Imgaes coloredImg={image6} getRef={getRef6} img={image6bw} hoverIn={hoverIn} hoverOut={hoverOut}></Imgaes>
         </header>
      </div>
   );
};

export default App;
