import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
 import Header from '../Header/Header';
 import Sidebar from '../Sidebar/Sidebar';
 import Footer from '../Footer/Footer';
// import { getUser, getMethod, getFreq } from '../Common/Common';

function Dashboard() {
    
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
            <Sidebar></Sidebar>
            <div className='right-pannel-div'>
              <div className='right-pannel-div-inner'>
                  <div className='row'>
                    <div className='col-md-12'>
                    
                    </div>
                </div>
                <div className='row inner-vendor'>
                <div className='col-md-12'>
                <table class="table w-100 table-bordered dta-table">
                  <thead>
                    <tr>
                      <th >Sl No.</th>
                      <th >Application No</th>
                      <th >Date of Application</th>
                      <th>Product Category <br></br>(Civil/Mechanical)</th>
                      <th>Product</th>
                      <th>Application Status </th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>App/2023/00001</td>
                          <td>28/04/2023</td>
                          <td>Civil</td>
                          <td>Rod</td>
                          <td>Pending</td>
                          </tr>
                          </tbody>
                          </table>
                  </div>
                 
                  </div>
                
                
              </div>
            </div>
          </div>
          <Footer></Footer>
        </>
    );
}

export default Dashboard;
