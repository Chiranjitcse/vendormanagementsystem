import React , { useEffect, useRef, useState }from 'react';

 import Header from '../Header/Header';
 import Sidebar from '../Sidebar/Sidebar';
 import Footer from '../Footer/Footer';
 import Smalltag from "../SmallTag/smalltag.js"
 import axios from 'axios';
function NewApplication()
{
	const [categoryFlag, setsCategoryFlag] = React.useState(false)
	const [productFlag, setsProductFlag] = React.useState(false)
	const [afterSaleService, setAfterSaleService] = useState([])
	const [registrationno , setregistrationno] = React.useState('')

	
	const [row, setRow] = useState(0)
	const [prFiles, setprFiles] = useState({
		statutory:[],
		WhetherEnlisted:[],
		performanceReports:[],
		courtCases:[],
		isiCertification:[],
	})
	const [testFiles, settestFiles] = useState({
		testlab: [],
		outsrclab: []
	})
	const [yearsFiles, setyearsFiles] = useState({
		y1: [],
		y2: [],
		y3: []
	})
	const handleYearsFileChange=(e)=>{
		const {name, files} = e.target
		setyearsFiles({
			...yearsFiles,
			[name]: [...files]
		})
	}
	const handletestFileChange=(e)=>{
		const {name, files} = e.target
		settestFiles({
			...testFiles,
			[name]: [...files]
		})
	}
	const handletestFileSave= async (e)=>{
		
		console.log(testFiles);
	}
	
	const handleprFileChange=(e)=>{
		const {name, files} = e.target
		setprFiles({
			...prFiles,
			[name]: [...files]
		})
	}
	const handleprFileSave= async (e)=>{
		
		console.log(prFiles);
	}


	const [mfFiles, setmfFiles] = useState({
		mfr:[],
		admff:[],
		dets:[],
	})
	const handlemfFileChange=(e)=>{
		const {name, files} = e.target
		setmfFiles({
			...mfFiles,
			[name]: [...files]
		})
	}
	const mfSave=()=>{
		console.log(mfFiles);
	}
	
	
	useEffect(() => {
		if(categoryFlag && productFlag) OnSelectProduct();
	  
	}, [categoryFlag, productFlag])

	useEffect(()=>{
		if(row){
			let list = []
			for(let i=0; i<row; i++){
				list = [
					...list, 
					{
						centre: "",
						location: "",
						floatingServiceUnits: ""
					}
				]
			}
			setAfterSaleService(list)
		}
	}, [row])

	

	const [showResults, setShowResults] = React.useState(false)
	const [showResistrationNo, setshowResistrationNo] = React.useState(false)

	const [showcategoryofunit, setcategoryofunitFileUpload] = React.useState(false)

	

	const [showNature, setshowNature] = React.useState(false)
	const [userInput, setUserInput] = React.useState('');
	const [userEmail, setUserEmail] = React.useState('');
	const [userMobileNo, setuserMobileNo] = React.useState('');
	
	const userName = React.useState(localStorage.getItem("name"));

	
	const [userSelect, setUserSelect] = React.useState(false);
	const onSelectClick = () => setShowResults(true)
	//setUserInput('');

	//setUsername(localStorage.getItem("name"))
// //////////////////////////////////////////////
	const cname = useRef()
	const mobNum = useRef()
	const [contactArr, setContactArr] = useState([]);
	const [ProductList, setProductList] = useState([]);
	const [gst, setgst] = useState("")
	const [pan, setpan] = useState("")
	const addContact = ()=>{
		const contact = `${cname.current.value} : ${mobNum.current.value}`
		setContactArr([contact, ...contactArr])
	}

	const deleteContact=(index)=>{
		let list = contactArr;
		list = list.filter((item, i)=> i !== index)
		setContactArr(list)
	}

	const handleGST = (e)=>{
		let {value} = e.target;
		setgst(value)
		if(value.length === 15){
			setApproval({
				...Approval,
				gst: true
			})
		}else{
			setApproval({
				...Approval,
				gst: false
			})
		}
	}

	const handlePAN = (e)=>{
		let {value} = e.target;
		setpan(value)
		if(value.length === 10){
			setApproval({
				...Approval,
				pan: true
			})
		}else{
			setApproval({
				...Approval,
				pan: false
			})
		}
	}

	const [Approval, setApproval] = useState({
		statutory:false,
		WhetherEnlisted:false,
		performanceReports:false,
		courtCases:false,
		isiCertification:false,
		gst: false,
		pan: false
	})

	const check = ()=>{
		if(gst === "" || gst === null){
			setApproval({
				...Approval,
				gst: false
			})
		}else{
			setApproval({
				...Approval,
				gst: true
			})
		}
	}

	const [marketingNetwork, setMarketingNetwork] = useState([
		{
			distributor: "",
			location: "",
			communicationDetail: "",
		},
	])

	const [testingTable, settestingTable] = useState(
		{
			test: "",
			testfreq: "",
			ecap: "",
			nos: "",
			mny: "",
			nvalid: ""
		}
	)
	const [testingTable2, settestingTable2] = useState(
		{
			nameAndAdd: "",
			test: "",
			testfreq: "",
			nos: "",
			valid: ""
		}
	)
	const [testingTableRow, settestingTableRow] = useState([])
	const [testingTableRow2, settestingTableRow2] = useState([])

	const addTestingTableRow = ()=>{
		settestingTableRow(prev => [...prev, {...testingTable}])
		console.log(testingTableRow);
	}
	const addTestingTableRow2 = ()=>{
		settestingTableRow2(prev => [...prev, {...testingTable2}])
		console.log(testingTableRow2);
	}
	const removeTestingTableRow = (index)=>{
		const rows = [...testingTableRow]
		rows.splice(index,1)
		settestingTableRow([...rows])
	}
	const removeTestingTableRow2 = (index)=>{
		const rows = [...testingTableRow2]
		rows.splice(index,1)
		settestingTableRow([...rows])
	}

	const handleTableInputChange = (e)=>{
		const {name, value} = e.target
		const obj = testingTable
		obj[name]=value;
		settestingTable({...obj})
	}
	const handleTableInputChange2 = (e)=>{
		const {name, value} = e.target
		const obj = testingTable2
		obj[name]=value;
		settestingTable2({...obj})
	}

	const handleRowChange = (e)=>{
		let num = e.target.value
		setRow(num);
	}

	const handleMarketingNetworkChange = (e, index)=>{
		const {name, value} = e.target
		const list = [...marketingNetwork]
		list[index][name]=value;
		setMarketingNetwork(list)
	}

	const addMoreMarketingNetworkRow = ()=>{
		setMarketingNetwork([...marketingNetwork, {
			distributor: "",
			location: "",
			communicationDetail: "",
			index: marketingNetwork.length
		}])
		console.log(marketingNetwork);
	}

	const removeMarketingNetworkRow = (index)=>{
		const list = [...marketingNetwork]
		list.splice(index,1)
		setMarketingNetwork(list)
	}

	const handleAfterSaleServiceChancge=(e, index)=>{
		const {name, value} = e.target
		const list = [...afterSaleService]
		list[index][name]=value;
		setAfterSaleService(list)
	}

	const handleRadioClick = (e)=>{
		let {name, value} = e.target

		if(value === "false") value = false
		
		const obj = {
			...Approval,
			[name]: value
		}
		setApproval(obj)

		console.log(name, value, Approval);
	}


	////////////////////////////////////////////////////////////////////////////
	const OnSelectProduct=()=>
	{

		
			
		//debugger;
		//setUserSelect(event);
		setshowResistrationNo(true);
		setregistrationno(localStorage.getItem("registrationNo"))
		setUserInput(localStorage.getItem("name"));
		setUserEmail(localStorage.getItem("email"));
		setuserMobileNo(localStorage.getItem("mobileno"));
		

	}

	 
	const onChangeCategory=()=>
	{
		
			setsCategoryFlag(true);
			axios.post('http://192.168.22.61/VendorSys/api/v1/products/{prodCategory}?prodCategory='+document.getElementById('category').value).then(response => {
		debugger;
			if(response.data.code==0)
			{
				setProductList(response.data.content);
				

			}else{
				
			}

		
	}).catch(error => {
		//setLoading(false);
		// console.log(error.data);
		//setError("Wrong credentials. Please check and try again");
	});
		
	}

	const onChangenature=()=>
	{
		setshowNature(true)
	}

	const onChangecategoryOfUnit=()=>
	{
		setcategoryofunitFileUpload(true);
	}


	const Results = () => (
		<div>
		
		<button className='Enquiry-btn ml-auto mt-1' onClick={OnSelectProduct}>Click</button>
							</div>
	  )

const RegistrationNo=()=>
(

	<div className='from-each-div mt-2'>
<p className='from-label-p'>Registration No</p>
<input value={registrationno} type="text" className="form-control" readOnly />
							</div>

)


const NatureOfCompanyFileUpload=()=>
(

<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">File</p>
							<input type='file' className='form-control' />
						</div>
						</div>

)
const CategoryofunitFileUpload=()=>
(

<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">File</p>
							<input type='file' className='form-control' />
						</div>
						</div>

)







    return(   
        <>
          <Header></Header>
          <div className="main-body-pannel">
            <Sidebar></Sidebar>
            <div className="right-pannel-div">
				<div className="right-pannel-div-inner">
					<div className="row">
						<div className="col-md-12">
							<h2 className='text-center mb-4'>New Application</h2>
							<b className='vend-name'> Vendor Name : {userName}</b>
							
							<div className='vendor-box'>
							{/* <h6>After Submission of the form you can download the full filled up form from <a href="#"><b>here</b></a></h6>
							<h6 className='mb-4'>If you already have applied for Any Product before, Click <button className='Enquiry-btn ml-auto mt-1'>Fill My Form</button> button to fill the form for another product.</h6> */}
							
							<div className='row'>
							<div className='col-md-4'> 
							<div className='from-each-div mb-0'>
							<p className='from-label-p'>Select the product category</p>
							<select className="form-control" 
							name='category' id='category'
								onChange={onChangeCategory}>
								<option>--Select--</option>
								<option value='C'>Civil</option>
								<option value='M'>Mechanical</option>
							</select>
							</div>	
							</div>
							<div className='col-md-4'> 

							<div className='from-each-div mb-0'>
<p className='from-label-p'>Applying for which Product</p>


<select className="form-control" onChange={()=>{setsProductFlag(true)}}
	name='product'> 
								<option>--Select--</option>
								{
       ProductList.map((result)=>(<option title={result.productCode}>{result.productDesc}</option>))
      }
							</select>
							
							</div>
							

							
							</div>
							<div className='col-md-4'>
							<p className='from-label-p'></p>
							{ showResults ? <Results /> : null }
							
							</div>
							</div>
							<div className='row'>
							<div className='col-md-4'> 
							<div className='from-each-div'>
							 { showResistrationNo ? <RegistrationNo /> : null }
							</div>	
							</div>
							<div className='col-md-4'> 
							
							

							
							</div>
							</div>
						</div>
						
						</div>					
<div className='col-md-12'>
<div id="main">
  <div className="">
<div className="accordion" id="faq">
                    <div className="card">
                        <div className="card-header" id="faqhead1">
                            <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">General Information </a>
                        </div>
					
							
                        <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                            <div className="card-body">
							<div className='row'>
	  <div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Name of the Vendor</p>
							<input value={userInput} readOnly type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Descriptive Name of Item(s) </p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Brand Name of Item(s)</p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-12">
							<div className="from-each-div">
							<p className="from-label-p">Registered Office Address</p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Telephone Landline </p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Mobile</p>
							<input type="text" disabled value={userMobileNo} className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">E-mail </p>
							<input type="email" disabled value={userEmail} className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Web Address </p>
							<input type="text"className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Nature of Company</p>
							<select className="form-control" onChange={onChangenature}>
								<option>-- Select --</option>
								<option>Sole Proprietorship</option>
								<option>Partnership</option>
								<option>Private Limited</option>
								<option>Public Sector</option>
							</select>
						</div>
						</div>
						{ showNature ? <NatureOfCompanyFileUpload /> : null }
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Category of the Unit</p>
							<select className="form-control" onChange={onChangecategoryOfUnit}>
							<option>--select--</option>
								<option>Micro</option>
								<option>Small</option>
								<option>Medium</option>
								<option>Large</option>
							</select>
						</div>
						
						</div>
						{ showcategoryofunit ? <CategoryofunitFileUpload /> : null }
						
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Pan <div className="tooltip"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
  <span className="tooltiptext">Please enter pan no then file upload visible</span>
</div></p>
							{/* <select className="form-control">
								<option>Name of State/UT</option>
								<option>State-wise GSTIN</option>
							</select> */}
							<input type='text' name='pan' onChange={handlePAN} value={pan} className="form-control"/>
							
							{Approval.pan &&
							<input type="file" name='panFile' multiple className="form-control" />}
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div" name="state">
							<p className="from-label-p">Select state :</p>
							<select className="form-control">
							<option value="AN">Andaman and Nicobar Islands</option>
							<option value="AP">Andhra Pradesh</option>
							<option value="AR">Arunachal Pradesh</option>
							<option value="AS">Assam</option>
							<option value="BR">Bihar</option>
							<option value="CH">Chandigarh</option>
							<option value="CT">Chhattisgarh</option>
							<option value="DN">Dadra and Nagar Haveli</option>
							<option value="DD">Daman and Diu</option>
							<option value="DL">Delhi</option>
							<option value="GA">Goa</option>
							<option value="GJ">Gujarat</option>
							<option value="HR">Haryana</option>
							<option value="HP">Himachal Pradesh</option>
							<option value="JK">Jammu and Kashmir</option>
							<option value="JH">Jharkhand</option>
							<option value="KA">Karnataka</option>
							<option value="KL">Kerala</option>
							<option value="LA">Ladakh</option>
							<option value="LD">Lakshadweep</option>
							<option value="MP">Madhya Pradesh</option>
							<option value="MH">Maharashtra</option>
							<option value="MN">Manipur</option>
							<option value="ML">Meghalaya</option>
							<option value="MZ">Mizoram</option>
							<option value="NL">Nagaland</option>
							<option value="OR">Odisha</option>
							<option value="PY">Puducherry</option>
							<option value="PB">Punjab</option>
							<option value="RJ">Rajasthan</option>
							<option value="SK">Sikkim</option>
							<option value="TN">Tamil Nadu</option>
							<option value="TG">Telangana</option>
							<option value="TR">Tripura</option>
							<option value="UP">Uttar Pradesh</option>
							<option value="UT">Uttarakhand</option>
							<option value="WB">West Bengal</option>
							</select>
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">GST Registration Number</p>
							{/* <select className="form-control">
								<option>Name of State/UT</option>
								<option>State-wise GSTIN</option>
							</select> */}
							<input type='text' name='gst' onChange={handleGST} value={gst} className="form-control"/>
							{Approval.gst &&
							<input type="file" name='gstFile' multiple className="form-control" />}
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Year of Establishment of the factory</p>
							<select className="form-control">
								<option>2020</option>
								<option>2021</option>
								<option>2022</option>
								<option>2023</option>
							</select>
						</div>
						</div>
						<div className="col-md-12 text-right">
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button">Save</button>
						</div>
	  </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqhead2">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">Manufacturing Facility</a>
                        </div>

                        <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div className="card-body">
							<div className='row'>
	  <div className="col-md-8">
							<div className="from-each-div">
							<p className="from-label-p">Factory Address </p>
							<input type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Telephone Landline </p>
							<input type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">E-mail </p>
							<input type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Month & Year of Commencement </p>
							<input type="text" className="form-control" title='Month & Year of Commencement of Production ' />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Present Factory Loading </p>
							<input type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Yearly Production Capacity </p>
							<input type="text" className="form-control" />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Manufacturing Range</p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
									
									<button className='up-btn payment-btn' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='mfr' onChange={e=>handlemfFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box'>
									{
									mfFiles.mfr.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Adequacy of Manufacturing Facilities</p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='admff' onChange={e=>handlemfFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box'>
									{
									mfFiles.admff.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Details of Engineers & other technical staffs</p>


							<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='dets' onChange={e=>handlemfFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box'>
									{
									mfFiles.dets.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>


						</div>
						</div>
						<div className='col-md-8'>
						<div className="row">
							<div className='col-md-6'>
							<div className="from-each-div">
							<p className="from-label-p">Name of contact person(s) in Factory </p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
									<input type="text"
									className="tagInput form-control"
									placeholder=""
									ref={cname}
									/>
									
								</div>
								
                        </div>
						</div>
</div>
<div className='col-md-6'>
						<div className="from-each-div">
							<p className="from-label-p">Mobile(s)</p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
									<input type="number" 
									className="tagInput form-control w-75 d-inline-block"
									placeholder=""
									ref={mobNum}
									/>
									<button className='addtag contact-btn' 
									variant="contained"
									onClick={addContact}>
									Add
									</button>
								</div>
                        </div>
						</div>
						</div>
						</div>

						<div className='tag-showcase-box'>
										{
											contactArr.map((item, index)=>(
												<Smalltag deleteFunc={()=>deleteContact(index)} lable={item} key={index} />
											))
										}
						</div>
						</div>
						
						<div className="col-md-12 text-right">
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button" onClick={mfSave}>Save</button>
						</div>
	  </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqhead3">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                            aria-expanded="true" aria-controls="faq3">Testing Facilities & Quality Control</a>
                        </div>

                        <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div className="card-body">
							<div className='row'>
						
						
							<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Whether in-House Testing Labs?<select className='yesno'><option>Yes</option><option>No</option></select></p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='testlab' onChange={e=>handletestFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box'>
									{
									testFiles.testlab.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Name of in-house tests carried out On Raw Material</p>
							<input type="text"className="form-control" title='Name of in-house tests carried out on raw material' />
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Name of in-house tests carried out on product</p>
							<input type="text"className="form-control" title='Name of in-house tests carried out on products' />
						</div>
						</div>
						
						<div className="col-md-4 d-none">
							<div className="from-each-div">
							<p className="from-label-p">Details of Tests carried out</p>
							{/* <input type="text"className="form-control" title='Details of Tests carried out through outsourced Labs ' /> */}
						</div>
						</div>
						

						<div className="col-md-12">
							<div className="from-each-div">
							<p className="from-label-p">Details of in-House Testing Facilities</p>
							

							{/* //Table */}
							<table className='table w-100 table-bordered dta-tabl new-dtatable'>
								<thead>
									<tr>
										<th className='sno'>S. No</th>
										<th>Test</th>
										<th>Testing Frequency</th>
										<th>Equipment with Capacities</th>
										<th>Nos</th>
										<th>Make & Year</th>
										<th>Validity of Calibration</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td ></td>
										<td>
											<input onChange={handleTableInputChange}
											value={testingTable.test}  className='table-input' type='text' name='test'/>
										</td>
										<td>
											<input onChange={handleTableInputChange}
											value={testingTable.testfreq}   className='table-input' type='text' name='testfreq'/>
										</td>
										<td>
											<input onChange={handleTableInputChange} 
											value={testingTable.ecap} className='table-input' type='text' name='ecap'/>
										</td>
										<td>
											<input onChange={handleTableInputChange} 
											value={testingTable.nos} className='table-input' type='text' name='nos'/>
										</td>
										<td>
											<input onChange={handleTableInputChange}
											value={testingTable.mny}  className='table-input' type='text' name='mny'/>
										</td>
										<td>
											<input onChange={handleTableInputChange}
											value={testingTable.nvalid}  className='table-input' type='text' name='nvalid'/>
										</td>
										<td>
											<button onClick={addTestingTableRow}><i className="fa-solid fa-plus"></i></button>
										</td>
									</tr>
									{
										testingTableRow.map((item, index)=>(
											<tr key={index}>
												<td>{index+1}</td>
												<td>{item.test}</td>
												<td>{item.testfreq}</td>
												<td>{item.ecap}</td>
												<td>{item.nos}</td>
												<td>{item.mny}</td>
												<td>{item.nvalid}</td>
												<td>
													<button onClick={index=>removeTestingTableRow(index)}>
													<i className="fa-regular fa-trash-can"></i>
													</button>
												</td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
						<div className='row mb-4'>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Test carried out from outsourced Labs? <select class="yesno"><option>Yes</option><option>No</option></select></p>
							<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='outsrclab' onChange={e=>handletestFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box'>
									{
									testFiles.outsrclab.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
						</div>
						</div>
						<div className="col-md-4">
							<div className="from-each-div">
							<p className="from-label-p">Name of test carried out from out source lab</p>
							<input type="text"className="form-control" title='Whether the outsourced Labs are accredited by NABL/Other Govt Institution?' />
						</div>
						</div>
						</div>
						</div>

						<div className="col-md-12">
							<div className="from-each-div">
							<p className="from-label-p">Details of Tests carried out from outsourced Labs :</p>
							

							{/* //Table */}
							<table className='table w-100 table-bordered dta-tabl'>
								<thead>
									<tr>
										<th className='sno'>S. No</th>
										<th>Name & Address of Lab</th>
										<th>Test</th>
										<th>Testing Frequency</th>
										<th>Nos</th>
										<th>Validity of Calibration</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td ></td>
										<td>
											<input onChange={handleTableInputChange2}
											value={testingTable2.nameAndAdd}  className='table-input' type='text' name='nameAndAdd'/>
										</td>
										<td>
											<input onChange={handleTableInputChange2}
											value={testingTable2.test}   className='table-input' type='text' name='test'/>
										</td>
										<td>
											<input onChange={handleTableInputChange2} 
											value={testingTable2.testfreq} className='table-input' type='text' name='testfreq'/>
										</td>
										<td>
											<input onChange={handleTableInputChange2} 
											value={testingTable2.nos} className='table-input' type='text' name='nos'/>
										</td>
										<td>
											<input onChange={handleTableInputChange2}
											value={testingTable2.valid}  className='table-input' type='text' name='valid'/>
										</td>
										<td>
											<button onClick={addTestingTableRow2}><i className="fa-solid fa-plus"></i></button>
										</td>
									</tr>
									{
										testingTableRow2.map((item, index)=>(
											<tr key={index}>
												<td>{index+1}</td>
												<td>{item.nameAndAdd}</td>
												<td>{item.test}</td>
												<td>{item.testfreq}</td>
												<td>{item.nos}</td>
												<td>{item.valid}</td>
												<td>
													<button onClick={index=>removeTestingTableRow2(index)}>
													<i className="fa-regular fa-trash-can"></i>
													</button>
												</td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
						</div>
						<div className='col-md-12'>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">System of NCR (Non-Conformity Report)Disposal and details of Corrective Actions (Separate Sheet to be attached along withnof NCR. if an) <select class="yesno"><option>Yes</option><option>No</option></select></p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="file" className="form-control" /></div>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">System of Identification & Traceability of materials & processed components (Separate Sheet to be attached)<select class="yesno"><option>Yes</option><option>No</option></select></p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="file" className="form-control" /></div>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">Testing & Inspection carried out as per STI (System of Testing and Inspection) of related 15 Standard International Standards (Procedure & Records in this regard to be attached to seperate sheets(s))<select class="yesno"><option>Yes</option><option>No</option></select></p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="file" className="form-control" /></div>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">BIS/International License Numberr(Copy of the certificate(s) to be attached)</p>
								</div>
								<div className='col-md-5'>
									<div className='row'>
										<div className='col-md-5'>
										<div className="from-each-div"><input type="text" className="form-control" /></div>
										</div>
										<div className='col-md-7'>
										<div className="from-each-div"><input type="file" className="form-control" /></div>
										</div>
									</div>
								
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">Validity of License</p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="text" className="form-control" /></div>
								</div>
							</div>
							
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">ISO-9001:2005 Certificate Quality Management System] (if any)(Copy of the certificate to be attached)<select class="yesno"><option>Yes</option><option>No</option></select></p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="file" className="form-control" /></div>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-7'>
								<p className="from-label-p">ISO-17025 Certificate [Testing and Calibration] (if any) Copy of the certificate to be attached)<select class="yesno"><option>Yes</option><option>No</option></select></p>
								</div>
								<div className='col-md-5'>
								<div className="from-each-div"><input type="file" className="form-control" /></div>
								</div>
							</div>
						</div>
						<div className="col-md-12 text-right">
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button">Save</button>
						</div>
	  </div>
                            </div>
                        </div>
                    </div>
					<div className="card">
                        <div className="card-header" id="faqhead4">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                            aria-expanded="true" aria-controls="faq4">Financial Information</a>
                        </div>

                        <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                            <div className="card-body">
							<div className='row'>

							<table className='table w-100 table-bordered dta-tabl'>
								<thead>
									<tr>
										<td rowSpan={2}>S. No</td>
										<td rowSpan={2}>Particulars</td>
										<td colSpan={3}>
										Description/details to be filled in by the Vendor
										</td>
										
									</tr>
									<tr>
										<td>Year 1 <select class="yesno w-year"><option>2018-2019</option><option>2019-2020</option><option>2020-2021</option><option>2021-2021</option><option>2022-2023</option></select></td>
										<td>Year 2 <select class="yesno w-year"><option>2018-2019</option><option>2019-2020</option><option>2020-2021</option><option>2021-2021</option><option>2022-2023</option></select></td>
										<td>Year 3 <select class="yesno w-year"><option>2018-2019</option><option>2019-2020</option><option>2020-2021</option><option>2021-2021</option><option>2022-2023</option></select></td>
										
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1.</td>
										<td>As per Last 3 (three) Years audited Balance Sheet (attach report)</td>

										<td>
										<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='y1' onChange={e=>handleYearsFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box under-table'>
									{
									yearsFiles.y1.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>

										</td>
										<td>
										<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='y2' onChange={e=>handleYearsFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box under-table'>
									{
									yearsFiles.y2.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
										</td>
										<td>
										<div className='tag-input-container'>
								<div className='enterTag-div'>
								<button className='up-btn payment-btn ' 
									variant="contained"
									>
									<span className='upload'>
										UPLOAD <i class="fa fa-upload" aria-hidden="true"></i>
									</span>
									<input type="file" name='y3' onChange={e=>handleYearsFileChange(e)} multiple className="form-control mf-file-input" title='Details of Engineers & other technical staffs engaged to be attached as separate sheet ' />
									</button>
								</div>
								<div className='tag-showcase-box under-table'>
									{
									yearsFiles.y3.map((file, i)=>(
										<Smalltag fontAwsmIcon={"fa-solid fa-file"} lable={file.name} key={i}/>
									))
									}
								</div>
                        </div>
										</td>
									</tr>
									<tr>
										<td>2.</td>
										<td>Annual Turnover</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>3.</td>
										<td>In Govt Sector</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>4.</td>
										<td>In Private Sector</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>5.</td>
										<td>ITurnover for the Specific Product</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>6.</td>
										<td>Net Current Assets</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>7.</td>
										<td>Inventories</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
									<tr>
										<td>8.</td>
										<td>Current Liabilities</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
										<td>
										<input type="text" className="form-control" />
										</td>
									</tr>
								</tbody>
								
							</table>

						
						<div className="col-md-12 text-right">
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button">Save</button>
						</div>
	  </div>
                            </div>
                        </div>
                    </div>
					<div className="card">
                        <div className="card-header" id="faqhead5">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5"
                            aria-expanded="true" aria-controls="faq5">Marketing Network (Availability in Market) </a>
                        </div>

                        <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                            <div className="card-body">
							<div className='col-md-12 text-right'><button className="addtag contact-btn ml-0" onClick={addMoreMarketingNetworkRow}><i class="fa fa-plus-circle fsize16" aria-hidden="true"></i> Add</button></div>
								{
									
									marketingNetwork.map((item, index)=>(
										<div className='row myrow' key={index}>
											<div className='col-md-3'>
											<div className="from-each-div"><p className="from-label-p">Dealers/Distributors Name </p>
											<input type="text"
											name={'distributor'}
											onChange={(e)=>{handleMarketingNetworkChange(e,index)}}
											value={marketingNetwork[index].distributor}
											className="form-control"/></div>
											</div>
											<div className='col-md-3'>
											<div className="from-each-div"><p className="from-label-p">Location</p>
											<input type="text"
											name={'location'}
											onChange={(e)=>{handleMarketingNetworkChange(e,index)}}
											value={marketingNetwork[index].location}
											className="form-control" /></div>
											</div>
											<div className='col-md-3'>
											<div className="from-each-div"><p className="from-label-p">Address</p>
											<input type="text"
											name={'location'}
											className="form-control" /></div>
											</div>
											<div className='col-md-2'>
											<div className="from-each-div"><p className="from-label-p">Mobile</p>
											<input type="text"
											name={'communicationDetail'} 
											onChange={(e)=>{handleMarketingNetworkChange(e,index)}}
											value={marketingNetwork[index].communicationDetail}
											className="form-control" />
											</div>
											</div>
											<div className='col-md-1 pl-0'>
											<button className="remove-btn" onClick={()=>{removeMarketingNetworkRow(index)}}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
											</div>
										</div>
									))
									
								}
								
							<div className="col-md-12 text-right">
								
							
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
								<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button"
								onClick={()=>{console.log(marketingNetwork)}}>Save</button>
							</div>
                            </div>
                        </div>
                    </div>
					<div className="card">
                        <div className="card-header" id="faqhead6">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq6"
                            aria-expanded="true" aria-controls="faq6">After Sales Service </a>
                        </div>

                        <div id="faq6" className="collapse" aria-labelledby="faqhead6" data-parent="#faq">
                            <div className="card-body">
								<div className="from-each-div cenNum-div-box ">
									<p className="from-label-p cenNum-p"><b>Number of After Sales Service Centers </b></p>
									<input type="text" 
									onChange={handleRowChange}
									value={row}
									className="form-control col-md-1" 
									title='Number of After Sales Service Centers
									available in India '/>
								</div>
								{
									afterSaleService.map((item, index)=>(
								<div className='row' key={index}>
									<div className='col-md-2'>
										<div className="from-each-div"><p className="from-label-p">Service Center Name </p>
										<input type="text" className="form-control" title='Number of After Sales Service Centers
										available in India '
										name='centre'
										onChange={e=>handleAfterSaleServiceChancge(e, index)}
										value={afterSaleService[index].centre}
										/></div>
									</div>
									<div className='col-md-3'>
										<div className="from-each-div"><p className="from-label-p">Address</p>
										<input type="text" className="form-control" title='Location and Communication Details(Address, Telephone, Mobile Numbers, E-mail etc) of After Sales Service Centers'
										name='location'
										onChange={e=>handleAfterSaleServiceChancge(e, index)}
										value={afterSaleService[index].location}
										/></div>
									</div>
									<div className='col-md-2'>
										<div className="from-each-div"><p className="from-label-p">Mobile No</p>
										<input type="text" className="form-control"
										/></div>
									</div>
									<div className='col-md-2'>
										<div className="from-each-div"><p className="from-label-p">land No</p>
										<input type="text" className="form-control"
										/></div>
									</div>
									<div className='col-md-3'>
										<div className="from-each-div"><p className="from-label-p">Email Id</p>
										<input type="text" className="form-control"
										/></div>
									</div>
									{/* <div className='col-md-4'>
										<div className="from-each-div"><p className="from-label-p">Details of Floating Service Units,</p>
										<input type="text" className="form-control" title='Details of Floating Service Units, if available in West Bengal '
										name='floatingServiceUnits'
										onChange={e=>handleAfterSaleServiceChancge(e, index)}
										value={afterSaleService[index].floatingServiceUnits}
										/></div>
									</div> */}
								</div>
									))
								}

<div className="from-each-div cenNum-div-box mt-4">
									<p className="from-label-p cenNum-p"><b>Number of Floating service Unit </b></p>
									<input type="text" 
									onChange={handleRowChange}
									value={row}
									className="form-control col-md-1" 
									title='Number of After Sales Service Centers
									available in India '/>
								</div>
								{
									afterSaleService.map((item, index)=>(
										<div className='row' key={index}>
										<div className='col-md-2'>
											<div className="from-each-div"><p className="from-label-p">Service Center Name </p>
											<input type="text" className="form-control" title='Number of After Sales Service Centers
											available in India '
											name='centre'
											onChange={e=>handleAfterSaleServiceChancge(e, index)}
											value={afterSaleService[index].centre}
											/></div>
										</div>
										<div className='col-md-3'>
											<div className="from-each-div"><p className="from-label-p">Address</p>
											<input type="text" className="form-control" title='Location and Communication Details(Address, Telephone, Mobile Numbers, E-mail etc) of After Sales Service Centers'
											name='location'
											onChange={e=>handleAfterSaleServiceChancge(e, index)}
											value={afterSaleService[index].location}
											/></div>
										</div>
										<div className='col-md-2'>
											<div className="from-each-div"><p className="from-label-p">Mobile No</p>
											<input type="text" className="form-control"
											/></div>
										</div>
										<div className='col-md-2'>
											<div className="from-each-div"><p className="from-label-p">land No</p>
											<input type="text" className="form-control"
											/></div>
										</div>
										<div className='col-md-3'>
											<div className="from-each-div"><p className="from-label-p">Email Id</p>
											<input type="text" className="form-control"
											/></div>
										</div>
										
									</div>
									))
								}
								<div className="col-md-12 text-right p-0">
									<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
									<button 
									className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button"
									onClick={()=>(console.log(afterSaleService))}
									>Save</button>
						    	</div>

                            </div>
                        </div>
                    </div>
					<div className="card">
                        <div className="card-header" id="faqhead7">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq7"
                            aria-expanded="true" aria-controls="faq7">Performance Reliability </a>
                        </div>

                        <div id="faq7" className="collapse" aria-labelledby="faqhead7" data-parent="#faq">
                            <div className="card-body">
							<div className='row'>
								<div className='col-md-12'>
									<div className="from-each-div">
									<div className='d-inline-block'><p className="from-label-p"><b>Approval of Statutory</b></p></div>
									<div className='d-inline-block ml-3'>
										<input onClick={handleRadioClick} type='radio' name='statutory' value={true}/><label className='ys-no'>Yes</label>
									<input onClick={handleRadioClick} type='radio' name='statutory' value={false}/><label className='ys-no'>No</label>
									</div>
									{Approval.statutory && 
									<input name="statutory" onChange={e=>handleprFileChange(e)} type="file" multiple className="form-control d-inline-block w-auto" title='Approval of Statutory and/or other Inspection Agency (Copies to be attached)'/>}</div>
								</div>

									<div className='col-md-12'>
									<div className="from-each-div"><div className='d-inline-block'><p className="from-label-p"><b>Whether enlisted as approved</b></p></div>
									<div className='d-inline-block ml-3'>
									<input onClick={handleRadioClick} type='radio' name='WhetherEnlisted' value={true}/><label className='ys-no'>Yes</label>
									<input onClick={handleRadioClick} type='radio' name='WhetherEnlisted' value={false}/><label className='ys-no'>No</label></div>
									{Approval.WhetherEnlisted && <input name='WhetherEnlisted' onChange={e=>handleprFileChange(e)} type="file"  multiple className="form-control d-inline-block w-auto" title='Whether enlisted as approved Vendor in any Govt, Govt Undertaking or in Public Sector bodies(Copies such approval to be attached)' />}</div>
									</div>

									<div className='col-md-12'>
									<div className="from-each-div"><div className='d-inline-block'><p className="from-label-p"><b>Performance Reports from clients </b></p></div>
									<div className='d-inline-block ml-3'>
									<input onClick={handleRadioClick} type='radio' name='performanceReports' value={true}/><label className='ys-no'>Yes</label>
									<input onClick={handleRadioClick} type='radio' name='performanceReports' value={false}/><label className='ys-no'>No</label>
									</div>
									
									{Approval.performanceReports && 
									<input type="file" name='performanceReports' onChange={e=>handleprFileChange(e)} multiple className="form-control d-inline-block w-auto" title='Performance Reports from clients (Copies such reports to be attached)'/>}</div>
									</div>

									<div className='col-md-12'>
									<div className="from-each-div"><div className='d-inline-block'><p className="from-label-p"><b>Whether the ISI Certification Mark License ever suspended/cancelled :</b></p></div>
									<div className='d-inline-block ml-3'>
									<input onClick={handleRadioClick} type='radio' name='isiCertification' value={true}/><label className='ys-no'>Yes</label>
									<input onClick={handleRadioClick} type='radio' name='isiCertification' value={false}
									/><label className='ys-no'>No</label>
									</div>
									{Approval.isiCertification && 
									<textarea name='courtCases'
									placeholder='Give details with reason.'  className="form-control d-inline-block w-auto align-top courtCases" />}</div>
									</div>

									<div className='col-md-12'>
									<div className="from-each-div"><div className='d-inline-block'><p className="from-label-p"><b>Records of pending Court Cases/Litigations/Arbitration issues with WBPHED or any other Govt. organisations:</b></p></div>
									<div className='d-inline-block ml-3'>
									<input onClick={handleRadioClick} type='radio' name='courtCases' value={true}/><label className='ys-no'>Yes</label>
									<input onClick={handleRadioClick} type='radio' name='courtCases' value={false}/><label className='ys-no'>No</label>
									</div>
									{Approval.courtCases &&
									<textarea name='courtCases'
									placeholder='Give detailes'  className="form-control d-inline-block w-auto align-top courtCases" />}</div>
									</div>

									<div className="col-md-12 text-right p-0">
							<button className="Enquiry-btn mr-3 mt-2 bg-danger color-wh-important cus-sr-button">Reset</button>
							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important cus-sr-button" onClick={handleprFileSave}>Save</button>
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
					<div className="col-md-12 text-right">

							<button className="Enquiry-btn ml-auto mt-2 bg-important color-wh-important">Submit</button>
						</div>
				</div>
				
		</div>
	
          </div>
		 
          <Footer></Footer>
        </>       
    );
}

export default NewApplication;