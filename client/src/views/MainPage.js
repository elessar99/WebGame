import "./MainPage.css"
import { useLocation } from "react-router-dom";
import '../App.css';
import Login from "../containers/loginRegister/Login";
import Register from "../containers/loginRegister/Register";
const MainPage = () =>{
  const location = useLocation();
  let component;
  if(location.pathname === "/") {
    component = <Login/>;
  }else if (location.pathname === "/login") {
    component = <Login />;
  }else if (location.pathname === "/register") {
    component = <Register />;
  }
    return (
    <>
    <div className="mainPage">
      {component}
    </div>
    </>
    
  );
}

export default MainPage;

