import BuildCard from "../../components/GameCard/BuildCard";
import Button from "../../components/Buttons/Button"
import "./css/Facilities.css"
import build from "../../AaBackend/binalar";
import { useEffect, useState } from "react";
const Facilities = () =>{
  const [required, setRequired] = useState(build.required.shipyard);
  const [imgPath, setİmgPath] = useState("shipyard");
  const [woodControl, setWoodControl] = useState(false);
  const [ironControl, setİronControl] = useState(false);
  const iron = 134;
  const wood = 400;
  const click = (i) =>{
    i.log <= wood ? setWoodControl(true) : setWoodControl(false);
    i.iron <= iron ? setİronControl(true) : setİronControl(false);
    console.log("wood: "+ woodControl+" - iron: "+ ironControl)
  }
  useEffect(() => {
    click(build.required.shipyard)
  }, []);
  
  const buildings = "facilitiesBuildings";
    return (
    <>
      <div className="resourcePage">
        <div className="buildResource" >
          <div className="buildLeft">
            <div className="build16">
              <div className="containerImg">
                <img className="buildImg" src={require(`../../img/facilitiesBuildings/${imgPath}.png`)}></img>
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
                        <th>işçi</th>
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
                        <td>2</td>
                        <td>200</td>
                        <td>75</td>
                        <td>12</td>
                        <td>10</td>
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
            setRequired(build.required.shipyard)
            setİmgPath("shipyard")
            click(build.required.shipyard)
            }}>
            <BuildCard buildings={buildings} name={"shipyard"} lvl={build.building.shipyard} Img={"shipyard"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.harbor)
            setİmgPath("harbor")
            click(build.required.harbor)
            }}>
          <BuildCard buildings={buildings} name={"harbor"} lvl={build.building.harbor} Img={"harbor"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.bazaar)
            setİmgPath("bazaar")
            click(build.required.bazaar)
            }}>
          <BuildCard buildings={buildings} name={"bazaar"} lvl={build.building.bazaar} Img={"bazaar"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.merchant)
            setİmgPath("merchant")
            click(build.required.merchant)
            }}>
          <BuildCard buildings={buildings} name={"merchant"} lvl={build.building.merchant} Img={"merchant"}/>
          </div>
          <div onClick={()=>{
            setRequired(build.required.cave)
            setİmgPath("cave")
            click(build.required.cave)
            }}>
          <BuildCard buildings={buildings} name={"cave"} lvl={build.building.cave} Img={"cave"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities;

