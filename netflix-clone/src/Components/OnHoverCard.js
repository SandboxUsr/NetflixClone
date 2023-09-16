import React from 'react'
import demo from './demo.jpg'
import { BsPlayCircleFill } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import { BiChevronDownCircle } from 'react-icons/bi';


function OnHoverCard() {
  return (
    <div className='h-[370px] w-[420px] bg-black my-[10px] ml-[30px] '>
        <div className={`h-[190px] w-[410px] mx-[5px] my-[10px]`}>
          <img src={demo} alt="hola" className='h-[190px] w-[410px] pt-[5px]'/>
        </div>
        <div id="card-buttons" className='flex'>
          <div className='flex space-x-1.5'>
          <BsPlayCircleFill className='text-white text-[37px] mt-[20px] ml-[20px]' />
          <AiOutlineCheckCircle className='text-white text-[45px] mt-[16px]'/>
          <div className='border-solid border-2 border-white rounded-full w-[40px] h-[40px] mt-[18px]'><FaRegThumbsUp className='text-white text-[20px] m-[8px]'/></div></div>
          <BiChevronDownCircle className='text-white text-[46px] mt-[15px] ml-[195px]'/>
        </div>

        <div id="card-details" className='ml-[20px] mt-[15px]' >
          <span className='text-[lightgreen] font-bold'>98% Match </span>
          <span className='border-solid border-2 border-white text-white px-[5px] ml-[5px]'> A</span>
          <span className='text-white px-[5px] ml-[5px]'>2h 12m </span>
          <span className='border-solid border-1 border-white rounded text-white text-xs px-[5px] ml-[5px]'>HD</span>
          <div className='text-white font-bold mt-[15px]'>
              Psychological . Dark . Thriller
          </div>
        </div>
    </div>
  )
}

export default OnHoverCard