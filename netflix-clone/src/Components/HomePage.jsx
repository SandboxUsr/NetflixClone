import React, { useEffect, useState } from "react";
import "../Styles/homepage.css";
import Card from "./Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  function getMovieData() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGYwYzhjZmIzMzA5MTIyNjA3ZTNiODQzZGY0ZjhkNCIsInN1YiI6IjY0Y2NmMmIyMmYyNjZiMDllZDYwM2M5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2rIZZrhfHqE9y1qvmaevJ9DsGRMSNRztwtnRazSZhU",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <h3>Popular on Netflix</h3>
      <div className="popOnNetf">
        {movies.map((movie) => (
          <Card poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}
