import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
 import Header from '../Header/Header';
 import DepartmentalSidebar from '../DepartmentalSidebar/DepartmentalSidebar';
 import Footer from '../Footer/Footer';
// import { getUser, getMethod, getFreq } from '../Common/Common';

function DepartmentalDashboard() {
    
    // const user = getUser();
    // const method = getMethod();
    // const freq = getFreq();
    // const [error, setError] = useState((method && freq)?"Administration Preferences set, please Select Disease":"Please Select Administration Preferences");
    // let selectDisease;
    // if (method && freq) {
    //     selectDisease = <Link to="/Disease" className="btn btn-sm btn-success btn-block" style={{padding: "10px 20px"}}>
    //     <h4>Select Disease</h4></Link>;
    // } else {
    //     selectDisease = <Link to="#" className="btn btn-sm btn-success btn-block" style={{padding: "10px 20px"}}>
    //     <h4>Select Disease</h4></Link>;
    //     // setError("This version supports only one disease to be selected");
    // }
    //assigning location variable
    //const location = useLocation();

    //destructuring pathname from location
   // const { pathname } = location;

    //Javascript split method to get the name of the path in array
    //const splitLocation = pathname.split("/");
    return (
        <>
          <Header></Header>
          <div className="main-body-pannel">
            <DepartmentalSidebar></DepartmentalSidebar>
          </div>
          <div className='right-pannel-div'>
            <div className='right-pannel-div-inner'>
          <div className='row inner-vendor'>
                <div className='col-md-12'><h1 class="page-heading mb-3 text-left">Depertmental User</h1></div>
                  <div className='col-md-4'>
                    <div className="each-dash-boardbox three-border">
                    <div class="card card-raised border-start border-4">
                                    <div class="card-body p-2">
                                        <div class="body-text-div">
                                          <div className='head-box'>
                                            <h2 class="card-title mb-0">Products</h2>
                                          
                                          </div>
                                          <div className='inner-data-box'>
                                            <div className='row'>
                                              <div className='col-md-12'>
                                                <div className='head-product text-center'>
                                                <div className='row'>
                                              <div className='col-md-12'>
                                                <div className='head-product text-center'>
                                                <div class="row">
                                                  <div class="col-md-6 border-right">
                                                    <div class="head-product text-center">
                                                  <a href="#"><h3>Civil</h3><h2>456</h2></a>
                                                </div>
                                                </div>
                                                <div class="col-md-6">
                                                  <div class="head-product text-center">
                                                  <a href="#">
                                                  <h3>Mechanical</h3>
                                                <h2>456</h2>
                                                </a>
                                                </div
                                                ></div>
                                                </div>
                                                </div>
                                              </div>
                                              
                                            </div>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                  <div className="each-dash-boardbox four-border">
                    <div class="card card-raised border-start border-4">
                                    <div class="card-body p-2">
                                        <div class="body-text-div">
                                          <div className='head-box'>
                                            <h2 class="card-title mb-0">Pending Applications</h2>
                                          
                                          </div>
                                          <div className='inner-data-box'>
                                            <div className='row'>
                                              <div className='col-md-12'>
                                                <div className='head-product text-center'>
                                                <a href="#">
                                                  <h2>456</h2>
                                                  <h3>&nbsp;</h3>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                  <div className="each-dash-boardbox five-border">
                    <div class="card card-raised border-start border-4">
                                    <div class="card-body p-2">
                                        <div class="body-text-div">
                                          <div className='head-box'>
                                            <h2 class="card-title mb-0">Enlisted Vendors</h2>
                                          
                                          </div>
                                          <div className='inner-data-box'>
                                            <div className='row'>
                                              <div className='col-md-12'>
                                                <div className='head-product text-center'>
                                                <div class="row">
                                                  <div class="col-md-6 border-right">
                                                    <div class="head-product text-center">
                                                  <a href="#"><h3>Civil</h3><h2>456</h2></a>
                                                </div>
                                                </div>
                                                <div class="col-md-6">
                                                  <div class="head-product text-center">
                                                  <a href="#">
                                                  <h3>Mechanical</h3>
                                                <h2>456</h2>
                                                </a>
                                                </div
                                                ></div>
                                                </div>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
          <Footer></Footer>
        </>
    );
}

export default DepartmentalDashboard;
