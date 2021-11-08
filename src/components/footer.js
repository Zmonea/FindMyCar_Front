import React, {useState, useEffect} from 'react';

const Footer = () => {
   return(
      <footer>
         <div id="Jimmy">
            <p>© GYMMEWIN</p>
            <a href="https://www.linkedin.com/in/gymmewin/"> <img src="https://cdn-icons.flaticon.com/png/128/3256/premium/3256016.png?token=exp=1636299482~hmac=85ce30c223353bc00c372ee39b215d27" alt="LinkedIn" className="icons"/></a>

            <a href="https://github.com/gymmewin"> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>

         <div id="Zach">
            <p>© ZACH MONEA </p>
            <a href="https://www.linkedin.com/in/zachary-monea/"><img src="https://cdn-icons.flaticon.com/png/128/3256/premium/3256016.png?token=exp=1636299482~hmac=85ce30c223353bc00c372ee39b215d27" alt="LinkedIn" className="icons"/></a>

            <a href="https://github.com/zmonea"> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>
      </footer>
   )
}
export default Footer;
