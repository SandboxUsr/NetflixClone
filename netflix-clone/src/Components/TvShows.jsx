import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import "../Styles/tvshows.css";

export default function TvShows() {
  let [casualList, setCasualList] = useState([]);

  // Change thye link in fetch afterwards:

  function getCasualList() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCasualList(data.results);
      });
  }

  useEffect(() => {
    getCasualList();
  }, []);

  console.log(casualList);

  return (
    <>
      <Navbar setTvShows={true} />
      <div className="tvshows-container">
        <div className="tvshows-casual">
          <h4 className="tvshows-subheading">Casual Viewing</h4>
          <div className="tvshows-casual-list">
              {casualList.map((ele) => {
                return <div className="tvshows-casual-list-posters"><Card poster={ele.poster_path} /></div>;
                })}
          </div>
        </div>
      </div>
    </>
  );
}
