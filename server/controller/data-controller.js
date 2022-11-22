import Data from './../model/data-model.js'

export const getAllData = async (req,res)=>{
    try{
        const data = await Data.find()
        res.status(201).json(data)
    }
    catch(error){
        console.log("Error")
    }
}

export const getData = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log('ID:',id)
        const data = await Data.findById(id)
        res.status(201).json(data)
    }
    catch(error){
        console.log("Error")
    }
}

export const addData = async (req,res)=>{
    console.log('In data controller')
    const data = new Data(req.body)
    try{
        await data.save();
        res.status(201).json({message:"Successfully added"})
    }
    catch(error){
        console.log("Error in adding data")
    }
}

export const editData = async (req,res)=>{
    console.log('In data controller')
    const data = new Data(req.body)
    try{
        await data.save();
        res.status(201).json({message:"Successfully added"})
    }
    catch(error){
        console.log("Error in adding data")
    }
}