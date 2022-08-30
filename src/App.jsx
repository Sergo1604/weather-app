import React from 'react'
import Info from './components/Info'
import Form from './components/form'
import Weather from './components/weatherOutput'
import './App.css'


const apiKey = 'a7811f7f52455c0019dba0bfdd047555'

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunRise: undefined,
    sunSet: undefined,
    pressure: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value; 
    if (cityName) {
      const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      const data = await apiUrl.json();
      const sunRiseTime = new Date();
      sunRiseTime.setTime(data.sys.sunrise*1000);
      const sunSetTime = new Date();
      sunSetTime.setTime(data.sys.sunset*1000);
      this.setState({
        inputCity: cityName,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunRise:sunRiseTime.toLocaleTimeString(),
        sunSet: sunSetTime.toLocaleTimeString(),
        pressure:data.main.pressure,
        error: undefined,
      })
    } else {
      this.setState({
        inputCity: cityName,
        temp: undefined,
        city: undefined,
        country: undefined,
        sunRise:undefined,
        sunSet: undefined,
        pressure:undefined,
        error: 'Please, input the city name',
      })

    }
  }

  render() {
    return (< div className='container'> 

      < Info className = 'info'/>
      <div className = 'form-weather'>
      < Form weatherMetod={
      this.gettingWeather
    }/> 
    
    <Weather
      inputCity={
        this.state.inputCity
      }

      country={
        this.state.country
      }

      city={
        this.state.city
      }

      temp={
        this.state.temp
      }

      sunRise={
        this.state.sunRise
      }

      sunSet={
        this.state.sunSet
      }

      error={
        this.state.error
      }

      pressure={
        this.state.pressure
      }
      />
      </div>
      </div >)
  }
}

export default App