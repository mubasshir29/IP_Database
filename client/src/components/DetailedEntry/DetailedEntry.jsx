import React from 'react'
import "./DetailedEntry.css"
import {useParams, useNavigate} from 'react-router-dom'
import {getData} from './../../api.js'
import {useEffect,useState} from 'react'


function DetailedEntry() {
    const {id} = useParams()
    const [foundData, setFoundData] = useState({})
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
  return (
    <>
        <div className='detail-card'>        
            <table className='detail-table'>
                <tr>
                    <th>IP</th>
                    <td>{foundData.ip}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{foundData.description}</td>
                </tr>
                <tr>
                    <th>Mask</th>
                    <td>{foundData.mask}</td>
                </tr>
                <tr>
                    <th>Subnet</th>
                    <td>{foundData.subnet}</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>{foundData.location}</td>
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

export default DetailedEntry