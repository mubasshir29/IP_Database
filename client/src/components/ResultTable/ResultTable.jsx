import React,{useEffect, useState} from 'react'
import './ResultTable.css'
import { getAllData } from '../../api'
import {Link,useNavigate} from 'react-router-dom'

function ResultTable() {
    const [result,setResult] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        try{
            console.log(typeof(result))
            getFullData()
        }catch(error){
            console.log(error)
        }
    },[])

    function handleRowClick(row_id){
        console.log("Row_id:",row_id)
        navigate(`/ip/${row_id}`)
    }

    async function getFullData(){
        const allData = await getAllData()
        console.log(allData)
        setResult(allData.data)
    }
  return (
    <div className='table-container'>
        <table className='results'>
            <thead className='table-head'>
                <tr>
                    <td>S.No</td>
                    <td>IP Address</td>
                    <td>Subnet Mask</td>
                    <td>Subnet</td>
                    <td>Description</td>
                    <td>Location</td>
                </tr>
            </thead>
            <tbody>
                {result.map((entry,index)=>(
                    <tr onClick={()=>handleRowClick(entry._id)} key={entry._id}>
                        <td>{index+1}</td>
                        <td>{entry.ip}</td>
                        <td>{entry.mask}</td>
                        <td>{entry.subnet}</td>
                        <td>{entry.description}</td>
                        <td>{entry.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable