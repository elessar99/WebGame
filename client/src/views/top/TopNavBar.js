import Button from "../../components/Buttons/Button";
import "./TopNavBar.css"
const TopNavBar = () =>{
    return (
    <>
      <div className="topNavBar">
        <ul>
          <li>
            <Button name={"Overview"}/>
          </li>
          <li>
            <Button name={"Resources"}/>
          </li>
          <li>
            <Button name={"Facilities"}/>
          </li>
          <li>
            <Button name={"Merchant"}/>
          </li>
          <li>
            <Button name={"Shipyard"}/>
          </li>
          <li>
            <Button name={"Pvp"}/>
          </li>
          <li>
            <Button name={"Raid"}/>
          </li>
          <li>
            <Button name={"Expedition"}/>
          </li>
          <li>
            <Button name={"Plunder"}/>
          </li>
        </ul>
      </div>
    </>
    
  );
}

export default TopNavBar;

