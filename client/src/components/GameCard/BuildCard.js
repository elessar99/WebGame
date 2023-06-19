import "./BuildCard.css"
import PropTypes from "prop-types";
const BuildCard = ({Img,lvl,name,buildings}) =>{
    const imgUrl = require(`../../img/${buildings}/${Img}.png`);
    return (
    <>
    <div className="buildCardBack">
      <div className="buildCardBody" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className="buildLvlBody">
          <div className="buildLvl">
            {lvl}
          </div>
        </div>
        <div className="buildNameBody">
          <div className="buildName">
            {name}
         </div>
        </div>
      </div>
      </div>
    </>
  );
}

BuildCard.propTypes = {
  Img: PropTypes.string,
  lvl: PropTypes.number,
  name: PropTypes.string,
  buildings: PropTypes.string,

}
BuildCard.defaultProps = {
  Img: "mine",
  lvl: 1,
  name: "Mine",
  buildings: "resourceBuildings",

}

export default BuildCard;

