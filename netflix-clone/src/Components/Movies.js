import React from 'react'
import requests from '../requests'
import Rows from './Rows'


const Movies = () => {
  return (
    <div>
        <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
        <Rows title='Trending On Netflix' fetchUrl={requests.fetchTrending}/>
        <Rows title='Top Rated Movies' fetchUrl={requests.fetchTopRated}/>
        <Rows title='Action' fetchUrl={requests.fetchActionMovies}/>
        <Rows title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
        <Rows title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
        <Rows title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
        <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Movies