import { toast } from 'react-toastify';
import LoginService from "../../services/LoginService";
import { useState } from 'react';
function SignUpForm() {
  const [state, setState] = useState({
    name: "",
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

  const handleOnSubmit = evt => {
    evt.preventDefault();
    console.log(state);
    let data= LoginService.saveDetails(state).then((d)=>{
      if (d.data.message==="User added"){
        toast.success(d.data.message);
      } else if (d.data.message==="Password must have a capital letter a small letter and a number and include any special character"){
        toast.warning(d.data.message);
      } else if (d.data.message=== "In email domain name should contain jmangroup"){
        toast.error(d.data.message);
      } else if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      } else if (d.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(d.data.message);
      }
    })
    .catch(err=>{
      toast.error("Email And Password is not matching")
    })

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleOnSubmit}>
        <h1 className="title">Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="name-input-feild"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="email-input-feild"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="password-input-feild"
        />
        <input 
          type='text' 
          name = 'designation'
          value = {state.designation}
          onChange={handleChange}
          placeholder='Designation' 
          className='designation-input-feild'
        />
        <input
          type='text'
          name = 'mobile'
          value={state.mobile}
          placeholder='Mobile'
          className='mobile-input-feild'
        />
        <button className='add-skill-button'>ADD</button>
        <button type = 'submit' className = 'sign-up-button'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
