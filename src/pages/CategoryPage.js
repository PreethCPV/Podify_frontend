import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
`;

const StickySearchBar = styled.input`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 2px solid #00bfff;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s;
  background-color: #fff;
  z-index: 1000;

  &:focus {
    border-color: #ff6347;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`;

const enlarge = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const PodcastCard = styled.div`
  margin: 0 10px;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 0;
  text-align: center;
  background-color: #ffebcd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, width 0.3s, height 0.3s, z-index 0.3s;
  height: 300px;
  overflow: hidden;
  transform: scale(0.8);
  width: 300px;
  position: relative;
  z-index: 1;

  &.center {
    transform: scale(1.2);
    width: 400px;
    animation: ${enlarge} 0.3s ease-in-out;
    z-index: 2;
  }

  &:hover {
    transform: scale(1);
  }
`;

const PodcastImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const PodcastTitle = styled.h4`
  margin: 10px 0;
  color: #333;
  font-size: 1.2em;
  padding: 0 10px;
  cursor: pointer;
`;

const PodcastDescription = styled.p`
  margin: 0;
  color: #666;
  padding: 0 10px;
  cursor: pointer;
`;

const PodcastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PodcastItem = styled.div`
  padding: 15px;
  border: 2px solid #dcdcdc;
  border-radius: 12px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const LikeButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ff6347;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const LikedPodcastsContainer = styled.div`
  margin-top: 40px;
`;

const LikedPodcastsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CategoryPage = () => {
  const { name } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [podcasts, setPodcasts] = useState([
    {
      title: "Podcast 1",
      description:
        "A great comedy show that will make you laugh out loud. With hilarious sketches and engaging stories, this podcast is sure to brighten your day and keep you entertained.",
      image:
        "https://www.earwolf.com/wp-content/uploads/2011/04/EAR_COVER_ComedyBangBang_2018Refresh_3000x3000_Final-1920x1920.jpg",
      likes: 0,
    },
    {
      title: "Podcast 2",
      description:
        "Another funny podcast with a unique twist on everyday events. Featuring interviews with top comedians and funny anecdotes, this podcast is a must-listen for comedy fans.",
      image:
        "https://images-platform.99static.com/mI9idZSEB48gbS0P5b0MXOHJfW8=/201x0:1236x1035/500x500/top/smart/99designs-contests-attachments/115/115639/attachment_115639186",
      likes: 0,
    },
    {
      title: "Podcast 3",
      description:
        "Laughter guaranteed with this podcast that covers everything from absurd news stories to comedic rants. Each episode is filled with witty banter and hilarious segments.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/always-sunny-podcast-1675706920.jpeg?crop=1xw:1xh;center,top&resize=980:*",
      likes: 0,
    },
    {
      title: "Podcast 4",
      description:
        "Humor and fun in every episode. Join the hosts as they dive into funny topics, interview comedians, and share their most outrageous stories.",
      image:
        "https://images-platform.99static.com/1RhUwQD3M23llqvVLs5f88s1qj8=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/124/124782/attachment_124782569",
      likes: 0,
    },
    {
      title: "Comedy Bang! Bang!",
      description:
        "A show about the best in comedy. Featuring interviews with top comedians, hilarious sketches, and lots of surprises.",
      image:
        "https://www.bestpodcasts.co.uk/wp-content/uploads/2021/11/no-such-thing-as-a-fish-2-300x300.jpg",
      likes: 0,
    },
    {
      title: "The Joe Rogan Experience",
      description:
        "Long form, in-depth conversations with guests from the world of comedy, sports, entertainment, and more. Join Joe Rogan as he explores a wide range of topics.",
      image:
        "https://cdn.dribbble.com/users/7066488/screenshots/17131707/media/ff9a2f7925d718f88284985936450a90.png?resize=1000x750&vertical=center",
      likes: 0,
    },
    {
      title: "Conan O'Brien Needs A Friend",
      description:
        "Conan's in search of a new friend. Join him as he interviews guests and tries to make new friends in the process. Expect lots of laughs and heartfelt moments.",
      image:
        "https://i1.sndcdn.com/avatars-000690868934-a2oxn6-t1080x1080.jpg  ",
      likes: 0,
    },
    {
      title: "The Tim Dillon Show",
      description:
        "Comedian Tim Dillon rants about everything from current events to personal stories. This podcast is a mix of comedy and insightful commentary.",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/comedy-night-flyer%2C-podcast-talk-show-design-template-ffaf7979a47a8dd3d84de8a9ad4cf6a8_screen.jpg?ts=1698413106",
      likes: 0,
    },
    {
      title: "How Did This Get Made?",
      description:
        "A show about bad movies and the stories behind them. Join the hosts as they dissect some of the worst movies ever made in a humorous and entertaining way.",
      image:
        "https://www.podswag.com/cdn/shop/products/H883517B_ComedyBangBangWebImage_600x.jpg?v=1668148637",
      likes: 0,
    },
    {
      title: "My Brother, My Brother and Me",
      description:
        "A hilarious advice podcast where the McElroy brothers answer listener questions with wit and humor. This show is a delightful mix of comedy and genuine advice.",
      image:
        "https://i.iheart.com/v3/re/new_assets/6201afbb0bd8ab3b91fcfd99?ops=fit(960%2C960)",
      likes: 0,
    },
    {
      title: "No Such Thing As A Fish",
      description:
        "A podcast about the world's most fascinating facts. Join the hosts as they uncover bizarre facts, amazing discoveries, and quirky stories from around the globe.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9b/DoughboysLogo_ChrisVanArtsdalen1.jpeg",
      likes: 0,
    },
    {
      title: "The Daily Show with Trevor Noah: Ears Edition",
      description:
        "The Daily Show's podcast, with Trevor Noah. Enjoy the highlights and extended interviews from the show in podcast form.",
      image:
        "https://img.freepik.com/premium-psd/comedy-podcast-social-media-post-template_59951-160.jpg",
      likes: 0,
    },
    {
      title: "The Adam Carolla Show",
      description:
        "The Adam Carolla Show is the greatest podcast in the world. Join Adam and his guests for a mix of comedy, interviews, and more.",
      image: "https://i.postimg.cc/D0hfhxVd/image.png",
      likes: 0,
    },
    {
      title: "The Bill Simmons Podcast",
      description:
        "The Bill Simmons Podcast is the most downloaded sports podcast of all time. Join Bill as he talks sports, pop culture, and everything in between.",
      image: "https://i.scdn.co/image/ab6765630000ba8adaa7012b7c41b57216ff74f4",
      likes: 0,
    },
    {
      title: "Stuff You Should Know",
      description:
        "The most interesting and entertaining podcast ever. Josh and Chuck dive into a variety of topics, explaining how things work and sharing fascinating facts.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc0Mjg1Nzc0MF5BMl5BanBnXkFtZTcwODM5OTcwOQ@@.V1.jpg",
      likes: 0,
    },
  ]);

  const [likedPodcasts, setLikedPodcasts] = useState([]);

  const sliderRef = useRef(null); // Reference for the slider component
  const carouselContainerRef = useRef(null); // Reference for the carousel container
  const [currentSlide, setCurrentSlide] = useState(0); // State variable for current slide index

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePodcastClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Move slider to the selected index
    }
    if (carouselContainerRef.current) {
      const scrollOffset = carouselContainerRef.current.offsetTop - 100; // Adjust this value as needed
      window.scrollTo({ top: scrollOffset, behavior: "smooth" }); // Scroll to the slider container
    }
  };

  const handleLike = (index) => {
    if (!likedPodcasts.includes(index)) {
      setPodcasts((prevPodcasts) => {
        const newPodcasts = [...prevPodcasts];
        newPodcasts[index].likes += 1;
        return newPodcasts;
      });
      setLikedPodcasts((prevLiked) => [...prevLiked, index]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pause autoplay on hover
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <PageContainer>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{name} Page</h1>
      <StickySearchBar
        type="text"
        placeholder="Search for comedy podcasts..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <CarouselContainer ref={carouselContainerRef}>
        <Slider
          ref={sliderRef} // Attach ref to access slick methods
          {...settings}
        >
          {podcasts.map((podcast, index) => (
            <PodcastCard
              key={index}
              className={index === currentSlide ? "center" : ""}
            >
              <PodcastImage src={podcast.image} alt={podcast.title} />
              <PodcastTitle onClick={() => handlePodcastClick(index)}>
                {podcast.title}
              </PodcastTitle>
              <LikeButton
                onClick={() => handleLike(index)}
                disabled={likedPodcasts.includes(index)}
              >
                Like ({podcast.likes})
              </LikeButton>
            </PodcastCard>
          ))}
        </Slider>
      </CarouselContainer>
      <PodcastContainer>
        {filteredPodcasts.map((podcast, index) => (
          <PodcastItem key={index} onClick={() => handlePodcastClick(index)}>
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PodcastDescription>{podcast.description}</PodcastDescription>
            <LikeButton
              onClick={() => handleLike(index)}
              disabled={likedPodcasts.includes(index)}
            >
              Like ({podcast.likes})
            </LikeButton>
          </PodcastItem>
        ))}
      </PodcastContainer>
      {likedPodcasts.length > 0 && (
        <LikedPodcastsContainer>
          <LikedPodcastsTitle>Liked Podcasts</LikedPodcastsTitle>
          <PodcastContainer>
            {likedPodcasts.map((likedIndex) => (
              <PodcastItem key={likedIndex}>
                <PodcastTitle>{podcasts[likedIndex].title}</PodcastTitle>
                <PodcastDescription>
                  {podcasts[likedIndex].description}
                </PodcastDescription>
                <LikeButton
                  onClick={() => handleLike(likedIndex)}
                  disabled={likedPodcasts.includes(likedIndex)}
                >
                  Like ({podcasts[likedIndex].likes})
                </LikeButton>
              </PodcastItem>
            ))}
          </PodcastContainer>
        </LikedPodcastsContainer>
      )}
    </PageContainer>
  );
};

export default CategoryPage;
