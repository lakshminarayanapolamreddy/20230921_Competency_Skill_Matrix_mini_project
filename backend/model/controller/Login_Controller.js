const db = require("../entities");
const UA_table = db.UserAdminRegTable;
const jwt = require('jsonwebtoken')
// import Cookies from "universal-cookie";
// const Cookies = require("universal-cookie")
// const cookies = new Cookies();
const logindetailscheck = async (req, res) => {
  ;
  const { email, password } = req.body;
  if (password && email) {
    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await UA_table.findOne({ where: { Email: email ,Password:password }});
        console.log(existingUser,"BAckend signin")
      if (existingUser) {
        const token = jwt.sign({email: existingUser.Email}, 'JMAN_USER_LOGIN',{expiresIn: "2d",});
        // Update the JWT column in the backend database
        // await existingUser.update({ JWT: token });
          // cookies.set('token',token)
        console.log(token);
        res.status(200).json({ message: "Login Successful" ,userdata:existingUser,  token:token});
      } else{
        if(existingUser.Email !== email){
            res.status(200).json({message:"User does not Existed; Please Sign Up."})
        }
        if(existingUser.Password !== password){
            res.status(200).json({message:"Password is incorrect!"})
        } 
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Invalid email or password!" });
    }
  } else {
    res.status(200).json({ message: "All fields are mandatory ; Please fill it."});
  }
};

const logout = async (req, res) => {
  // Implement logout functionality here
  try {
    // Get the user ID from the authenticated request (you'll need middleware for this)
    const userId = req.user.userId; // Assuming you have middleware that decodes the JWT token and adds the user object to the request
    // Find the user in the database by ID
    const user = await UA_table.findByPk(userId);
    if (user) {
      // Clear the JWT token in the database
      await user.update({ JWT: null });
      res.status(200).json({ message: "Logout Successful" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Logout failed" });
  }
};

module.exports = {
    logindetailscheck,
};

