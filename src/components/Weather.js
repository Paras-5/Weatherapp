import React,{useEffect,useState} from "react";
import "./css/style.css";
const Weather =() =>{

    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("");

    useEffect(  () => {
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f771eb6b5fa7305a11fee0dc96d51b6`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
         fetchApi();
    },[search])
    return(
        <>

            <div>
                <h1 className = "heading">Weather Forecast</h1>
            </div>
            <div className="mainbox">
                <div className="inputData">
                     <input 
                    type="search"
                    value={search}
                    className="inputfield"
                    onChange={ (event) => {setSearch(event.target.value) } }/>
                </div>
                {!city ? (
                     <p className="ErrorMessage"> No Data Found </p>
                ) : (
                <div className="Data">    
                <div className="information">
                <h2 className="location">
                <i className="fas fa-cloud-sun"></i> {search}
                </h2>
                <h1 className="temperature">
                {city.temp}Cel
                </h1>
                <h3 className="tempmin_max">
                Min : {city.temp_min}Cel | Max : {city.temp_max}Cel 
                </h3>
                </div>
                </div>)
                
                }
            </div>
        </>
    )
}

export default Weather;