import React,{useState} from 'react';
import './NewEntry.css';
import {addData} from './../../api';
import { useNavigate } from 'react-router-dom';

const defaultData = {
  ip:'',
  mask:'',
  subnet:'',
  description:'',
  location:''
}

function NewEntry() {

  let navigate = useNavigate()
  
  const [data,setData] = useState(defaultData)

  function handleInputChange(e){
    //console.log(e.target.name,":",e.target.value)

    setData({...data, [e.target.name]:e.target.value})
    //console.log(data)
  }

  async function handleSaveButton(){
    await addData(data)
    navigate('/')
    //console.log(data)
  }
  return (
        <div className='container'>
            <h2 className='title'>Add details</h2>
            <form className='new-form'>
                <input name="ip" onChange={handleInputChange} placeholder='IP Address'></input><br/>
                <input name="mask" onChange={handleInputChange} placeholder='Subnet mask'></input><br/>
                <input name="subnet" onChange={handleInputChange} placeholder='Subnet'></input><br/>
                <input name="description" onChange={handleInputChange} placeholder='Description'></input><br/>
                <input name="location" onChange={handleInputChange} placeholder='Location'></input><br/>
                
            </form>
            <button type='button' className='save-button' onClick={()=>handleSaveButton()}>Save</button>
        </div>
  )
}

export default NewEntry;