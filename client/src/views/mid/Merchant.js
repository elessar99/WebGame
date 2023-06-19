import { useState } from "react";
import MerchantCard from "../../components/GameCard/MerchantCard";
import "./css/Merchant.css"

const Merchant = () =>{
  const [amounts, setAmounts] = useState([0, 0, 0, 0, 0, 0]);

  const handleAmountChange = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };
    return (
    <>
    <div>
      <div className="merchantUp">
        <div className="merchantCards">
          <div>
            <div className="buysell">Sell</div>
            <MerchantCard Img={"wood"} amount={amounts[0]} onAmountChange={(value) => handleAmountChange(0, value)}/>
            <MerchantCard Img={"iron"} amount={amounts[1]} onAmountChange={(value) => handleAmountChange(1, value)}/>
            <MerchantCard Img={"curse"} amount={amounts[2]} onAmountChange={(value) => handleAmountChange(2, value)}/>
          </div>
          
          <div>
            <div className="buysell">Buy</div>
            <MerchantCard Img={"wood"} amount={amounts[3]} onAmountChange={(value) => handleAmountChange(3, value)}/>
            <MerchantCard Img={"iron"} amount={amounts[4]} onAmountChange={(value) => handleAmountChange(4, value)}/>
            <MerchantCard Img={"curse"} amount={amounts[5]} onAmountChange={(value) => handleAmountChange(5, value)}/>
          </div>


        </div>
        <div className="merchantBalance">
          
        </div>
      </div>
      <div className="merchantResult">
        
      </div>
    </div>
    </>
  );
}

export default Merchant;

