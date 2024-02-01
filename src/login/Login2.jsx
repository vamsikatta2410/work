import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import logo from '../assets/google.png'
import "./styles.css";

const Login2 = () => {
    return (
        <div className="box">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="div">
                        <div className="group-2">
                            <p className="logo-img">
                                <img src={logo}/>
                            </p>
                            <p className="no-account-sign-up">
                                <span className="text-wrapper-2">
                                    No Account ?<br />
                                </span>
                                <span className="text-wrapper-3">Sign up</span>
                            </p>
                        </div>
                        <div className="text-wrapper-4">Sign in</div>
                    </div>
                    <div className="group-3">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <FaGoogle className="google-instance" style={{color:'red'}}/>
                                <div className="text-wrapper-5">Sign in with Google</div>
                            </div>
                        </div>
                        <div className="facebook-wrapper">
                            <FaFacebook className="facebook-instance" style={{color:'blue'}}/>
                        </div>
                        <div className="apple-wrapper">
                            <FaApple className="apple-instance" style={{color:'black'}}/>
                        </div>
                    </div>
                    <form className='form'>
                        <div className="group-54">
                            <label htmlFor="username" className='field'>Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username" />
                        </div>
                        <div className="group-54-instance">
                            <label htmlFor="password" className='field'>Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <div className="text-wrapper-6">Forgot Password</div>
                        <div className="div-wrapper">
                            <div className="overlap-2">
                                <div className="text-wrapper-7">Sign in</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login2;
