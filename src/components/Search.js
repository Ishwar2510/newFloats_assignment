import React, { useState } from 'react'
import './search.css'
function Search() {
  const [input, setinput] = useState([]);
  function handleInputChange(e){
    setinput(e.target.value);
  }
  async function searchData(){

  }
  return (
    <div className='main'>
    <div className="homeContainer">
     <div className='screens'>
      <div><h3>Home</h3></div>
      <div><h3>Search</h3></div>
      <div><h3>Details</h3></div>
     </div>
     <div className='inputcontainer'>
      <input value={input} onChange = {handleInputChange}></input>
      <button onClick={searchData}>Search</button>
     </div>
     <div className='indData'>

     </div>
     
    </div>
    </div>
  )
}

export default Search