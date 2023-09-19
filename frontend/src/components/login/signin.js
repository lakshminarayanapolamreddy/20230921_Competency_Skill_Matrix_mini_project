import React from "react";
import { useState } from "react";
import LoginService from "../../services/LoginService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const cookies = new Cookies();
  const navigate = useNavigate()
// console.log(cookies.UserData.FullName);
// console.log(cookies.UserData.Role)
// console.log(cookies[0].FullName)
  const handleOnSubmit = evt => {
    evt.preventDefault();

    LoginService.checkDetails(state).then((res)=>{
      console.log(res.data.message);
      if (res.data.message==="Login Successful"){
        toast.success(res.data.message);
        cookies.set("role",res.data.userdata.Role);
        const roles=cookies.get("role");
        cookies.set("Email",res.data.userdata.Email);
        cookies.set("token",res.data.token)
        const token=cookies.get("token");
        console.log(token);
      } else if (res.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(res.data.message);
      }
    }).catch(err=>{
      console.log(err);
      toast.error("Invalid email or password!")
    })
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="sign-in-form" onSubmit={handleOnSubmit}>
      <h1 className="title">Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="email-input-feild"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="password-input-feild"
        />
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;