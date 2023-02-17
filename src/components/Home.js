import React, { useEffect, useState } from 'react'
import dummydata from './dummydata';
import './home.css'
import { NavLink } from 'react-router-dom';



const API_KEY = "668a14a241e8323d96804226db1da03c"

function Home() {
  // console.log(process.env)
  const [current_location, setCurrent_location] = useState({
    longitude: 23,
    latitude: 23,
    isAvailable: false,
  });
  const [weatherData, setWeatherData] = useState(dummydata);
  const [favList, setFavList] = useState(["jamshedpur", "pune", "delhi", "kolkata","jamshedpur", "pune", "delhi", "kolkata"])

  if (!current_location.isAvailable) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        setCurrent_location({
          longitude: data.coords.longitude,
          latitude: data.coords.latitude,
          isAvailable: true,
        });
      });
    } else {
      alert("Geo loaction not supported by the device");
    }
  }
   async function fetchData(){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${current_location.latitude}&lon=${current_location.longitude}&appid=${API_KEY}`)
    const data = await response.json();
    console.log(data)
    setWeatherData(data);
  }
  useEffect(()=>{fetchData()},[current_location])

  return (
    <div className='main'>
    <div className="homeContainer">
     <div className='screens'>
      <div><h3 style = {{color:"yellow"}}>Home</h3></div>
     <div> <NavLink to='/citysearch'><h3>Search</h3></NavLink></div>
      <div><h3>Details</h3></div>
      
     </div>
     <div className='currentLocation'>
        <h4>Current Location</h4>
        <h3>{` ${weatherData.name} / ${weatherData.sys.country}`}</h3>
        <p><img src = {`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></p>
        <h4>{`${(weatherData.main.temp - 273.15).toFixed(0)} `}<sup>o</sup> {`c / ${weatherData.weather[0].description}`}</h4>
     </div>
     <div className="favList">
        {favList.map((elem,index)=>{
            return <div key = {index} className="favDiv">
                <p id ="cityName">{weatherData.name}</p>
                <p>{weatherData.sys.country}</p>
                <button>R</button>
            </div>
        })}
     </div>
    </div>
    </div>
  );
}

export default Home;