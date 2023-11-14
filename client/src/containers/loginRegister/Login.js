import { NavLink } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Input/Input';
import "./Login.css"
const Login = () =>{


    return (
    <>
        <div className='loginForm'>
            <Input name={"User Name"}/>  
            <Input name={"Password"} type={"password"}/>
            <NavLink className={"logNavLink"} to={"/game/overview"}>
                <Button bgColor={"linear-Gradient(to right, #FC6E08, #F8DA7A, #FC6801)"}  name={"Login"}/>
            </NavLink>
            <NavLink className={"navlink"}>Haven't you registered yet?</NavLink>
        </div>
    </>
    
  );
}

export default Login;

