import Button from "../../components/Buttons/Button";
import { NavLink } from "react-router-dom";
import "./TopNavBar.css"
const TopNavBar = () =>{
    return (
    <>
      <div className="topNavBar">
        <ul>
          <li>
            <NavLink className={"topNavlink"} to={"/game/overview"}>
              <Button name={"Overview"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/resources"}>
              <Button name={"Resources"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/facilities"}>
              <Button name={"Facilities"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/merchant"}>
              <Button name={"Merchant"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/shipyard"}>
              <Button name={"Shipyard"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/pvp"}>
              <Button name={"Pvp"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/raid"}>
              <Button name={"Raid"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/expedition"}>
              <Button name={"Expedition"}/>
            </NavLink>
          </li>
          <li>
            <NavLink className={"topNavlink"} to={"/game/plunder"}>
              <Button name={"Plunder"}/>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
    
  );
}

export default TopNavBar;

