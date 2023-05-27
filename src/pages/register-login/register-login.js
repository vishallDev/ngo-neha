import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import './reg-login.css';
import './reg-login.scss';

function RegisterLogin() {
const [activeTab, setActiveTab] = useState('donor');
const [innerActiveTab,setInnerActiveTab] = useState('login');
const [loader, setLoader] = useState(false);

const handleTabChange = (event) => {
event.preventDefault();
setActiveTab(event.target.dataset.tab);
};

const handleInnerTabChange = (tab:any) => {
setInnerActiveTab(tab);
};

return (
<>
  <Header />
  {!loader ? (
  <>
    <div className='loginContainer'>
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className={`nav-link ${activeTab==='donor' ? 'active' : '' }`} data-tab="donor"
              onClick={handleTabChange}>
              Donor
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab==='ngo' ? 'active' : '' }`} data-tab="ngo"
              onClick={handleTabChange} href="#">
              Ngo
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab==='donor' ? 'show active' : '' }`} id="donor">
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
                <button className="btn_nav" data-tab="register" onClick={()=> handleInnerTabChange("register")} >
                  Don't have an account ?? create here 👉
                </button>

              </div>
            </>
            ) : (
            <>
              <div class="register_box content_wrap">
                <h3>Donor Register</h3>
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
                <button onClick={()=> handleInnerTabChange("login")} className="btn_nav" data-tab="login">
                  Already have account ?? Login Here 👌
                </button>
              </div>
            </>
            )}

          </div>

          <div className={`tab-pane fade ${activeTab==='ngo' ? 'show active' : '' }`} id="ngo">
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
                <button className="btn_nav" data-tab="register" onClick={()=> handleInnerTabChange("register")} >
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
                <button onClick={()=> handleInnerTabChange("login")} className="btn_nav" data-tab="login">
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