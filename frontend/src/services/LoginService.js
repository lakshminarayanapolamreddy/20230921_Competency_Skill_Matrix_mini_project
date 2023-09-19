import axios from 'axios';

// for SignUp
const saveDetails = async(data)=>{
    const Tdetails = await axios.post(`http://localhost:8080/`,data)
    return Tdetails
}


// for Login 
const checkDetails = async(data)=>{
    const Tdetails = await axios.post(`http://localhost:8080/loginDetails`,data)
    return Tdetails
}


export default {saveDetails,checkDetails}




