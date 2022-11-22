import React from 'react'
import './SearchBox.css'

function SearchBox() {
  return (
    <div className='searchbox-container'>
        <form className='searchbox-form'>
            <input className='searchbox' placeholder='Enter IP'></input>
            <button className='search-button'>Search</button>
        </form>

    </div>
  )
}

export default SearchBox