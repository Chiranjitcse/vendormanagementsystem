
function Registration()
{


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
<hr></hr>
	<div className="col-md-12">
	<div className='row'>
	<div className="col-md-4">
							
						</div>
						<div className="col-md-4">
							
						</div>
						<div className="col-md-4">
							
						</div>
						</div>
	</div>
	



<div className="row m-0">
				<div className="col-md-3"></div>
						<div className="col-md-6">
						<form>
							<div className="log-modal-rightpannel">
							<h3 className='text-center'>New Registration</h3>
								<div className="forloginpannel">
									<div className="input-div-enquiery p-3" id="forMobileotp">
										<div className="row">
											<div className="col-md-4">
											<div className="from-each-div">
							<p className="from-label-p">Name of Vendor</p>
							
							<input type="text"className="form-control" />
						</div>
											</div>
											<div className="col-md-8">
											<div className="from-each-div">
							<p className="from-label-p">Registered Office Address </p>
							<input type="text"className="form-control" />
						</div>
											</div>
										
									
										<div className="col-md-6">
						<div className="from-each-div">
							<p className="from-label-p">Landline No</p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-6">
						<div className="from-each-div">
							<p className="from-label-p">Mobile No </p>
							
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-6">
						<div className="from-each-div">
							<p className="from-label-p">Email id </p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-6">
						<div className="from-each-div">
							<p className="from-label-p">Website Address </p>
							<input type="text"className="form-control" />
						</div>
						</div>
						</div>
										
										<div className="col-md-12 text-right p-0 mt-4">
											
											
                                            &nbsp;
                                           <a href="/" className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important">Close</a>
										   <a className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important">Save</a> 
										</div>
										
									</div>
								</div>
							</div>
							</form>
						</div>
                        <div className="col-md-3"></div>
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

export default Registration                               ;