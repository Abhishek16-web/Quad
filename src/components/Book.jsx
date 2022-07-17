import React from 'react'

const book = () => {
  return (
    <div className='bookform' >

    <form>
		<h2>Please fill in this form to Book Your Ticket.</h2>
		<hr/>
		
		<label for="name"><b>Name</b></label>
		<input type="text" placeholder="Enter Your Name" name="name" required/><br/>
		
		<label for="number"><b>Contact No.</b></label>
		<input type="text" placeholder="Enter Your Contact No." name="number" required/><br/>
		
		<label for="email"><b>Email</b></label> 
		<input type="text" placeholder="Enter Your E-mail" name="email" required/><br/>

		<label for="pwd"><b>Password</b></label>
		<input type="password" placeholder="Enter Your Password" name="psw" required/><br/>

		<label for="psw-repeat"><b>Repeat Password</b></label>
		<input type="password" placeholder="Repeat Your Password" name="psw-repeat" required/><br/>
		<hr/>
		<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

		<button type="submit" class="registerbutton">Book Now</button>
		
	</form>
    </div>

  )
}

export default book