import { NavLink } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Input/Input';
import "./Register.css"
const Register = () =>{


    return (
    <>
        <div className='registerForm'>
            <Input name={"User Name"}/>  
            <Input name={"Password"} type={"password"}/>
            <Input name={"Email"} type={"email"}/>
            <div className={"registerBtn"}>
              <Button name={"Register"}/>  
            </div>
            
            <NavLink className={"navlink"}>Are you already registered?</NavLink>
        </div>
    </>
    
  );
}

export default Register;

