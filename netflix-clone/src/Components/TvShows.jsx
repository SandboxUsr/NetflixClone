import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import "../Styles/tvshows.css";

export default function TvShows() {
  let [casualList, setCasualList] = useState([]);
  let [trendingList, setTrendingList] = useState([]);
  let [USTVList, setUSTVList] = useState([]);
  let [thrillersList, setThrillersList] = useState([]);
  let [popularList, setPopularList] = useState([]);
  let [mostWatchedList, setMostWatchedList] = useState([]);

  const casualRef = useRef(null);
  const trendingRef = useRef(null);
  const ustvRef = useRef(null);
  const thrillerRef = useRef(null);
  const popularRef = useRef(null);
  const mostWatchedRef = useRef(null);

  // Change thye link in fetch afterwards:
  function getList() {
    
    Promise.all([
      fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }),
      fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=2",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }),
      fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }),
      fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }),
      fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }),
      fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=6",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      })
    ])
      .then((allResponses) => Promise.all(allResponses.map((res) => res.json())))
      .then((data) => {
        setCasualList(data[0].results);
        setTrendingList(data[1].results);
        setUSTVList(data[2].results);
        setThrillersList(data[3].results);
        setPopularList(data[4].results);
        setMostWatchedList(data[5].results);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const scrollCasual = (scrollOffset) => {
    casualRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollTrending = (scrollOffset) => {
    trendingRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollUSTV = (scrollOffset) => {
    ustvRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollThriller = (scrollOffset) => {
    thrillerRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollPopular = (scrollOffset) => {
    popularRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const scrollMostWatched = (scrollOffset) => {
    mostWatchedRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Navbar setTvShows={true} />
      <div className="tvshows-container">

        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Casual Viewing</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollCasual(-1000)}>&lt;</button>
            <div ref={casualRef} className="tvshows-casual-list-container">
              {casualList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollCasual(1000)}>&gt;</button>
          </div>
        </div>
        
        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Trending Now</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollTrending(-1000)}>&lt;</button>
            <div ref={trendingRef} className="tvshows-casual-list-container">
              {trendingList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollTrending(1000)}>&gt;</button>
          </div>
        </div>

        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Award Winning US TV and Shows</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollUSTV(-1000)}>&lt;</button>
            <div ref={ustvRef} className="tvshows-casual-list-container">
              {USTVList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollUSTV(1000)}>&gt;</button>
          </div>
        </div>

        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Thriller Shows</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollThriller(-1000)}>&lt;</button>
            <div ref={thrillerRef} className="tvshows-casual-list-container">
              {thrillersList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollThriller(1000)}>&gt;</button>
          </div>
        </div>

        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Popular Shows</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollPopular(-1000)}>&lt;</button>
            <div ref={popularRef} className="tvshows-casual-list-container">
              {popularList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollPopular(1000)}>&gt;</button>
          </div>
        </div>

        <div className="tvshows-outlook">
          <h4 className="tvshows-subheading">Most Watched</h4>
          <div className="tvshows-casual-list">
            <button className="tvshows-left-button" onClick={() => scrollMostWatched(-1000)}>&lt;</button>
            <div ref={mostWatchedRef} className="tvshows-casual-list-container">
              {mostWatchedList.map((ele) => (
                <div className="tvshows-casual-list-posters" key={ele.id}>
                  <Card poster={ele.poster_path} />
                </div>
              ))}
            </div>
            <button className="tvshows-right-button" onClick={() => scrollMostWatched(1000)}>&gt;</button>
          </div>
        </div>

      </div>
    </>
  );
}
