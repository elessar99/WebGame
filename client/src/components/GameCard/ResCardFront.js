import "./ResourceCard.css"
import PropTypes from "prop-types";
const ResCardFront = ({available,Img}) =>{
    const imgPath = require(`../../img/resource/${Img}.png`)
    return (
    <>
      <div className="resCardFront">
        <img className="resCardFrontImg" src={imgPath} alt="Resim"/>
        <div className="resCardInfo">{available}</div>
      </div>
    </>
  );
}

ResCardFront.propTypes = {
  Img: PropTypes.string,
  available: PropTypes.number,
}
ResCardFront.defaultProps = {
  Img: "gold",
  available: 0,

}

export default ResCardFront;

