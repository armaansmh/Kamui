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
    const bganimation = gsap.fromTo(blackBg.current, {width: "0"}, {width: "50%", ease: Power4})
    const imagecontainerAnimation = gsap.fromTo(after, {width: "100%"}, {width: "0%"})
    imagecontainerAnimation.duration(2)
    imagecontainerAnimation.delay(0.4)
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
        <img ref={image} src={require("../Assets/Moongirl.png")} alt="" />
      </div>
      <div className="text-container-app">
        <h1>KAMUI</h1>
      </div>
      <div className="socials">
        <a href="https://www.twitter.com/kamui_nft">
            <img className="invert" src={TwitterIcon} alt="" />
        </a>
        <a href="https://www.discord.gg/gt3uNqfCHA">

        <img
          src={DiscordIcon}
          className="brightness-0"
          alt=""
        />
        </a>
      </div>
      <h1 className="background-text">カムイ</h1>
    </div>
  );
};

export default Header;
