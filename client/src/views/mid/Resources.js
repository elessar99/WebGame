import BuildCard from "../../components/GameCard/BuildCard";
import Button from "../../components/Buttons/Button"
import "./css/Resources.css"
import build from "../../AaBackend/binalar";
import { useEffect, useState } from "react";
const Resources = () =>{
  const [required, setRequired] = useState(build.required.mine);
  const [imgPath, setİmgPath] = useState("mine");
  const [woodControl, setWoodControl] = useState(false);
  const [ironControl, setİronControl] = useState(false);
  const iron = 134;
  const wood = 400;
  const click = (i) =>{
    if (i.log <= wood ) {
      setWoodControl(true)
    } else {
      setWoodControl(false)
    }
    if (i.iron <= iron) {
      setİronControl(true)
    } else {
      setİronControl(false)
    }
    // required.log <= wood ? setWoodControl(true) : setWoodControl(false);
    // required.iron <= iron ? setİronControl(true) : setİronControl(false);
    console.log("wood: "+ woodControl+" - iron: "+ ironControl)
  }
  useEffect(() => {
    click(build.required.mine)
  }, []);
  
  const buildings = "resourceBuildings";
    return (
    <>
      <div className="resourcePage">
        <div className="buildResource" >
          <div className="buildLeft">
            <div className="build16">
              <div className="containerImg">
                <img className="buildImg" src={require(`../../img/resourceBuildings/${imgPath}.png`)}></img>
              </div>
            </div>
            <div className="build10">
              <div className={woodControl ? "needed ntrue" : "needed nfalse"}>
                <div>
                  <img className="needImg" src={require("../../img/resource/wood.png")}/>
                </div>
                <div className="needInfo">
                  {required.log}
                </div>
              </div >
              <div className={ironControl ? "needed ntrue" : "needed nfalse"}>
                <div>
                <img className="needImg" src={require("../../img/resource/iron.png")}/>
                </div>
                <div className="needInfo">
                 {required.iron}
                </div>
              </div>
            </div>
          </div>
          <div className="buildRight">
            <div className="build10">
              <div className="buildInfo">
              Gemi ve bina inşaatında kullanılan olmazsa olmaz ham maddelerden biri metaldir.
              Madenler büyüdükçe yüzeyden derine iner. 
              Daha derin ve de büyük madenler sayesinde daha fazla metal çıkarılabilir ve böylece üretim de artar.
              Yalnız daha büyük madenler daha fazla insan güçü gerektirir.
              </div>
            </div>
            <div className="build16">
              <div className="upgradeBody">
                <div className="tableContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>lvl</th>
                        <th>üretim</th>
                        <th>fark</th>
                        <th>işçi</th>
                        <th>fark</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>100</td>
                        <td>50</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>2424200</td>
                        <td>7245</td>
                        <td>1442</td>
                        <td>130</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <button className={woodControl && ironControl ? "upgradeBtn ntrue" : "upgradeBtn nfalse"}>
                    <div>
                      upgrade
                    </div>
                    <div className="updateBtnArrowContanier">
                    <img className="updateBtnArrow" src={require("../../img/arrowup.png")}/>
                    </div>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buildCardBar">
          <div onClick={()=>{
            setRequired(build.required.mine)
            setİmgPath("mine")
            click(build.required.mine)
            }}>
            <BuildCard buildings={buildings} name={"Mine"} lvl={build.building.mine} Img={"mine"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.lumberman)
            setİmgPath("lumberman")
            click(build.required.lumberman)
            }}>
          <BuildCard buildings={buildings} name={"Lumberman"} lvl={build.building.lumberman} Img={"lumberman"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.fisher)
            setİmgPath("fisher")
            click(build.required.fisher)
            }}>
          <BuildCard buildings={buildings} name={"Fisher"} lvl={build.building.fisher} Img={"fisher"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.mineDepot)
            setİmgPath("mineDepot")
            click(build.required.mineDepot)
            }}>
          <BuildCard buildings={buildings} name={"Mine Depot"} lvl={build.building.mineDepot} Img={"mineDepot"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.logPile)
            setİmgPath("logPile")
            click(build.required.logPile)
            }}>
          <BuildCard buildings={buildings} name={"Log Pile"} lvl={build.building.logPile} Img={"logPile"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.hut)
            setİmgPath("hut")
            click(build.required.hut)
            }}>
          <BuildCard buildings={buildings} name={"Hut"} lvl={build.building.hut} Img={"hut"}/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Resources;

