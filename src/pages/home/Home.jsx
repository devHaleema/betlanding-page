import React from 'react'
import "./home.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import messi from "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/messi.jpg"
import laligaPlayers from "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/laligaPlayers.jpg"
import premierLeaguePlayers from "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/premierLeaguePlayers.jpg"
import serieaPlayers from "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/serieaPlayers.jpg"
import footballfixtures from "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/footballfixtures.png"


function Home () {
    return (
        <div className="home">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 .img-fluid slides"
      src={messi}
      alt="Lionel Messi"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 .img-fluid slides"
      src={laligaPlayers}
      alt="La liga Players"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 .img-fluid slides"
      src={premierLeaguePlayers}
      alt="Premier League Players"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 .img-fluid slides"
      src={serieaPlayers}
      alt="Serie A Players"
    />
  </Carousel.Item>

</Carousel>
<div className="borderline"></div>
  <div className="image-div">
      <h3 className="image-head">Football Fixtures</h3>
      <img src={footballfixtures} alt="Fixture table" className="fixture"/>
  </div>
        </div>
    )
}

export default Home
