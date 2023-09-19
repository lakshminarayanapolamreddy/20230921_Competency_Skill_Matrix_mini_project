import React, { useState } from "react";
import { toast } from 'react-toastify';
import saveTrainingDetails from "../../services/userRegister";


function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    skills: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ""],
    });
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSkillChange = (event, index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = event.target.value;
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evt.preventDefault();
    console.log(state);
    let data= LoginService.saveDetails(state).then((d)=>{
      
 
      if (d.data.message==="User added"){
        toast.success(d.data.message);
      }

      if (d.data.message==="Password must have a capital letter a small letter and a number and include any special character"){
        toast.warning(d.data.message);
      }

      if (d.data.message=== "In email domain name should contain jmangroup and only small letters"){
        toast.error(d.data.message);
      }


      if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      }

      if (d.data.message=== "All fields are mandatory ; Please fill it."){
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
    <div className="signup-container">
      <div className="form-container">
        <h2 className="title">Signup</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Add Skills</label>
            <button type="button" onClick={handleAddSkill}>
              Add
            </button>
          </div>
          {formData.skills.map((skill, index) => (
            <div key={index} className="skill-row">
              {/* <label>Skill {index + 1}</label> */}
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(e, index)}
              />
              <button type="button" onClick={() => handleRemoveSkill(index)}>
                Remove
              </button>
            </div>
          ))}
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
