import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn';

const App=()=>{
  const responseFacebook = (response) => {
  console.log(response);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
