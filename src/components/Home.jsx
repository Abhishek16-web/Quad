import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as   Route, Link } from "react-router-dom";
import "../App.css";

const Home = () => {

const [user, setUser] = useState([])

async function fetchdata (){
const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
const json = await response.json();
setUser(json);
console.log(json);

}
useEffect(() => {
fetchdata();

}, [])


return (
  <>
  <div className='heading'>
    <h1>!!! Booy your Tickets Now !!!</h1>
  </div>
  
  <div className="container">
    {user.map(data => (
      <div className='item'>
        <div className='imgbox'>
          <img src={data.show.image.medium} alt="movie " />
        </div>
        <div className='info'>
          <div>
          Movie Name : {data.show.name}
          </div>
          <div>
          Status : {data.show.status}
          </div>
          <div>
          Duration : {data.show.runtime}
          </div>
          <div>
          Rating : {data.show.rating.average}
          </div>
          <div>
          Language : {data.show.language}
          </div> 
        <nav className='btn'><Link to="/book"> Book Now </Link></nav>
      
        </div>
      </div>
    ))}
  </div>
  </>

)
}

export default Home