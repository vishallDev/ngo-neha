import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import './reg-login.css';

function RegisterLogin() {
  const [activeTab, setActiveTab] = useState('login');
  const [loader, setLoader] = useState(false);

  const handleTabChange = (event) => {
    event.preventDefault();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setActiveTab(event.target.dataset.tab);
    }, 2000);
  };

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //     fetch('http://localhost:3000/api/users')
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         console.log('Received data:', data);
  //         setUsers(data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, []);
  return (
    <>
      <Header/>
      {!loader ? (
        <>
          <div className='loginContainer'>
            <div className="container">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                    data-tab="login"
                    onClick={handleTabChange}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                    data-tab="register"
                    onClick={handleTabChange}
                    href="#"
                  >
                    Register
                  </button>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
                  id="login"
                >
                  <h3>Login</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="loginEmail">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="loginPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder="Password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </form>
                </div>

                <div
                  className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
                  id="register"
                >
                  <h3>Register</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="registerName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registerName"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerEmail">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="registerEmail"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="registerPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerConfirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="registerConfirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader/>
        </>
      )}
      <Footer/>
    </>
  );
}

export default RegisterLogin;
