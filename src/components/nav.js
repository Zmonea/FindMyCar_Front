import React, {useState, useEffect} from 'react';
import axios from 'axios';


const NavBar = (props) => {
  

    return(
        <nav> 
            <div className="flexRowNav">
                <ul className="horiNav">
                    <li><a className="navLink" href="#">Used Cars</a></li>
                    <li><a className="navLink" href="#">New Cars</a></li>
                    <li><a className="navLink" href="#">Cash Offers</a></li>
                    <li><a className="navLink" href="#">Find Local Dealers</a></li>

                </ul>

            </div>
        </nav>

    );


}
export default NavBar;