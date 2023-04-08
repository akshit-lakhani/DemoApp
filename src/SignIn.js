import React, { Component } from 'react'
import './global.scss'
import LeftImg from './Saly-3.png'
import RightImg from './Saly-2.png'
import googleIcon from './google.png'
import FacebookIcon from './Facebook.png'
import appleIcon from './apple.png'
import {TextField,FormLabel,FormControl,Button} from '@mui/material'

export default class SignIn extends Component {
    state={
        path:window.location.pathname
    }
  render() {
    return (
        <>
            <div className='container'>
                <div className='left-container'>
                    <div className='logo-container'>Your Logo</div>
                    <div className='left-image-container'>
                        <img src={LeftImg} />
                    </div>
                </div>
                <div className='card-container'>
                    <div className='title-container'>
                        <div>
                            <div className='card-subtitle'>Welcome to Lorem</div>
                            {this.state.path=="/signup"?(
                                <div className='card-title'>Sign up</div>
                            ):(
                                <div className='card-title'>Sign in</div>
                            )}
                        </div>
                        {this.state.path=="/signup"?(
                            <div className='signup-text'>
                                <div>Have an Account ?</div>
                                <div className='link'>Sign in</div>
                            </div>
                        ):(
                            <div className='signup-text'>
                                <div>No Account ?</div>
                                <div className='link'>Sign up</div>
                            </div>
                        )}
                    </div>
                    <div className='card-form-wrapper'>
                        {this.state.path=="/signup"?(
                            <div>
                                <FormControl className='form-container'>
                                    <FormLabel className='form-label'>Enter your username or email address</FormLabel>
                                    <TextField className='form-input' id="outlined-basic" label="Username or email address" variant="outlined" />
                                    <div className='form-row'>
                                        <div style={{marginRight:"5px"}}>
                                            <FormLabel className='form-label'>Username</FormLabel>
                                            <TextField className='form-input' id="outlined-basic" label="User name" variant="outlined" />
                                        </div>
                                        <div  style={{marginLeft:"5px"}}>
                                            <FormLabel className='form-label'>Contact Number</FormLabel>
                                            <TextField className='form-input' id="outlined-basic" label="Contact Number" variant="outlined" />
                                        </div>
                                    </div>
                                    <FormLabel className='form-label'>Enter your Password</FormLabel>
                                    <TextField className='form-input' type='password' id="outlined-basic" label="Password" variant="outlined" />
                                    <div className='forgot-password-link'>
                                        Forgot Password
                                    </div>
                                    <Button color='primary' variant='contained'>Sign In</Button>
                                </FormControl>
                            </div>
                        ):(
                            <div>
                                <FormControl className='form-container'>
                                    <FormLabel className='form-label'>Enter your username or email address</FormLabel>
                                    <TextField className='form-input' id="outlined-basic" label="Username or email address" variant="outlined" />
                                    <FormLabel className='form-label'>Enter your Password</FormLabel>
                                    <TextField className='form-input' type='password' id="outlined-basic" label="Password" variant="outlined" />
                                    <div className='forgot-password-link'>
                                        Forgot Password
                                    </div>
                                    <Button color='primary' variant='contained'>Sign In</Button>
                                </FormControl>
                            </div>
                        )}
                        {this.state.path=="/"?(
                            <>    
                                <div className='card-text'>
                                    OR
                                </div>
                                <div className='social-login-container'>
                                    <Button className='google-signin' variant="contained" startIcon={<img src={googleIcon} />}>
                                        Sign in with Google
                                    </Button>
                                    <Button className='other-channel' variant="contained">
                                        <img src={FacebookIcon} />
                                    </Button>
                                    <Button className='other-channel' variant="contained">
                                        <img src={appleIcon} />
                                    </Button>
                                </div>
                            </>
                        ):null}
                    </div>
                </div>
                <div className='right-container'>
                    <div className='right-image-container'>
                        <img src={RightImg} />
                    </div>
                </div>
            </div>
        </>
    )
  }
}
