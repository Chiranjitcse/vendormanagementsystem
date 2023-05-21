import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getUser } from '../Common/Common';

function DepartmentalSidebar() {
    const user = getUser();

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const [show, setShow] = useState();

    // function to toggle the boolean value
    function toggleShow() {
       
     var nFilter=   document.getElementById("div1");  
     nFilter.setAttribute("style", "display:none;");
      //setShow(!show);
    }

    
   
    return (
        <>
           	<div id="div1" className="left-pannel-div">
			<i  className="fa fa-window-close close-fix d-block d-sm-none" aria-hidden="true" onClick={toggleShow}></i>
			<ul>
            <li><a href="#" className="active-anchor"><i className="fa fa-tachometer" aria-hidden="true"></i>
Dashboard</a></li>
				<li><a href="#" ><i className="fa fa-desktop" aria-hidden="true"></i>View list of applications</a></li>
				<li><a href="#"><i className="fa fa-flag" aria-hidden="true"></i> Assign the application to the subcommittee members </a></li>
				<li><a href="#"><i className="fa fa-question-circle" aria-hidden="true"></i>Check the application </a></li>
				<li><a href="#"><i className="fa fa-info-circle" aria-hidden="true"></i>Evaluate the application </a></li>
				<li><a href="#"><i className="fa fa-file-text" aria-hidden="true"></i>Enter the survey rating if necessary</a></li>
				<li><a href="#"><i className="fa fa-list" aria-hidden="true"></i>Evaluate the application </a></li>
				<li><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Upload the enlisted vendor list after final selection</a></li>
			</ul>
		</div>
        </>
    );
}

export default DepartmentalSidebar;
