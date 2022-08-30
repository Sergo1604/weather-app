import React from 'react'


class Weather extends React.Component {
  render() {
    return (
      <div className='output'>
        {this.props.inputCity && <div>
          <h1>
            The weather in {this.props.city + ' ' + this.props.country} is
          </h1>
          <p>Sunrise : {this.props.sunRise}</p>
          <p>Sunset : {this.props.sunSet}</p>
          <p>Temperature : {this.props.temp}</p>
          <p>Pressure : {this.props.pressure}</p>
        </div> } 
          <p> {this.props.error}</p>
        </div>
        
      )
  }
}
export default Weather
