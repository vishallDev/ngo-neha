// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import  Header  from './header/header';
import Hero from './hero/hero'
import Footer from './footer/footer'
import RegisterLogin from './register-login/register-login';
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <RegisterLogin/>
    <Footer/>
    </>
  );
}

export default App;
