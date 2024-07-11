import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1 className="podify-name">Podify</h1>
      </div>
      <Navbar />
      <div className="slideshow">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod/images/pop-technology-podcasts-1591036338.jpg"
              alt="Technology"
            />
            <Carousel.Caption>
              <h3>Technology</h3>
              <p>Latest in tech podcasts</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://discoverpods.com/wp-content/uploads/2020/01/health-fitness-podcasts-scaled.jpg"
              alt="Health"
            />
            <Carousel.Caption>
              <h3>Health</h3>
              <p>Podcasts about health and wellness</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.prod.website-files.com/5fac161927bf86485ba43fd0/62fa550dbe9f78c42bb42175_Blog%20Cover_2022_07_20%20Best%20Business%20Podcasts%20for%20Successful%20Growth%20in%202022.webp"
              alt="Business"
            />
            <Carousel.Caption>
              <h3>Business</h3>
              <p>Podcasts on business and entrepreneurship</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/wp-content/uploads/2018/08/Podcast_-popular-podcasts.jpg"
              alt="Entertainment"
            />
            <Carousel.Caption>
              <h3>Entertainment</h3>
              <p>Latest entertainment podcasts</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hellobio.com/media/amasty/blog/cache/P/o/648/339/Podcasts_by_Scientists_-_WIDE_14__2.png"
              alt="Science"
            />
            <Carousel.Caption>
              <h3>Science</h3>
              <p>Podcasts about science and research</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="new-releases">
        <h2>New Releases</h2>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="https://m.media-amazon.com/images/M/MV5BMjNjYjJkYTYtYjI5Zi00NWE4LWFiZjItMjM0N2VlZjgxY2U0XkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_.jpg"
              alt="Entertainment"
            />
            <div className="card-body">
              <h5 className="card-title">Entertainment</h5>
              <p className="card-text">The Joe Rogan Experience</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://m.media-amazon.com/images/I/513C+V67avL._SL500_.jpg"
              alt="Podcast 2"
            />
            <div className="card-body">
              <h5 className="card-title">Technology</h5>
              <p className="card-text">AI Today</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://hips.hearstapps.com/hmg-prod/images/fantasy-footballers-1579212708.png"
              alt="Podcast 3"
            />
            <div className="card-body">
              <h5 className="card-title">Sports</h5>
              <p className="card-text">The Sports Desk</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUilcNIGcf0oL-JJcIBDrlC5g8OQG1GwI6Hg&s"
              alt="Podcast 4"
            />
            <div className="card-body">
              <h5 className="card-title">Health</h5>
              <p className="card-text">Uconn Health</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
