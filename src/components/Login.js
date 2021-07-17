import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Button from '@material-ui/core/Button';

function Login() {
const history=useHistory();
const [username,setUserName]=useState("")
const [password,setPassword]=useState("");
  
    
const handlepagenav=()=>{
if(username === "admin" && password === "Tek-admin"){
history.push("home")
setUserName("");
setPassword("")
         
} else {
alert("wrong username")
}
}
return (
        <div className="loginform">

        <form className="form-container">
        <div>
        <img className="nav_logos" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
        </div>  
        <div className="forms" >
          
          <label className="w3-text-blues">USERNAME:  </label>
          <input size="25" className="input_bx" placeholder="Enter username" type="text" value={username} onChange={e=>setUserName(e.target.value)}/>
          </div>
          <div className="forms">
          <label className="w3-text-blues">PASSWORD:  </label>
          <input size="25" className="input_bx" placeholder="Enter password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div className="Login_btn">
          <Button variant="contained" color="primary"  onClick={()=> handlepagenav()}>LOGIN</Button>
          </div>
        </form>
        </div>
    )
}

export default Login
