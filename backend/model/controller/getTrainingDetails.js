const db=require("../entities")

const Tdetails_table=db.TrainingTable;
const getTrianing_details= async(req,res)=>{
    
        try{
       
            const allTrainings = await Tdetails_table.findAll();
            if(allTrainings){
                res.status(200).json({ message: "data Fetched" ,alldata:allTrainings});
            }
            else{

                res.status(200).json({message:"data Not Fetched"});
            }
          
        }
        catch (error) {
            console.log(error.message);
        }
    
}

module.exports={
    getTrianing_details,
}