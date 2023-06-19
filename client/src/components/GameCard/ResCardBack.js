import "./ResourceCard.css"
import PropTypes from "prop-types";
const ResCardBack = ({available,production,capacity,labor,shakedown,trade,consumption}) =>{
    return (
    <div className="resCardBack">
        <div className="infoContainer">
            <div className="infoName">Available:</div>
            <div className="resInfo">{available}</div>
        </div>
        {(production != undefined) && (<div className="infoContainer">
            <div className="infoName">Production:</div>
            <div className="resInfo">{production}</div>
        </div>)}
        {(capacity != undefined) && (<div className="infoContainer">
            <div className="infoName">Capacity:</div>
            <div className="resInfo">{capacity}</div>
        </div>)}
        {(labor != undefined) && (<div className="infoContainer">
            <div className="infoName">Labor Productivity:</div>
            <div className="resInfo">%{labor}</div>
        </div>)}
        {(shakedown != undefined) && (<div className="infoContainer">
            <div className="infoName">Shakedown:</div>
            <div className="resInfo">{shakedown}</div>
        </div>)}
        {(trade != undefined) && (<div className="infoContainer">
            <div className="infoName">Trade:</div>
            <div className="resInfo">{trade}</div>
        </div>)}
        {(consumption != undefined) && (<div className="infoContainer">
            <div className="infoName">Consumption:</div>
            <div className="resInfo">{consumption}</div>
        </div>)}
        
    </div>
  );
}

ResCardBack.propTypes = {
    available: PropTypes.number,
    production: PropTypes.number,
    capacity: PropTypes.number,
    labor: PropTypes.number,
    shakedown: PropTypes.number,
    trade: PropTypes.number,
    consumption: PropTypes.number,
}
ResCardBack.defaultProps = {
    available: 0,
    production: undefined,
    capacity: undefined,
    labor: undefined,
    shakedown: undefined,
    trade: undefined,
    consumption: undefined,

}

export default ResCardBack;

