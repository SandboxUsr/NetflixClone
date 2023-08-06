import React,{useEffect} from 'react'
import axios from 'axios'
function Second() {
  const API="72d9b02bf9031b8eb058de3c5fd579f4"
  useEffect(()=>{
    const getResponse=async()=>{
      let result= await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${API}&append_to_response=videos`)
    console.log(result)
    return result
    }
    getResponse()
  },[])
  return (
    <div>
      Hi
    </div>
  )
}

export default Second
