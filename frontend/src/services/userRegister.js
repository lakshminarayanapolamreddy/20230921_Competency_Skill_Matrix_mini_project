import axios from 'axios'
const saveTrainingDetails = async(Id,Email)=>{
    const UserDetails = await axios.post(`http://localhost:8080/`,{Id,Email})
    return UserDetails
}

export  {saveTrainingDetails}