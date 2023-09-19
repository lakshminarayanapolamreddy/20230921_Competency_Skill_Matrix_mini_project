import axios from 'axios'

// Register Button Functionality
const saveTrainingDetails = async(Id,Email)=>{
    const RegDetails = await axios.post(`http://localhost:8080/users`,{Id,Email})
    return RegDetails
}

export  {saveTrainingDetails}




