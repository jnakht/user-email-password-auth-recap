import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../components/firebase/firebase.config';
import { Link } from 'react-router-dom';


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((result) => {
            console.log(result.user)
            // if email is not verified
            if (!result.user.emailVerified) {
                alert('Please Verify Your Email');
                return;
            }
            else {
                setSuccessMessage('Successfully Logged In');
            }
            
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" 
                                name='email' 
                                className="input" placeholder="Email"
                                required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" 
                                name='password'
                                className="input" placeholder="Password"
                                required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>New Here? Please <Link to='/register'>Sign Up</Link></p>
                                {
                                    errorMessage && <div>
                                        <p className='text-red-600 text-3xl'>{errorMessage}</p>
                                    </div>
                                }
                                {
                                    successMessage && <div>
                                        <p className='text-green-600 text-3xl'>{successMessage}</p>
                                    </div>
                                }
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;