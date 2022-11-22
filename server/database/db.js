import mongoose from "mongoose";

const dbConnection = async (username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-j6jeorx-shard-00-00.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-01.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-02.wexyfxp.mongodb.net:27017/?ssl=true&replicaSet=atlas-111qki-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewURlParser:true})
        console.log("Database Connected")
    }
    catch(error){
        console.log("Error in connecting DB: ",error.message)
    }
}

export default dbConnection;