import React,{useEffect,useState} from 'react'
import axiosInstance from '../axios'

import 'react-multi-carousel/lib/styles.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Rows = ({title,fetchUrl}) => {
    const [movies, setMovies] = useState([])
    const baseUrl='https://image.tmdb.org/t/p/original/'
    useEffect(() => {
      async function fetchData() {
        
        const request= await axiosInstance.get(fetchUrl)
        setMovies(request.data.results)
        return request
      }
    
      
    fetchData()
      
    }, [fetchUrl])

    // const responsive = {
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
         slidesToShow: Math.min(5,movies.length),
        slidesToScroll: 3,
        arrows:true,
        
      };

  return (
    <>
    <div className=' w-[96vw]'>
    <h2 className='text-white'>{title}</h2>
    
<Slider {...settings} >
    
        {movies.map(movie=>(
            <div key={movie.id}> 
           <img 
           className='w-[100%] h-[140px] object-contain '
           src={`${baseUrl}${movie.backdrop_path}`} alt={movie.name}/>
           </div>
        ))}
    
    </Slider>
    </div>
    </>
  )
}

export default Rows