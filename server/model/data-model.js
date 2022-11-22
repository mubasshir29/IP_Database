import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'


const dataSchema = mongoose.Schema({
    ip:String,
    mask: String,
    subnet: String,
    description: String,
    location: String
})

autoIncrement.initialize(mongoose.connection);
dataSchema.plugin(autoIncrement.plugin,"entry")


const dataModel = mongoose.model("entry",dataSchema )

export default dataModel;