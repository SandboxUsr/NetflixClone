// import React from "react";
// import netflixlogo from "../Assets/netflixlogo.png";
// import BgImg from "./BackgroundImg";
// import './Login.css'
// function LoginPage() {
//   return (
//     <>
//       <div className="container">
//        <BgImg/>
//        <div className="content">
//        <div className="netflix">
//        <img
//          style={{ height: "45px", width: "170px" }} src={netflixlogo} alt="logo"/>
//      </div>

//      <div className="form">
     
//      <h3>Sign In</h3>
//      <br/>
//      <form>
//      <input id="ip1" placeholder="    Email or phone number" type="email"/><br/>
//      <input id="ip2" placeholder="    Password" type="password"/><br/>
//      <button type="submit">Sign In</button>
//      <div id="div1">
//      <span><label>Remember me</label><input type="checkbox" id="Remember" /></span>
//      <span>Need help?</span>
//      </div>
//      <div id="div2">New to Netflix? 
// <span id="link"> Sign up now.</span><br/>
// <div id="message">
// This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id="learnMore">Learn more.</span></div>
// </div> </form>
     

//      </div>
//      </div>
       
//       </div>
//     </>
//   );
// }

// export default LoginPage;

import React from "react";
import netflixlogo from "../Assets/netflixlogo.png";
import bg from '../Assets/login.jpg'
import '../Styles/Login.css'
function LoginPage() {
  const backgroundImageStyle = {
    height: `calc(100vh + 85vh)`, // 100vh + half of the viewport height
    backgroundImage: `url(${bg})`,
    
  };
  return (
    <>
      
      <div className=" relative " style={ backgroundImageStyle}>
      <div style={{height: `calc(100vh + 85vh)`,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <div className="logincontent  absolute  ">
       <div className="login_netflix ">
       <img
        className="login_logo" style={{ height: "45px", width: "170px" }} src={netflixlogo} alt="logo"/>
     </div>
      <div id="loginformcontainer" className="flex justify-center items-center">
     <div className="form bg-black/[.75]  h-[650px] w-[430px]  flex justify-items-center ">
     
     <div className="mt-[70px] ml-[70px] "><h3 className="font-[500]  text-[2rem]">Sign_In</h3></div>
     
     <form>
     <input id="ip1" className="mt-[23vh] mb-[3vh] ml-[-110px] h-[50px] w-[300px] bg-[#333333] rounded" placeholder="    Email or phone number" type="email"/><br/>
     <input id="ip2" className=" ml-[-110px] h-[50px] w-[300px] bg-[#333333] rounded"placeholder="    Password" type="password"/><br/>
     <button type="submit" className="mt-[35px] ml-[-110px] h-[50px] w-[300px] bg-[#E50914] rounded text-white font-semibold text-lg">Sign In</button>
     <div id="div1" className="mt-[10px] w-[300px] ml-[-110px] text-sm text-[#737373]">
     <span><label className="ml-[30px]  mr-[170px]">Remember me</label><input type="checkbox" id="Remember" className="  ml-[-280px] "/></span>
     <span className="ml-[200px]">Need help?</span>
     </div>
     <div id="div2" className="mt-[100px] w-[300px] ml-[-110px] text-[#737373]">New to Netflix? 
<span id="link" className="text-white"> Sign up now.</span><br/>
<div id="message" className="text-sm text-[#737373] mt-[20px]">
This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id="learnMore" className="text-[blue]">Learn more.</span></div>
</div> </form>
</div>

</div>
<div id="login_footer" className=" h-[45vh] w-full  mt-28 bg-black/[.75] text-[#737373]">
    <div id="footer_content" className="pt-[30px] pl-[15vw]  ">
      <p className="">Questions? Call 000-800-919-1694 </p>
      <table className="text-sm mt-[30px]">
        <tr >
          <td className="pr-[15vw]">FAQ</td>
          <td className="pr-[15vw]">Help Centre</td>
          <td className="pr-[15vw]">Terms of Use </td>
          <td className="pr-[15vw]"> Privacy</td>
        </tr>
        <tr >
          <td className="pt-[20px]">Cookie Preferences</td>
          <td className="pt-[20px] ">Corporate Information</td>
        </tr>
      </table>

      <div id="language-box" >
          <select
            id="login-language-selector"
            name="language"
            className="bg-[#000000] w-[110px] h-[50px] mt-[20px] border border-[#737373]"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          </div>
    </div>
</div>
     </div>
     
     </div>
      </div>
    </>
  );
}
export default LoginPage;