import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  const API_key = '1894521a53388b3a2e931b6fc6a28694';
  const [cityName, setCityName] = useState("");
  const [showResult, setShowResult] = useState()
  const fetchWeather = async () => {
     const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
     console.log(response);
     setShowResult(response);
  }
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      border: "1px solid #5483B3",
      width: "500px",
      borderRadius: "10px",
      background: "linear-gradient(59deg, cornflowerblue, skyblue, aqua)",
      padding: "20px",
      margin: "0 auto"
    }}>
      <h2>Weather Application</h2>
      <div>
        <input type="text" placeholder = 'Enter your city' 
        style={{
          border: "none",
          padding: "10px 30px",
          borderRadius: "9px",
          outline: "none",
          margin: "10px",
          background: "#bb99ff"
        }}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        />
        <button style={{
          border: "2px solid cornflowerblue",
          padding: "10px 20px",
          borderRadius: "10px",
          margin: "2px",
          background: "cornflowerblue",
          cursor: "pointer"
        }}
        onClick={fetchWeather}
        >Get Weather</button>
      </div>
      <div style={{
        border: "2px solid #ccc",
        width: "300px",
        borderRadius: "10px",
        margin: "0 auto",
        padding: "30px",
        background: "linear-gradient(45deg, skyblue, aqua)",
      }}>
          {showResult &&  <>
            <div>
              <h3>{showResult.data.name}</h3>
              <p style={{ fontSize: "18px", margin: "10px 0" }}>Temperature: {showResult.data.main.temp} °C</p>
              <p style={{ fontSize: "16px", margin: "10px 0"}}>
                   Weather: {showResult.data.weather[0].description}
             </p>
             <p>Sea Level: {showResult.data.main.sea_level} | Speed: {showResult.data.wind.speed}</p>
            </div>
          </>}
      </div>
    </div>
  )
}

export default App
