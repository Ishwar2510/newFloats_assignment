import * as dotenv from 'dotenv'
dotenv.config()

export function addCity(city_name){
    return {
        type:"add_city",
        payload:city_name
    }

}

export function removeCity(city_name){
    return {
        type:"remove_city",
        payload:city_name
    }
}


export  function fetchData(dispatch,city_name){
    return async function(){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${process.env.API_key}`
        let response = await fetch(api)
        let data = response.json();
        return dispatch({
            type:"fetch_data",
            payload:data
        })
    }
}