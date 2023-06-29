import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import './reg-login.css';
import './reg-login.scss';


const { getRequest, postRequest } = require("../../api/apiinstance");
const { endPoints } = require("../../api/constant")

function RegisterLogin() {

	const [activeTab, setActiveTab] = useState('donor');
	const [innerActiveTab, setInnerActiveTab] = useState('login');
	const [loader, setLoader] = useState(false);

	const handleTabChange = (event) => {
		event.preventDefault();
		setActiveTab(event.target.dataset.tab);
	};

	const handleInnerTabChange = (tab: any) => {
		setInnerActiveTab(tab);
	};



	// 
	const [formHeader, setFormHeader] = useState({
		FullName: "",
		Address: "",
		MobileNumber: "",
		Email: "",
		Password: "",
		ConfirmPassword: ""
	});
	const inputEvent = (e) => {
		const { name, value } = e.target
		setFormHeader((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		})
	}
	const register = () => {
		console.log("formHeader = ", formHeader);
		if (formHeader.FullName.length === 0 || formHeader.Address.length === 0 || formHeader.MobileNumber.length === 0 || formHeader.Email.length === 0 || formHeader.Password.length === 0 || formHeader.ConfirmPassword.length === 0) {
			alert("Please Fill All Details")
		} else {
			if (formHeader.Password !== formHeader.ConfirmPassword) {
				alert("Password and Confirm Password didn't match")
			} else {
				postRequest(endPoints.register, formHeader, (data) => {
					if (data.affectedRows !== 0) {
						alert("Registration successful")
						setInnerActiveTab('login');
					} else {
						alert("Registration Failed")
					}
				})
			}
		}
	}
	// 

	return (
		<>
			<Header />
			{!loader ? (
				<>
					<div className='loginContainer'>
						<div className="container">
							<ul className="nav nav-tabs">
								<li className="nav-item">
									<button className={`nav-link ${activeTab === 'donor' ? 'active' : ''}`} data-tab="donor"
										onClick={handleTabChange}>
										Donor
									</button>
								</li>
								<li className="nav-item">
									<button className={`nav-link ${activeTab === 'ngo' ? 'active' : ''}`} data-tab="ngo"
										onClick={handleTabChange} href="#">
										Ngo
									</button>
								</li>
							</ul>

							<div className="tab-content">
								<div className={`tab-pane fade ${activeTab === 'donor' ? 'show active' : ''}`} id="donor">
									{innerActiveTab == 'login' ? (
										<>
											<div class="login_box content_wrap">
												<h3>Donor Login</h3>
												<form>
													<div className="form-group">
														<label htmlFor="loginEmail">Email address</label>
														<input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
													</div>
													<div className="form-group">
														<label htmlFor="loginPassword">Password</label>
														<input type="password" className="form-control" id="loginPassword" placeholder="Password" />
													</div>
													<button type="submit" className="btn_nav">
														Login 🙋
													</button>
												</form>
												<button className="btn_nav" data-tab="register" onClick={() => handleInnerTabChange("register")} >
													Don't have an account ?? create here 👉
												</button>

											</div>
										</>
									) : (
										<>
											<div className="register_box content_wrap">
												<h3>Donor Register</h3>
												<form>
													<div className="form-group">
														<label htmlFor="registerName">Full Name</label>
														<input
															type="text"
															className="form-control"
															id="registerName"
															placeholder="Enter your name"
															name="FullName"
															value={formHeader.FullName}
															onChange={inputEvent}
														/>
													</div>
													<div className="form-group">
														<label htmlFor="registerAddress">Address</label>
														<input
															type="text"
															className="form-control"
															id="registerAddress"
															placeholder="Enter address"
															name="Address"
															value={formHeader.Address}
															onChange={inputEvent}
														/>
													</div>
													<div className="form-group">
														<label htmlFor="registerMobileNumber">Mobile Number</label>
														<input
															type="text"
															className="form-control"
															id="registerMobileNumber"
															placeholder="Enter mobile number"
															name="MobileNumber"
															value={formHeader.MobileNumber}
															onChange={inputEvent}
														/>
													</div>
													<div className="form-group">
														<label htmlFor="registerEmail">Email address</label>
														<input
															type="email"
															className="form-control"
															id="registerEmail"
															placeholder="Enter email"
															name="Email"
															value={formHeader.Email}
															onChange={inputEvent}
														/>
													</div>
													<div className="form-group">
														<label htmlFor="registerPassword">Password</label>
														<input
															type="password"
															className="form-control"
															id="registerPassword"
															placeholder="Password"
															name="Password"
															value={formHeader.Password}
															onChange={inputEvent}
														/>
													</div>
													<div className="form-group">
														<label htmlFor="registerConfirmPassword">Confirm Password</label>
														<input
															type="password"
															className="form-control"
															id="registerConfirmPassword"
															placeholder="Confirm Password"
															name="ConfirmPassword"
															value={formHeader.ConfirmPassword}
															onChange={inputEvent}
														/>
													</div>
													<button className="btn_nav" onClick={() => register()}>
														Register 🆕
													</button>
												</form>
												<button
													onClick={() => handleInnerTabChange("login")}
													className="btn_nav"
													data-tab="login"
												>
													Already have an account? Login Here 👌
												</button>
											</div>
										</>

									)}

								</div>

								<div className={`tab-pane fade ${activeTab === 'ngo' ? 'show active' : ''}`} id="ngo">
									{innerActiveTab == 'login' ? (
										<>
											<div class="login_box content_wrap">
												<h3>NGO Login</h3>
												<form>
													<div className="form-group">
														<label htmlFor="loginEmail">Email address</label>
														<input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
													</div>
													<div className="form-group">
														<label htmlFor="loginPassword">Password</label>
														<input type="password" className="form-control" id="loginPassword" placeholder="Password" />
													</div>
													<button type="submit" className="btn_nav">
														Login 🙋
													</button>
												</form>
												<button className="btn_nav" data-tab="register" onClick={() => handleInnerTabChange("register")} >
													Don't have an account ?? create here 👉
												</button>

											</div>
										</>
									) : (
										<>
											<div class="register_box content_wrap">
												<h3>NGO Register</h3>
												<form>
													<div className="form-group">
														<label htmlFor="registerName">Name</label>
														<input type="text" className="form-control" id="registerName" placeholder="Enter your name" />
													</div>
													<div className="form-group">
														<label htmlFor="registerEmail">Email address</label>
														<input type="email" className="form-control" id="registerEmail" placeholder="Enter email" />
													</div>
													<div className="form-group">
														<label htmlFor="registerPassword">Password</label>
														<input type="password" className="form-control" id="registerPassword" placeholder="Password" />
													</div>
													<div className="form-group">
														<label htmlFor="registerConfirmPassword">Confirm Password</label>
														<input type="password" className="form-control" id="registerConfirmPassword"
															placeholder="Confirm Password" />
													</div>
													<button type="submit" className="btn_nav">
														Register 🆕
													</button>
												</form>
												<button onClick={() => handleInnerTabChange("login")} className="btn_nav" data-tab="login">
													Already have account ?? Login Here 👌
												</button>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Loader />
				</>
			)}
			<Footer />
		</>
	);
}

export default RegisterLogin;