import React , { useState }from 'react';

 import Header from '../Header/Header';
 import Sidebar from '../Sidebar/Sidebar';
 import Footer from '../Footer/Footer';

function ApplicationStatus()
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
							<h1 className="page-heading">Application Status</h1>
						</div>
						<div className='col-md-12 mt-3'>
  <table className="table w-100 table-bordered dta-table">
    <thead>
      <tr>
        <th style={{width: "15%"}}>Sl No.</th>
		<th style={{width: "65%"}}>Vendor Name</th>
        <th style={{width: "65%"}}>Item Name</th>
        <th style={{width: "20%"}} className='text-center'>Edit</th>
        <th style={{width: "20%"}} className='text-center'>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
		<td>Lorem Ipsum</td>
        <td>Lorem Ipsum</td>
        <td> <a href='#'><i class="fa fa-pencil mr-3" aria-hidden="true"></i></a></td>
        <td className='text-center'> 
			<div>
				<a href='#'><i className="fa fa-check" aria-hidden="true"></i></a>
				
			</div>
		</td>
      </tr>
	  <tr>
        <td>2</td>
        <td>Lorem Ipsum</td>
		<td>Lorem Ipsum</td>
    <td> <a href='#'><i class="fa fa-pencil mr-3" aria-hidden="true"></i></a></td>
        <td className='text-center'> 
			<div>
			<a href='#'><i className="fa fa-check" aria-hidden="true"></i></a>
			</div>
		</td>
      </tr>
	  <tr>
        <td>3</td>
        <td>Lorem Ipsum</td>
		<td>Lorem Ipsum</td>
    <td> <a href='#'><i class="fa fa-pencil mr-3" aria-hidden="true"></i></a></td>
        <td className='text-center'> 
			<div>
			<a href='#'><i className="fa fa-ban" aria-hidden="true"></i></a>
			</div>
		</td>
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

export default ApplicationStatus;