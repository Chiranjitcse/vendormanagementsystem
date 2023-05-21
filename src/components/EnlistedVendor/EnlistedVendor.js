import React , { useState }from 'react';

 import Header from '../Header/Header';
 import Sidebar from '../Sidebar/Sidebar';
 import Footer from '../Footer/Footer';

function EnlistedVendor()
{
   
    return(   
        <>
          <Header></Header>
          <div className="main-body-pannel">
            <Sidebar></Sidebar>
            <div className="right-pannel-div">
				<div className="right-pannel-div-inner">
					<div className="row">
						<div className="col-md-12">
							<h1 className="page-heading">Vendor List</h1>
						</div>
						<div className='col-md-12 mt-3'>
  <table className="table w-100 table-bordered dta-table">
    <thead>
      <tr>
        <th style={{width: "15%"}}>Sl No.</th>		
        <th style={{width: "65%"}}>Vendor Name</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
		<td>Lorem Ipsum</td>
        
       
      </tr>
	  <tr>
        <td>2</td>
        <td>Lorem Ipsum</td>
		
      
      </tr>
	  <tr>
        <td>3</td>
        <td>Lorem Ipsum</td>
		
       
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

export default EnlistedVendor;