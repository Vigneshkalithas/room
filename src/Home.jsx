import React, { useState } from "react";
import image1 from "./images/desktop-image-hero-1.jpg";
import image2 from "./images/desktop-image-hero-2.jpg";
import image3 from "./images/desktop-image-hero-3.jpg";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import bottomLeft from "./images/image-about-dark.jpg";
import bottomRight from "./images/image-about-light.jpg";
import { FaBars } from "react-icons/fa";
function Home() {
  const [open, setOpen] = useState(false)
  const Images = [ image1, image2, image3];

  var value = 0;

  function Right(){
    value = value+1 
    if(value==0 || value==1 || value==2){
      document.getElementById("imageContent").style.backgroundImage=`url(${Images[value]})`;
    }
    if(value>=3){
      value=0;
      document.getElementById("imageContent").style.backgroundImage=`url(${Images[value]})`;
    }
    
 
  }
  function Left(){
   
    if(value==0 || value==1 || value==2){
      value = value - 1;
      document.getElementById("imageContent").style.backgroundImage=`url(${Images[value]})`;
      console.log(value)
    }
    if(value<0){
     value = 2;
     document.getElementById("imageContent").style.backgroundImage=`url(${Images[value]})`;
}
   
}



  return (
    <>
      <div className="conntainer">
        <div className="top">
          <div className="left">
            <div className="image-head" id="imageContent"></div>
            <div className="nav">
              <ul className="desktop-ul">
                <li>
                  <h2>Room</h2>
                </li>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <div className="bar" onClick={() => {
          setOpen(!open)
        }}>
                <FaBars/>
              </div>
            </div>
            {open ? <div className="nav-small">
            <ul className="mobile-ul">
                <li>
                  <h2>Room</h2>
                </li>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div> : ""}
          </div>

          <div className="right">
            <div className="content">
              <h1>
                Discover innovative <br /> ways to deserve
              </h1>
              <p>
                We provide unmatched quality, comfort, and style for property
                <br />
                owners across the country. Our experts combine form and
                <br />
                function in bringing your vision to life. Create a room in your
                <br />
                own style with our collection and make your property a<br />
                reflection of you and what you love.
              </p>
              <button className="btn-shop-now">SHOP NOW</button>
            </div>

            <div className="btn-move-head">
              <button onClick={Left}>
                <MdArrowBackIosNew />
              </button>
              <button onClick={Right}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-right">
            <img src={bottomLeft} alt="bottom-images" />
          </div>
          <div className="bottom-center">
            <div className="classs">
              <h4>ABOUT OUR FURNITURE</h4>
              <p>
                Our multifunctional collection blends design and function to
                suit your individual taste.Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
          </div>
          <div className="bottom-left">
            <img src={bottomRight} alt="bottom-images" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
