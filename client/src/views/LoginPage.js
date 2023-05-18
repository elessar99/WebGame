import "./LoginPage.css"

import '../App.css';
import Login from "../containers/loginRegister/Login";
import Register from "../containers/loginRegister/Register";
const MainPage = () =>{
    return (
    <>
    <div className="mainPage">
      <Login/>
    </div>
    </>
    
  );
}

export default MainPage;

