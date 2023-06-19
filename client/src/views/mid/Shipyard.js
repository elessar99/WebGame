import BuildCard from "../../components/GameCard/BuildCard";
import Button from "../../components/Buttons/Button"
import "./css/Shipyard.css"
import { useEffect, useState } from "react";
import build from "../../AaBackend/binalar";
const Shipyard = () =>{
  const buildings = "ship";
  const [required, setRequired] = useState(build.requiredShip.windchaser);
  const [imgPath, setİmgPath] = useState("windchaser");
  const [woodControl, setWoodControl] = useState(false);
  const [ironControl, setİronControl] = useState(false);
  const [curseControl, setCurseControl] = useState(false);
  const [isCurse, setİsCurse] = useState(false);
  const [unit, setUnit] = useState(build.ship.windchaser);
  const iron = 134;
  const wood = 400;
  const curse = 500;
  const [unitValue, setUnitValue] = useState(1);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value > 0) {
      setUnitValue(value);
    }else{
      setUnitValue(1)
    }
    console.log(value);
    console.log(unitValue);
  };
  useEffect(() => {
    click(required)
  }, [handleChange]);
  const click = (i) =>{
    i.log * unitValue <= wood ? setWoodControl(true) : setWoodControl(false);
    if (i.isCurse) {
    i.curse * unitValue <= curse ? setCurseControl(true) : setCurseControl(false);
    setİsCurse(true)
    } else {
    i.iron * unitValue <= iron ? setİronControl(true) : setİronControl(false);  
    setİsCurse(false)
    }
  }
  useEffect(() => {
    click(build.requiredShip.windchaser)
  }, []);
  
    return (
    <>
      <div className="resourcePage">
        <div className="buildResource" >
          <div className="shipLeft">
            <div className="shipup">
              <div className="containerImg">
                <img className="buildImg" src={require(`../../img/ship/${imgPath}.png`)}></img>
              </div>
            </div>
            <div className="shipdown">
              <div className={woodControl ? "needed ntrue" : "needed nfalse"}>
                <div>
                  <img className="needImg" src={require("../../img/resource/wood.png")}/>
                </div>
                <div className="needInfo">
                  {required.log}
                </div>
              </div >
              {!isCurse && (<div className={ironControl ? "needed ntrue" : "needed nfalse"}>
                <div>
                <img className="needImg" src={require("../../img/resource/iron.png")}/>
                </div>
                <div className="needInfo">
                  {required.iron}
                </div>
              </div>)}
              
              {isCurse && (<div className={curseControl ? "needed ntrue" : "needed nfalse"}>
                <div>
                <img className="needImg" src={require("../../img/resource/curse.png")}/>
                </div>
                <div className="needInfo">
                  {required.curse}
                </div>
              </div>)}
            </div>
          </div>
          <div className="shipRight">
            <div className="build10">
              <div className="buildInfo">
              Gemi ve bina inşaatında kullanılan olmazsa olmaz ham maddelerden biri metaldir.
              Madenler büyüdükçe yüzeyden derine iner. 
              Daha derin ve de büyük madenler sayesinde daha fazla metal çıkarılabilir ve böylece üretim de artar.
              Yalnız daha büyük madenler daha fazla insan güçü gerektirir.
              </div>
            </div>
            <div className="build16">
              <div className="buildBody">
                    <div className="unit">
                     Unit : {unit}
                    </div>
                    <div className="unitbuild">
                     Build Units:
                     <input className="unitInput" type="number" min={1} value={unitValue} onChange={handleChange}></input>
                    </div>
                  <button className="buildBtn">
                    <div>
                      Build
                    </div>
                    <div className="updateBtnArrowContanier">
                    <img className="updateBtnArrow" src={require("../../img/arrowup.png")}/>
                    </div>
                    </button>
              </div>
            </div>
          </div>
        </div>
        <div className="buildCardBar">
          <div onClick={()=>{
            setRequired(build.requiredShip.windchaser)
            setİmgPath("windchaser")
            click(build.requiredShip.windchaser)
            setUnit(build.ship.windchaser)
            setUnitValue(1)
            }}>
            <BuildCard buildings={buildings} name={"Windchaser"} lvl={build.ship.windchaser} Img={"windchaser"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.requiredShip.thunderclasp)
            setİmgPath("thunderclasp")
            click(build.requiredShip.thunderclasp)
            setUnit(build.ship.thunderclasp)
            setUnitValue(1)
            }}>
          <BuildCard buildings={buildings} name={"thunderclasp"} lvl={build.ship.thunderclasp} Img={"thunderclasp"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.requiredShip.stormrider)
            setİmgPath("stormrider")
            click(build.requiredShip.stormrider)
            setUnit(build.ship.stormrider)
            setUnitValue(1)
            }}>
          <BuildCard buildings={buildings} name={"stormrider"} lvl={build.ship.stormrider} Img={"stormrider"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.requiredShip.hexedtide)
            setİmgPath("hexedtide")
            click(build.requiredShip.hexedtide)
            setUnit(build.ship.hexedtide)
            setUnitValue(1)
            }}>
          <BuildCard buildings={buildings} name={"hexedtide"} lvl={build.ship.hexedtide} Img={"hexedtide"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.requiredShip.deathwave)
            setİmgPath("deathwave")
            click(build.requiredShip.deathwave)
            setUnit(build.ship.deathwave)
            setUnitValue(1)
            }}>
          <BuildCard buildings={buildings} name={"deathwave"} lvl={build.ship.deathwave} Img={"deathwave"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.requiredShip.greencurse)
            setİmgPath("greencurse")
            click(build.requiredShip.greencurse)
            setUnit(build.ship.greencurse)
            setUnitValue(1)
            }}>
          <BuildCard buildings={buildings} name={"greencurse"} lvl={build.ship.greencurse} Img={"greencurse"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipyard;

