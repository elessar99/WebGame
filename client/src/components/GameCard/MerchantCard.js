import { useState } from "react";
import "./MerchantCard.css"
import PropTypes from "prop-types";
const MerchantCard = ({Img, name, amount, onAmountChange }) =>{
    const imgUrl = require(`../../img/resource/${Img}.png`);
    const handleChange = (e) => {
      const value = e.target.value;
      if (value === "" || (value.includes("+") || value.includes("-"))) {
        onAmountChange(0);
      } else {
        const parsedValue = parseInt(value, 10);
        
        if (!isNaN(parsedValue) && parsedValue >= 0) {
          onAmountChange(parsedValue);
        } else {
          onAmountChange(0);
        }
      }
    };
    return (    
    <>
      <div className="merchantCardBody">
        <div className="imgContainerMC">
            <img className="imgMC" src={imgUrl} />
        </div>
        <div className="nameMC">
            {name}
        </div>
        <div className="inputContainerMC">
           Amount
           <input type="number" min={0} value={amount} onChange={handleChange} className="inputMc" ></input>
        </div>
      </div>
    </>
  );
}

MerchantCard.propTypes = {
  Img: PropTypes.string,
  lvl: PropTypes.number,
  name: PropTypes.string,
  buildings: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,

}
MerchantCard.defaultProps = {
  Img: "wood",
  lvl: 1,
  name: "Wood",
  amount: 0,
  onAmountChange: () => {},

}

export default MerchantCard;

