import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login() {

  const[logindata, setLogindata] = useState({
    Email:"",
    Password:""
  });
  console.log(logindata);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="loginbox">
          <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "1.5em", fontWeight: "bold", }}> Sign in </p>
          <form style={{ marginTop: "10px", marginLeft: "20px" }}>
            <div>
              <label>Email</label><br />
              <input className="inputboxes" onChange={(e)=>setLogindata({...logindata, Email:e.target.value})} value={logindata.Email} type="text" name="email" id="email" />
            </div><br />
            <div>
              <label>Password</label><br />
              <input className="inputboxes" onChange={(e)=>setLogindata({...logindata, Password:e.target.value})} value={logindata.Password} type="password" name="password" id="password" />
            </div> <br />
            <button className="continuetologin">Continue</button>
          </form>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p> New to Amazon</p>
        </div>
        <Link className="link" to="/register/">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="registerhere">Create your amazon Account</p>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Login;
