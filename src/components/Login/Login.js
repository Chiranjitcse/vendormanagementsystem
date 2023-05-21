import React, { useState } from 'react';
import { useNavigate,useLocation, Link  } from 'react-router-dom';

import axios from 'axios';
import { setUserSession } from '../Common/Common';

function Login()
{
	let navigate = useNavigate();
    const username = useFormInput('');
	const email= useFormInput('');
    const password = useFormInput('');
	const EmailOTP = useFormInput('');
    const MobileOTP = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
	const [otpFlag, setsotpFlag] = React.useState(false)
	const [LoginFlag, setsLogFlag] = React.useState(true)


    // const url = 'http://107.20.165.187:8080/ihealth/token/generate-token';
    // handle button click of login form
    const handleLogin = (event) => {
		debugger;
        event.preventDefault();
        setError(null);
		if(document.getElementById('EmailOTP').value==12345 && document.getElementById('MobileOTP').value==12345)
		{
			navigate('/Dashboard');
		}
		else if(username.value=='wbphe@gmail.com' && password.value=='wbphe@gmail.com')
		{
			navigate('/DepartmentalDashboard');
		}
		else
		{
			//alert("Wrong credentials. Please check and try again");
			setError("Wrong credentials. Please check and try again");
		}
		
       // setLoading(true);
        // axios.post('http://18.213.251.171:8080/ihealth-0.0.2/token/generate-token', { password: password.value, username: username.value }).then(response => {
        //     setLoading(false);
        //     setUserSession(response.data.content.token, response.data.content);
        //     localStorage.removeItem('method');
        //     localStorage.removeItem('freq');
        //     localStorage.removeItem('disease');
        //     localStorage.removeItem('medicines');
        //     localStorage.removeItem('medDetails');
        //     // console.log(response.data);
        //     navigate('/Dashboard');
        // }).catch(error => {
        //     setLoading(false);
        //     // console.log(error.data);
        //     setError("Wrong credentials. Please check and try again");
        // });
    }
const SendOtp=()=>
{
	debugger;
	var a=0;
	if(username.value==''|| username.value==null)
	{
		a=0;
		alert('Please fill the Mobile fields');
	}
	else{
		a=1;
	}
	if(email.value==''|| email.value==null)
	{
a=0;
alert('Please fill the email fields');
	}
	else{
		a=1;
	}
	if(a==1){
		setsotpFlag(true)
		setsLogFlag(false);
		setError("Otp sent to your registered mobile number and email. check your mobile and email.");
		
	}
	
}
const OtpResults = () => (
	<div>
	
	<p>Enter Email OTP</p>
										<input type="text" id="EmailOTP" className="bord-bottom-input"  name='EmailOTP' required />
					
										<p>Enter Mobile OTP</p>
										<input type="text" id="MobileOTP" className="bord-bottom-input"  name='MobileOTP' required />
										<button className="book-now w-100 mt-3" id="getotpBtn">Login</button>
						</div>
						
  )
    return(
        <div>
        <div className="top-container">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-9">
					<div className="top-header-leftpannel">
						<a href="#"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
							+91 1234567890</a>
						<a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;
							info@domain.com</a>
					</div>
				</div>
				
				<div className="col-md-6 col-3 pl-0">
					<div className="top-header-rightpannel">
						<a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="header" id="myHeader">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a className="navbar-brand" href="#"><img src="img/logo-2.png" alt="Logo"
                    className="header-logo" /></a>
                    {/* <button class="Enquiry-btn ml-auto mt-1" data-toggle="modal" data-target="#loginmodal">Log In</button> */}
        </nav>
    </div>
</div>
<div className="row m-0">
				<div className="col-md-4"></div>
						<div className="col-md-4">

						<form onSubmit={handleLogin}>



							<div className="log-modal-rightpannel">
								<h3 className='text-center'>Log in</h3>
								<div className="forloginpannel">
									<div className="input-div-enquiery p-2" id="forMobileotp">
										<p>Enter Mobile number</p>
										<input type="text" id="username" disabled={otpFlag} className="bord-bottom-input" {...username} name='username' required />
										<p>Enter Email</p>
										<input type="text" id="email" disabled={otpFlag} className="bord-bottom-input" {...email} name='username' required />
										{otpFlag &&	<OtpResults />}	
										{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
										<div className="mt-4"><p className="log-small-text">By continuing, you agree to <a
													href="#">Terms of Use </a>and <a href="#">Privacy Policy</a>.</p>
										{LoginFlag && <button className="book-now w-100 mt-3" id="getotpBtn" onClick={SendOtp}>Send Otp</button>}	
										
										
								
										</div>
										
									</div>
									
									<div className="new-login">New to WBPHED?.  Register yourself as a Vendor .<a href="/Registration" id="newuser"> Create an account</a></div>
									
								</div>
							</div>
							</form>
						</div>
                        <div className="col-md-4"></div>
					</div>

<footer className="page-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="copyright">
						<small>Copyright © 2023 organization Name | All rights reserved.</small>
					</div>
				</div>
				<div className="col-md-6">
					<div className="privay-div">
							<a href="#">Disclaimer</a>
							<a href="#">Terms and Condition</a>
							<a href="#">Privacy Policy</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
   
</div>
    
        );

}
const useFormInput = initialValue => {
	const [value, setValue] = useState(initialValue);
   
	const handleChange = e => {
		setValue(e.target.value);
	}
	return {
		value,
		onChange: handleChange
	}
}
export default Login;