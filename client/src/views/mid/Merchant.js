import { useEffect, useState } from "react";
import MerchantCard from "../../components/GameCard/MerchantCard";
import "./css/Merchant.css"
import Button from "../../components/Buttons/Button";

const Merchant = () =>{
  const [amounts, setAmounts] = useState([0, 0, 0, 0, 0, 0]);
  const [buyValue, setBuyValue] = useState(0);
  const [sellValue, setSellValue] = useState(0);
  const [tax, setTax] = useState(0.85);
  useEffect(() => {
    const sell = Math.floor(((amounts[0]/10 + amounts[1]/5 + amounts[2]*3/2)*tax)+0.00001);
    const buy = Math.ceil((amounts[3]/10 + amounts[4]/5 + amounts[5]*3/2)-0.00001);
    setBuyValue(buy)
    setSellValue(sell)
  }, [amounts]);
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
            <MerchantCard Img={"wood"} name={"Wood"} amount={amounts[0]} onAmountChange={(value) => handleAmountChange(0, value)}/>
            <MerchantCard Img={"iron"} name={"Iron"} amount={amounts[1]} onAmountChange={(value) => handleAmountChange(1, value)}/>
            <MerchantCard Img={"curse"} name={"Curse"} amount={amounts[2]} onAmountChange={(value) => handleAmountChange(2, value)}/>
            <div className="amountM sellM">
              {Math.round((amounts[0]/10 + amounts[1]/5 + amounts[2]*3/2)*10)/10}
            </div>
          </div>
          
          <div>
            <div className="buysell">Buy</div>
            <MerchantCard Img={"wood"} name={"Wood"} amount={amounts[3]} onAmountChange={(value) => handleAmountChange(3, value)}/>
            <MerchantCard Img={"iron"} name={"Iron"} amount={amounts[4]} onAmountChange={(value) => handleAmountChange(4, value)}/>
            <MerchantCard Img={"curse"} name={"Curse"} amount={amounts[5]} onAmountChange={(value) => handleAmountChange(5, value)}/>
            <div className="amountM buyM">
              {Math.round((amounts[3]/10 + amounts[4]/5 + amounts[5]*3/2)*10)/10}
            </div>
          </div>
        </div>
        <div className="merchantBalance">
          <div className="merchantBalanceBlock" >
            <div className="BalanceBlock">
              <img className="balanceImg" src={require(`../../img/resource/wood.png`)}/>
              10
            </div>
            <div className="BalanceEquality">
              =
            </div>
            <div className="BalanceBlock">
            <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
              1
            </div>
          </div>
          <div className="merchantBalanceBlock" >
            <div className="BalanceBlock">
              <img className="balanceImg" src={require(`../../img/resource/iron.png`)}/>
              5
            </div>
            <div className="BalanceEquality">
              =
            </div>
            <div className="BalanceBlock">
            <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
              1
            </div>
          </div>


          <div className="merchantBalanceBlock" >
            <div className="BalanceBlock">
              <img className="balanceImg" src={require(`../../img/resource/curse.png`)}/>
              2
            </div>
            <div className="BalanceEquality">
              =
            </div>
            <div className="BalanceBlock">
            <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
              3
            </div>
          </div>

          <div className="merchantBalanceBlock" >
            <div className="merchantResult">
              <div className="merchantSellBuy">
                <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
                <div className="txGreen">
                {sellValue}
                </div>
              </div>
              <div className="merchantSellBuy">
                <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
                <div className="txRed">
                {buyValue}
                </div>
              </div>
              <div className="merchantSellBuy">
                <img className="balanceImg" src={require(`../../img/resource/gold.png`)}/>
                {sellValue==buyValue && (<div>
                  0
                </div>)}
                {sellValue<buyValue && (<div className="txRed" >
                  {buyValue - sellValue}
                </div>)}
                {sellValue>buyValue && (<div className="txGreen">
                  {sellValue - buyValue}
                </div>)}
              </div>
              <div>
                {sellValue==buyValue && (<Button name={"Result"}></Button>)}
                {sellValue<buyValue && (<Button bgColor={"rgb(255, 86, 86)"} color={"rgb(255, 26, 26)"} name={"Result"}></Button>)}
                {sellValue>buyValue && (<Button bgColor={"rgb(10, 255, 60)"} color={"rgb(43, 255, 0)"} name={"Result"}></Button>)}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Merchant;

