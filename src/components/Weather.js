import React,{useEffect,useState} from "react";
import "../css/style.css";
import axios from "axios";
import "../assets/clouds1.jpg"


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

    // useEffect(() => {
    //     async function getData(){
    //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f771eb6b5fa7305a11fee0dc96d51b6`);
    //         setCity(response.main);
    //     }
    //     getData();
    // },[search])

    // useEffect(  () => {
    //     const fetchApi = async () =>{
    //         const  response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f771eb6b5fa7305a11fee0dc96d51b6`);
    //         setCity(response.main);
    //     }
    //      fetchApi();
    // },[search])
     

    return(
        <>

            <div>
                <h1 className = "heading">Weather Forecast</h1>
            </div>
            <div className="mainbox">
                <div className="inputData">
                     <input 
                    type="search"
                    placeholder="Search any city"
                    value={search}
                    className="inputfield"
                    onChange={(event) => {setSearch(event.target.value) }} />
                    <button class="addBtn" 
                    type="submit"
                    onClick={(event) => {setSearch(event.target.value) }}>
                    <i className="fas fa-search"></i>
                    </button>
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
                {city.temp}&#8451;
                </h1>
                <h3 className="tempmin_max">
                Min : {city.temp_min}&#8451; | Max : {city.temp_max}&#8451;
                </h3>
                </div>
                </div>)
                
                }
            </div>
        </>
    )
}

export default Weather;