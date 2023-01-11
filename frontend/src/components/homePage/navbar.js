import React, { useState } from 'react';
import Popup from './popup'
import './navbar.css';
import { useCookies } from 'react-cookie';
import Logo from './images/logo.png'
import userImage from "../../img/userImage.png"

function Navbar() {
    const [btnPopup, setbtnPopup] = useState(false);
    const [ideaForm, setideaForm] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const sessionUser = cookies.user
    // console.log(sessionUser)
    if(sessionUser){
        return (
            <div className="navbar2">
                <img src={Logo} style={{"height": "80%"}} alt=""/>
                <div>
                    <span>{sessionUser.username}</span>
                    <button className='butt'>LogOut</button>
                    <img src={userImage} alt="" className="usrimg"/>
                </div>
            </div>
          )
    }else{
        return (
            <div className="navbar">
                {/* <div className="loginBtn" onClick={() => setideaForm(true)}>Apply</div> */}
                <img src={Logo} style={{"height": "80%"}} alt="" />
                <div className="loginBtn" onClick={() => setbtnPopup(true)}>Login</div>
                <Popup trigger={btnPopup} setTrigger={setbtnPopup} />
                {/* <IdeaForm trigger={ideaForm} setTrigger={setideaForm} /> */}
            </div>
        )
    }
}

export default Navbar