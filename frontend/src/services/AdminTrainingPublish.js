import axios from 'axios';
const trainingDetails = async (data) => {
    console.log("called api")
    const training = await axios.post('https://localhost:8080/TrainingDetailsAdmin',data);
    console.log("completed")
    return training;
}
export default(trainingDetails)