import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";

const book = () => {
  return (
    <>
      <div className='service'>
        <div className='head'>
          <h1>Real Time Tracking Details</h1>
        </div>

        <div className='levels'>
          <div className='heart'>
          <iframe width="500" height="300" title='heart' src="https://thingspeak.com/channels/1813409/charts/2?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=60&title=HEART+RATE&type=step&yaxismax=150&yaxismin=0"></iframe>
          </div>
          <div className='oxygen'>
          <iframe width="500" height="300" title='oxygen' src="https://thingspeak.com/channels/1813409/charts/3?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=30&title=SPO2&type=line&yaxismax=150&yaxismin=0"></iframe>
          </div>
        </div>
        <div>
          <nav className='help'><Link to="/"><div className='back'>Goback</div> </Link></nav>
        </div>


      </div>
    </>


  )
}

export default book