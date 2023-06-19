import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import ResCardFront from "./ResCardFront";
import ResCardBack from "./ResCardBack";
import PropTypes from "prop-types";

const ResourceCard = ({available,production,capacity,labor,shakedown,trade,consumption,Img}) =>{
    return (
    <>
    <div className="resourceCard">
      <Flippy flipOnHover={true} flipDirection="horizontal" flipSpeedBackToFront={20} flipSpeedFrontToBack={20}>
        <FrontSide className="frontSiteCss" animationDuration={300}>
          <ResCardFront Img={Img} available={available}/>
        </FrontSide>
        <BackSide className="frontSiteCss" animationDuration={300}>
          <ResCardBack available={available} production={production} capacity={capacity} labor={labor}
          shakedown={shakedown} trade={trade} consumption={consumption}/>
        </BackSide>
      </Flippy>
    </div>
    </>
  );
}

ResourceCard.propTypes = {
  available: PropTypes.number,
  production: PropTypes.number,
  capacity: PropTypes.number,
  labor: PropTypes.number,
  shakedown: PropTypes.number,
  trade: PropTypes.number,
  consumption: PropTypes.number,
  Img: PropTypes.string,
}
ResourceCard.defaultProps = {
  Img: "curse",
  available: 0,
  production: undefined,
  capacity: undefined,
  labor: undefined,
  shakedown: undefined,
  trade: undefined,
  consumption: undefined,

}

export default ResourceCard;

