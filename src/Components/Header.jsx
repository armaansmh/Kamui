import React, {useState, useRef, useEffect} from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import gsap from "gsap";
import { Power4 } from "gsap/gsap-core";
import  TwitterIcon from "../Assets/twitter.svg"
import  DiscordIcon from "../Assets/discord.svg"
import CSSRulePlugin from "gsap/CSSRulePlugin";


gsap.registerPlugin(CSSRulePlugin);
const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);


  const blackBg = useRef(null)
  const image = useRef(null)

  useEffect(() => {
    const after = CSSRulePlugin.getRule('.img-container:after');
    const bganimation = gsap.fromTo(blackBg.current, {width: "0"}, {width: "50%", ease: Power4})
    const imagecontainerAnimation = gsap.fromTo(after, {width: "100%"}, {width: "0%"})
    const imageAnimation = gsap.fromTo(image.current, {scale: 2}, {scale: 1, ease: Power4.easeInOut});
    imagecontainerAnimation.duration(2)
    imagecontainerAnimation.delay(0.4)
    imageAnimation.duration(2)
    imageAnimation.delay(0.4)
    bganimation.duration(2)
    bganimation.delay(0.4)
  }, [])
  return (
    <div id="home" className="header">
      <Navbar />
      <div className="background-container">
        <div className="black-bg" ref={blackBg}></div>
        <div className="white-bg"></div>
      </div>
      <div className="img-container">
        <img ref={image} src={require("../Assets/Fireboy.png")} alt="" />
      </div>
      <div className="text-container-app">
        <h1>KAMUI</h1>
      </div>
      <div className="socials">
        <img className="invert" src={TwitterIcon} alt="" />
        <img
          src={DiscordIcon}
          className="brightness-0"
          alt=""
        />
      </div>
      <h1 className="background-text">カムイ</h1>
    </div>
  );
};

export default Header;
