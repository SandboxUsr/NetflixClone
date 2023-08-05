import React from 'react'
import bg from '../Assets/login.jpg'
function BackgroundImg() {
  return (
   <>
    <div id='container' style={{backgroundImage:`url(${bg})` ,height:'100vh',width:'100vw'}}>
    </div>
    </>
  )
}

export default BackgroundImg
