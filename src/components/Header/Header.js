import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../Common/Common';

function Header() {
    let navigate = useNavigate();
    const handleLogout = () => { 
        localStorage.removeItem('method');
        localStorage.removeItem('freq');
        localStorage.removeItem('disease');
        localStorage.removeItem('medicines');
        localStorage.removeItem('medDetails');
        removeUserSession();  
        navigate('/');
    }
	const [show, setShow] = useState();
		function toggleShow() {
			
		 var nFilter=   document.getElementById("div1");  
		 nFilter.setAttribute("style", "display:block;");
		  //setShow(!show);
		}


	

    return (
	

        <>
            <div className="header-full">
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
			<i className="fa fa-bars d-inline-block d-sm-none hamberger-icon" onClick={toggleShow} aria-hidden="true"></i>
			<nav className="navbar navbar-expand-lg navbar-light p-0">
				<a className="navbar-brand" href="#"><img src="img/logo-2.png" alt="Logo"
						className="header-logo" /></a>
						<button className="Enquiry-btn ml-auto mt-1" onClick={handleLogout}>Log Out</button>
			</nav>
		</div>
	</div>
</div>
        </>
    );
}

export default Header;
