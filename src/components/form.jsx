import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <div className='input'>
        <h1>Please, input your city</h1>
        <form onSubmit={this.props.weatherMetod} className='form'>
          <input type="text" name="city" placeholder="Enter your city"/>
          <button className='btn'>GetWeather</button>
        </form>
      </div>
    )
  }
}
export default Form
