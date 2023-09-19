import axios from 'axios'


const getAllTrainingDetails = async ()=> {
    const Tdetails = await axios.get(`http://localhost:8080/admin`)
    return Tdetails
}


const trainingDetails = async (data) => {
    console.log("called api")
    const training = await axios.post('http://localhost:8080/admin/TrainingDetailsAdmin',data);
    return training;
}

const updateDetails=async(id)=>{
    console.log("called api")
    const training = await axios.patch(`http://localhost:8080/admin/EditTrainingDetailsAdmin/${id}`);
    return training;
}

const deletedetails=async(id)=>{
    const training = await axios.delete(`http://localhost:8080/admin/DeleteTrainingDetailsAdmin/${id}`);
    return training;
}






export default {getAllTrainingDetails,trainingDetails,updateDetails,deletedetails}

