import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getUser } from '../Common/Common';

function Sidebar() {
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

    const [active, setActive] = useState(false);

 
   
    return (
        <>
           	<div id="div1" className="left-pannel-div">
			<i  className="fa fa-window-close close-fix d-block d-sm-none" aria-hidden="true" onClick={toggleShow}></i>
			<ul>
            <li><a href="/Dashboard" className={splitLocation[1] === "Dashboard" ? "active-anchor" : ""} ><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a></li>
				<li><a href="/NewApplication" className={splitLocation[1] === "NewApplication" ? "active-anchor" : ""}><i className="fa fa-desktop" aria-hidden="true"></i> New Application</a></li>
				<li><a href="/ApplicationStatus" className={splitLocation[1] === "ApplicationStatus" ? "active-anchor" : ""}> <i className="fa fa-flag" aria-hidden="true"></i> Application Status</a></li>
				<li><a href="/Policy" className={splitLocation[1] === "Policy" ? "active-anchor" : ""}><i className="fa fa-question-circle" aria-hidden="true" ></i> Policy and Guideline</a></li>
				{/* <li><a href="/Guideline" className={splitLocation[1] === "Guideline" ? "active-anchor" : ""}><i className="fa fa-info-circle" aria-hidden="true"></i> Guideline</a></li> */}
				<li><a href="/DocumentUploaded" className={splitLocation[1] === "DocumentUploaded" ? "active-anchor" : ""}><i className="fa fa-file-text" aria-hidden="true"></i> Documents to be Uploaded</a></li>
				<li><a href="/ProductList" className={splitLocation[1] === "ProductList" ? "active-anchor" : ""}> <i className="fa fa-list" aria-hidden="true"></i> Product List</a></li>
				<li><a href="/EnlistedVendor" className={splitLocation[1] === "EnlistedVendor" ? "active-anchor" : ""}><i className="fa fa-users" aria-hidden="true"></i> Enlisted Vendor</a></li>
			</ul>
		</div>
        </>
    );
}

export default Sidebar;
