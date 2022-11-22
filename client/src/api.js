import axios from 'axios'

const URL = 'http://localhost:3500';

export const addData = async (data)=>{
    try{
        console.log('trying to send addData request')
        return await axios.post(`${URL}/new`,data)
    }
    catch(error){
        console.log("Error in sending request:",error.message)
    }
}

export const getAllData = async ()=>{
    try{
        return await axios.get(`${URL}/`)
    }
    catch(error){
        console.log("Error in sending request:",error.message)
    }
}

export const getData = async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(error){
        console.log("Error in sending request:",error.message)
    }
}

export const editData = async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(error){
        console.log("Error in sending request:",error.message)
    }
}