import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './details.css'

function Details() {
  const {cityname} = useParams();
  const [foreCastData, setForeCastData] = useState("");
  const API_KEY = "668a14a241e8323d96804226db1da03c"
  async function fetchData(){
    
    const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}`)
    
    const data = await response.json()
    console.log(data);
    setForeCastData(data);
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div className="main" >
      <div className="homeContainer">
        <div className="screens">
          <div><NavLink to = '/'>
            <h3>Home</h3></NavLink>
          </div>
         <div> <NavLink to = '/citysearch'>
            <h3>Search</h3></NavLink>
          </div>
          <div>
            <h3 style = {{color:"yellow"}}>Details</h3>
          </div>
        </div>
        <h3>{cityname} </h3>
        <h3>  5 Day / 3 Hour Forecast</h3>
        <div className = "foreCastContainer">
        
          { (foreCastData)?
              foreCastData.list.map((elem,index)=>{
                return <div className = "indForeCast">
                  <h4>{`${elem.dt_txt.split(" ")[0]} / ${elem.dt_txt.split(" ")[1].split(":")[0]}:00`}</h4>
                  <img src= {`http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`}></img>
                  <h4>{(elem.main.temp - 273.15).toFixed(0)}<sup>o</sup>c </h4>
                  <h4>{elem.weather[0].main}</h4>
                  
                  
                </div>
              }):""
          }

        </div>
      </div>
    </div>
  );
}

export default Details