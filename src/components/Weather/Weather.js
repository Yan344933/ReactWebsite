import './Weather.css';
import React, { useState } from 'react';
import DailyWeather from '../DailyWeather/DailyWeather';
import {Button, Container, Row, Spinner} from 'react-bootstrap';
//import Spinner from 'react-bootstrap';


const Weather = () => {

  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc';

  const toggleLoading = () => {
    setLoading(!loading);
  };

  const getWeather = async() => {
    toggleLoading()

    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const temps = data.weatherForecast.map((day) => {
        return {
          "Date": day.forecastDate,
          "week": day.week,
          "maxTemp": day.forecastMaxtemp,
          "minTemp": day.forecastMintemp,
          "remarks": day.forecastWeather,
        }
      })
      setWeather(temps)

    } catch (err){
      console.log(err);
    }

    toggleLoading()
  };

  return (
    <div className="Weather">
      <div class="page-header">
        <Container>
          <Row>
            <div className='col-7 text-sm-end'>
              <span className='align-middle'>Weather Forecast</span>
            </div>
            <div className='col-5'>
              <Button onClick={getWeather}>Fetch</Button>
            </div>
            <div>
                <span className='remarks align-middle'>Click Fetch to find weather forecast for coming days!</span>
            </div>
        </Row>
        </Container>
      </div>
      <Container className='p-md-3'>
        <Row className='justify-content-center'>
        {
          weather &&
          weather.map((forecast) => (
            <DailyWeather day={forecast} key={forecast['Date']}/>
          ))
        }
        </Row>
      </Container>
      {loading? <Spinner animation="border" variant="danger"/>: null} 
    </div>
  );
}

export default Weather;