import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import ResCardFront from "./ResCardFront";
import ResCardBack from "./ResCardBack";

const ResourceCard = () =>{
    return (
    <>
    <div className="resourceCard">
      <Flippy flipOnHover={true} flipDirection="horizontal" flipSpeedBackToFront={20} flipSpeedFrontToBack={20}>
        <FrontSide animationDuration={300}>
          <ResCardFront/>
        </FrontSide>
        <BackSide animationDuration={300}>
          <ResCardBack/>
        </BackSide>
      </Flippy>
    </div>
    </>
  );
}

export default ResourceCard;

