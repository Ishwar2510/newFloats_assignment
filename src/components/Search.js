import React, { useState } from 'react'
import './search.css'
import {Link, NavLink} from 'react-router-dom'
function Search() {
  const [input, setinput] = useState("");
  const [weatherData,setWeatherData] = useState([])
  const [cityPresent,setCityPresent] = useState(true);
  const [errMsg , setErrMsg] = useState("")
  const API_KEY = "668a14a241e8323d96804226db1da03c"
  function handleInputChange(e){
    setinput(e.target.value.trim());
    setWeatherData([])
    setCityPresent(true)
    setErrMsg("")

  }
  async function searchData(){
    if(!input){
      alert("pls enter city name");
      return;
    }
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
    console.log(response)
    let responseData = await response.json();
    if(responseData.cod == 404){
      
      setCityPresent(false);
      setErrMsg ( responseData.message)
    }else{
      setWeatherData(responseData)
      console.log(responseData)
    }
    
  }
  return (
    <div className='main'>
    <div className="homeContainer">
     <div className='screens'>
      <div><NavLink to ='/'><h3>Home</h3></NavLink></div>
      <div><h3 style = {{color:"yellow"}}>Search</h3></div>
      <div><h3>Details</h3></div>
     </div>
     <div className='inputcontainer'>
      <input value={input} onChange = {handleInputChange}></input>
      <button onClick={searchData}>Search</button>
     </div>
     <div className='indData'>
     {
      (weatherData.length!=0)?<>
        <Link to={`/details/${weatherData.name}`}><h3>{` ${weatherData.name} /  ${weatherData.sys.country}`}</h3></Link>
        <p><img id = "image" src= {`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></p>
        <h4>{`${(weatherData.main.temp - 273.15).toFixed(0)} `}<sup>o</sup> {`c / ${weatherData.weather[0].description}`}</h4>
        <h4>{`Temp Range : ${(weatherData.main.temp_min - 273.15).toFixed(0)}c - ${(weatherData.main.temp_max - 273.15).toFixed(0)}c`}</h4>
        <h4>{`Feels Like : ${(weatherData.main.feels_like - 273.15).toFixed(0)} `}<sup>o</sup>c</h4>
        <h4>{`Humidity: ${weatherData.main.humidity}`}</h4>
        <button className = "favAdd">a</button>
        
      </>:
      cityPresent?"":<h3 className='errMsg'>{errMsg.toUpperCase()}</h3>
        
      
     }
     
     </div>
     
    </div>
    </div>
  )
}

export default Search