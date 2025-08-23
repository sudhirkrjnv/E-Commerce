import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios"

function Register() {

  const [input, setInput] = useState({
    email:"", password:""
  })

  const inputHandler = (e)=>{
    setInput({...input, [e.target.name]:e.target.value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
        headers:{'Content-Type':'application/json'}, withCredentials:true
      })
      if(res.data.success) {
        console.log(res.data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="registerbox">
          <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "1.5em", fontWeight: "bold"}}> Register </p>
          <form onSubmit={submitHandler} style={{ marginTop: "10px", marginLeft: "20px" }}>
            <div>
              <label>Name</label><br />
              <input className="boxes" type="text" name="name" id="name" value={input.name} onChange={inputHandler}/>
            </div><br />
            <div>
              <label>Email</label><br />
              <input className="boxes" type="text" name="email" id="email" value={input.email} onChange={inputHandler}/>
            </div><br />
            <div>
              <label>Mobile Number</label><br />
              <input className="boxes"  type="text" name="mobile" id="mobile" value={input.mobile} onChange={inputHandler}/>
            </div><br />
            <div>
              <label>Password</label><br/>
              <input className="boxes" type="password" name="password" id="password" value={input.password} onChange={inputHandler}/>
            </div> <br />
            <div>
              <label> Confirm Password</label> <br />
              <input className="boxes" type="password" name="cpassword" id="cpassword"/>
            </div><br />
            <button className="continue" type="submit">Continue</button>
          </form>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Already have an Account</p>
        </div>
        <Link className="link" to="/login/">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="loginhere">Login here</p>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Register;
