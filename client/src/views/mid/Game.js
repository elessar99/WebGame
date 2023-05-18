import { useLocation } from "react-router-dom";
import Header from "../../containers/Header/Header";
import TopNavBar from "../top/TopNavBar";
import "./css/Game.css"
import Overview from "./Overview";
import Resources from "./Resources";
import Facilities from "./Facilities";
import Merchant from "./Merchant";
import Shipyard from "./Shipyard";
import Pvp from "./Pvp";
import Raid from "./Raid";
import Expedition from "./Expedition";
import Plunder from "./Plunder";
import Test from "./Test";
const Game = () =>{
  const location = useLocation();
  let component;
  if(location.pathname === "/game") {
    component = <Test/>;
  }else if (location.pathname === "/game/overview") {
    component = <Overview />;
  }else if (location.pathname === "/game/resources") {
    component = <Resources />;
  }else if (location.pathname === "/game/facilities") {
    component = <Facilities />;
  }else if (location.pathname === "/game/merchant") {
    component = <Merchant />;
  }else if (location.pathname === "/game/shipyard") {
    component = <Shipyard />;
  }else if (location.pathname === "/game/pvp") {
    component = <Pvp />;
  }else if (location.pathname === "/game/raid") {
    component = <Raid />;
  }else if (location.pathname === "/game/expedition") {
    component = <Expedition />;
  }else if (location.pathname === "/game/plunder") {
    component = <Plunder />;
  }
    return (
    <div className="fullGamePage">
    <Header/>
    <div className="gamePage">
      <div className="gameTop">
        
      </div>
      <div className="gameBody">
        <div className="gameLeft"> 
          <TopNavBar/>
        </div>  
        <div className="gameMid">
          {component}
          </div>       
        </div>
    </div>
    </div>
    
  );
}

export default Game;

