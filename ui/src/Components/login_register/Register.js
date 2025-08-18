import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

function Register() {

  const [registerdata, setRegisterdata] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  });
  console.log(registerdata);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="registerbox">
          <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "1.5em", fontWeight: "bold"}}> Register </p>
          <form style={{ marginTop: "10px", marginLeft: "20px" }}>
            <div>
              <label>Name</label><br />
              <input className="boxes" onChange={e=>setRegisterdata({...registerdata, name:e.target.value})} value={registerdata.name} type="text" name="name" id="name" />
            </div><br />
            <div>
              <label>Email</label><br />
              <input className="boxes" onChange={e=>setRegisterdata({...registerdata, email:e.target.value})} value={registerdata.email} type="text" name="email" id="email" />
            </div><br />
            <div>
              <label>Mobile Number</label><br />
              <input className="boxes" onChange={e=>setRegisterdata({...registerdata, mobile:e.target.value})} value={registerdata.mobile} type="text" name="mobile" id="mobile" />
            </div><br />
            <div>
              <label>Password</label><br />
              <input className="boxes" onChange={e=>setRegisterdata({...registerdata, password:e.target.value})} value={registerdata.password} type="password" name="password" id="password" />
            </div> <br />
            <div>
              <label> Confirm Password</label> <br />
              <input className="boxes" onChange={e=>setRegisterdata({...registerdata, cpassword:e.target.value})} value={registerdata.cpassword} type="password" name="cpassword" id="cpassword" />
            </div><br />
            <button className="continue">Continue</button>
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
