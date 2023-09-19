const db = require("../entities");
const UA_table = db.UserAdminRegTable;

const create_user_admin = async (req, res) => {
  console.log(req.body.name);

  const email_pattern=/^[a-z.-]+@jmangroup\.com$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@#$%^&*!]{8,}$/

  const { name,email, password } = req.body;

  if (name && password && email) {
    const email_pattern=/^[\w.-]+@jmangroup\.com$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@#$%^&*!]{8,}$/
    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await UA_table.findOne({ where: { Email: email } });
        console.log(existingUser,"BAckend signup")
      if (existingUser) {
        res.status(200).json({ message: "User already exists!" });
      } 

     // const email_pattern=/^[\w.-]+@jmangroup\.com$/
      else if(!email_pattern.test(email)){
        res.status(200).json({ message: "In email domain name should contain jmangroup and only small letters"})
      }


      
      else if(!password_pattern.test(password)){
        res.status(200).json({ message: "Password must have a capital letter a small letter and a number and include any special character"});  
      }

      else {
        // Create a new user in the database
        const newUser = await UA_table.create({
          FullName: name,
          Email: email,
          Password: password,
        });
        console.log(newUser);
        res.status(200).json({ message: "User added" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(200).json({ message: "All fields are mandatory ; Please fill it."});
  }
};

module.exports = {
  create_user_admin,
};

