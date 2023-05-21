import React from 'react';

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
