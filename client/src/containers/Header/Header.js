import "./Header.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clock from "./clock";
import Player from "../../components/Player/player";
const Header = () =>{

  const [istanbulTime, setIstanbulTime] = useState();
  const [istanbulDate, setIstanbulDate] = useState('');



    return (
    <>
    <div className="Header">
      <div>
        <Clock/>
      </div>
      <div>
        Player : {Player.name} |
        Highscore : {Player.highScore} |
        Search Player |
        Options 
      </div>
      <div>
        <div>Log Out</div>
      </div>
    </div>
    </>
    
  );
}

export default Header;

