import React, { useEffect, useState } from "react";
import { Card, Navbar, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NewsNav from "./NewsNav";
import EmptyImage from "../images/emptyImage.png";
import TopImage from "../images/topimage.png";
import Detail from "./detail";

import { keyboard } from "@testing-library/user-event/dist/keyboard";
function NewsApp({ category }) {
  const [newsdata, setdata] = useState();
  const [showD, setshowD] = useState(true);
  const [topVisibility, settopVisibility] = useState(false);
  const [detailId, setdetailId] = useState(0)



  let headerSize = 300;
  useEffect(() => {
    <Spinner animation="grow" />

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f8dad846dc8d4f1ba5a3b07cdeb0b99a`
      )
      .then((response) => {
        console.log(response);
        setdata(response.data.articles);
      });
  }, [category]);

  const showDetail =(id)=>{
    setdetailId(id);
    // setshowD(false);
    
  }
  
  const topScroll = () => {

    if (window.scrollY > 200) {
      settopVisibility(true)
    }
    else {
      settopVisibility(false)
    }
  }

  const topClick = () => {
    console.log("click");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  window.addEventListener('scroll', topScroll)
  return (

    <div style={{}}>
      <NewsNav />
      <div
        className="bg-dark text-white text-center pt-5"
        style={{ width: "100%", height: "350px", zIndex: "99" }}
      >
        <div id="header" className="pt-2" style={{ marginTop: "5%", textTransform: "capitalize" }}>
          <h1 >{category} News</h1>
          <p>explore {category} News here</p>
        </div>
      </div>

      <div style={{ width: '100%', borderBottom: "3px solid rgb(53, 52, 52)", marginTop: '8px', height: '2px' }}></div>
      <div
        className="container mt-5 "
        style={{ position: "relative", width: "100%" }}
      >

      

        {newsdata ? (
          newsdata.map((d, k) => {

            return (
              <>
                <Card onClick={() => showDetail(k)}
                  className="newsCard m-1"
                  style={{
                    width: "300px",
                    height: "350px",
                    border: "none",
                    // display: showD ? 'block' : 'none',
                    backgroundColor: 'transparent',
                    position: "relative",
                    borderBottom: '1px solid black'
                  }}
                >
                  <Card.Img className="rounded-0"
                    style={{ width: "100%", height: "150px" }}
                    src={d.urlToImage ? d.urlToImage : EmptyImage}
                  />

                  <div className="newsContent align-items-center">
                    <a
                      className=" p-1  visitnews"
                      href={d.url}
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        width: "30%",
                        left: 0,
                        alignSelf: "center"

                      }}
                    >
                      Visit News
                    </a>
                    <Card.Title className="text-dark center p-2 m-1 " style={{ borderLeft: '1px solid black' }}>
                      {d.source.name
                        ? d.source.name
                        : "Title Not Found"} :
                    </Card.Title>


                  </div>
                  <Card.Text
                    className="text-dark m-2"
                    style={{ fontSize: "16px", overflow: "hidden" }}
                  >
                    {d.title}
                  </Card.Text>


                </Card>

                <div onClick={topClick} className="bg-dark text-light text-center"
                  style={{
                    display: topVisibility ? 'block' : 'none',
                    cursor: "pointer", position: 'fixed', bottom: '5rem', right: '1rem',
                  }}>
                  <img src={TopImage} alt="" style={{ width: '80px', height: '55px' }} />
                  <h5>Top</h5>
                </div>

              </>
            );
          })
        ) : (
          <div className="mt" style={{ width: "100%", marginTop: "10rem", textAlign: 'center' }}>
            <Spinner animation="grow" />
          </div>


        )}

      </div>
      <footer className="bg-dark text-center text-white" style={{ zIndex: '99', display: (newsdata && showD) ? 'block' : 'none', textDecoration: 'none' }}>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: '17px' }}>
          DailyNews.com

        </div>

      </footer>
    </div>
  );
}
export default NewsApp;
