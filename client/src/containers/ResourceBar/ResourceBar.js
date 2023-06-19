import ResourceCard from "../../components/GameCard/ResourceCard";
import "./ResourceBar.css"

const ResourceBar = () =>{
    return (
    <>
     <div className="resourceBody">
        <ResourceCard available={400} Img={"wood"} production={548} capacity={25999999} />
        <ResourceCard available={134} Img={"iron"} production={841} capacity={34995819}/>
        <ResourceCard available={45437} Img={"gold"} shakedown={124} trade={15}/>
        <ResourceCard available={2415} Img={"curse"} production={248} consumption={179}/>
        <ResourceCard available={78} Img={"worker"} labor={345}/>
      </div>
    </>
  );
}

export default ResourceBar;

