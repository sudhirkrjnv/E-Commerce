import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {

  const [input, setInput] = useState({
    email: "", password: ""
  });

  const inputHandler = (e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    //console.log(input);
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/login', input, 
        {
          headers:{'Content-Type':'application/json'}, 
          withCredentials:true
        }
      )
      if(res.data.success){
        console.log(res.data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="loginbox">
          <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "1.5em", fontWeight: "bold", }}> Sign in </p>
          <form style={{ marginTop: "10px", marginLeft: "20px" }} onSubmit={submitHandler}>
            <div>
              <label>Email</label><br />
              <input className="inputboxes" type="text" name="email" id="email" value={input.email} onChange={inputHandler} />
            </div><br />
            <div>
              <label>Password</label><br/>
              <input className="inputboxes" type="password" name="password" id="password" value={input.password} onChange={inputHandler} />
            </div> <br />
            <button className="continuetologin" type="submit">Continue</button>
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
