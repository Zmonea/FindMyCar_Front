import React, {useState, useEffect} from 'react';

const Footer = () => {
   return(
      <footer>
         <div id="Jimmy">
            <p>© GYMMEWIN</p>
            <a href="https://www.linkedin.com/in/gymmewin/"> <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1636056917~hmac=62d37edb5ce8aa0b45db0cf12aa5e2c5" alt="LinkedIn" className="icons"/></a>

            <a href="https://github.com/gymmewin"> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>

         <div id="Zach">
            <p>© ZACH MONEA </p>
            <a href="https://www.linkedin.com/in/zachary-monea/"><img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1636056917~hmac=62d37edb5ce8aa0b45db0cf12aa5e2c5" alt="LinkedIn" className="icons"/></a>

            <a href="https://github.com/zmonea"> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>
      </footer>
   )
}
export default Footer;
