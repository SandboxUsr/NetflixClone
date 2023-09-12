import React from 'react'
import demo from '../Assets/demo.jpg'
//import { BsPlayCircleFill } from 'react-icons/ba';
//import { MdOutlineDoneOutline } from 'react-icons/md';
//import { IoMdThumbsUp } from 'react-icons/io';
//import { FaCircleChevronDown } from 'react-icons/fa';


function OnHoverCard() {
  return (
    <div className='h-96 w-1/3 bg-black' >
        <div className={`bg-[url(${demo})] bg-[center_top_1rem] h-[190px] w-[440px] `}>
          
        </div>
        <div id="card-buttons"></div>
        <div id="card-details"></div>
    </div>
  )
}

export default OnHoverCard