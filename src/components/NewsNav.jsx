import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Icon from "../images/icon.png";


export default function NewsNav() {

  const [color, setcolor] = useState(true);

  const changebg = () => {
   

    if (window.scrollY < 250) {
      setcolor(true);
     
    } else {
      setcolor(false);
      
    }
  };

  window.addEventListener("scroll", changebg);

  return (
    <>
     <div
        className="navbar text-light p-1"
        style={{
          position: "fixed",
          backgroundColor: color ? "transparent" : "rgb(53, 52, 52)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* <img
            className="logo mt-2 ml-4"
            src={Logo}
            alt="img"
            style={{ width: "200px", height: "200px" }}
          /> */}

          <h3 className='mt-1' style={{width:'30%'}}>DAILY NEWS</h3>
          <div className='mainNav m-1'
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <NavLink className="navnews"  to="/">
              General
            </NavLink>
            <NavLink className="navnews"  to="/sports">
              Sports
            </NavLink>
            <NavLink className="navnews"  to="/business">
              Business
            </NavLink>
            <NavLink className="navnews"  to="/science">
              Science
            </NavLink>
            <NavLink className="navnews"  to="/entertainment">
              Entertainment
            </NavLink>
            <NavLink className="navnews"  to="/technology">
              Technology
            </NavLink>
          </div>
        </div>
      </div>

    </>
  )
}
