import React from 'react'

class Info extends React.Component {
  state = {
    date:new Date().toLocaleDateString()
    
  }
  
  render() {
    return (
      <div className='info'>
        <h1>This is the weather App</h1>
        <p>Find out the weather in your City!</p>
        <p>Today is : {this.state.date}</p>

      </div>
    )
  }
}
export default Info
