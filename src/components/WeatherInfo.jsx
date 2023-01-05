import React from "react";
import { WiDayWindy, WiSunrise, WiSunset, WiHumidity, WiSmallCraftAdvisory, WiThermometer } from "react-icons/wi";
function WeatherInfo(props) {
  const getTime = (timeStamp) =>{
    return `${new Date (timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{props.data.name}</p>
        </div>
        <div className="temp">
          {props.data.main ? (
            <h1>{Math.floor(((props.data.main.temp.toFixed() - 32) * 5) / 9)}°C</h1>
          ) : null}
        </div>
        <div className="description">
          {props.data.weather ? <p>{props.data.weather[0].main}</p> : null}
        </div>
        
        <div className="bottom">
          <div className="bottom-info">
            <WiHumidity size={40} color='#fff'></WiHumidity>
            {props.data.main ? <p className="bold">{props.data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="bottom-info">
            <WiDayWindy size={40} color='#fff'></WiDayWindy>
            {props.data.wind ? (
              <p className="bold">{props.data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
          <div className="bottom-info">
            <WiSunrise size={40} color='#fff'></WiSunrise>
            {props.data.sys ? (
              <p className="bold">{getTime(props.data.sys.sunrise)}</p>
            ) : null}
            <p>Sunrise</p>
          </div>
          <div className="bottom-info">
            <WiSunset size={40} color='#fff'></WiSunset>
            {props.data.sys ? (
              <p className="bold">{getTime(props.data.sys.sunset)}</p>
            ) : null}
            <p>Sunset</p>
          </div>
          <div className="bottom-info">
              <WiSmallCraftAdvisory size={40} color='#fff'></WiSmallCraftAdvisory>
              {props.data.visibility ? (<p className="bold">{Math.abs((props.data.visibility)/1000)} KM</p>) : null}
              <p>Visibility</p>
          </div>
          <div className="bottom-info">
              <WiThermometer size={40} color='#fff'></WiThermometer>
              {props.data.main ? (<p className="bold">{props.data.main.pressure}hPa</p>) : null}
              <p>Pressure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
