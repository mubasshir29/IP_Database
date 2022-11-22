import React from 'react'
import './EditEntry.css'
import {useParams, useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {getData} from './../../api.js'

const defaultData = {
    ip:'',
    mask:'',
    subnet:'',
    description:'',
    location:''
  }

function EditEntry() {
    const {id} = useParams()
    const [foundData, setFoundData] = useState(defaultData)
    const navigate = useNavigate()

    useEffect(()=>{
        getEntryData(id)
    },[])

    async function getEntryData(id){
        const data = await getData(id)
        console.log(foundData.data)
        setFoundData(data.data)
    }

    function handleEditButton(){
        navigate(`/edit/${id}`)
    }

    function handleSaveButton(){

    }

    function handleInputChange(e){
        setFoundData({...foundData, [e.target.name]:e.target.value})
    }
  return (
    <>
    <h4>This is edit page</h4>
    <div className='detail-card'>        
        <table className='detail-table'>
            <tr>
                <th>IP</th>
                <td><input  onChange={(e)=>handleInputChange(e)} name='ip' value={foundData.ip}></input></td>
            </tr>
            <tr>
                <th>Description</th>
                <td><input onChange={(e)=>handleInputChange(e)} name='description' value={foundData.description}></input></td>
            </tr>
            <tr>
                <th>Mask</th>
                <td><input onChange={(e)=>handleInputChange(e)} name='mask' value={foundData.mask}></input></td>
            </tr>
            <tr>
                <th>Subnet</th>
                <td><input onChange={(e)=>handleInputChange(e)} name='subnet' value={foundData.subnet}></input></td>
            </tr>
            <tr>
                <th>Location</th>
                <td><input onChange={(e)=>handleInputChange(e)} name='location' value={foundData.location}></input></td>
            </tr>
            <tr>
                <th>Comments</th>
                <td>Here you can add comments, or any changes happened to this entry.</td>
            </tr>
        </table>
        <div className='btn-container'>
            <button className='detail-button edit-btn' onClick={()=>{handleEditButton()}}>Edit</button>
            <button className='detail-button save-btn' onClick={()=>{handleSaveButton()}}>Save</button>
        </div>

    </div>
</>
  )
}

export default EditEntry