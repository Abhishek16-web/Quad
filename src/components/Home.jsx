import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";
import img1 from "../image/logo.png"
import img2 from "../image/content.png"

const Navbar = () => {
  return (
    <>
      <header>


        <div className='mainheader'>
          <div class="logo">
            <img src={img1} alt="img" />
          </div>
          <div className='navi'>
            <nav className='btn'><Link to="/"> Home </Link></nav>
            <nav className='btn'><Link to="/about"> About </Link></nav>
            <nav className='btn'><Link to="/services"> Services </Link></nav>
            <nav className='btn'><Link to="/contact"> Contact </Link></nav>
          </div>
          <div className='help'>
            <button>Helpline</button>
          </div>
        </div>

        <main>
          <section class="left-sec">
            <h2> We Are Here For Your Care</h2>
            <h1>  We The Best Doctors</h1>
            <p>We are here for your care 24/7. Any help just call us.</p>
            <h3>  IT Support</h3>
          </section>

          <section class="right-sec">
            <figure>
              <img src={img2} alt="error" />
            </figure>
          </section>
        </main>



      </header>
    </>
  )
}

export default Navbar