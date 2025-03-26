import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import auth from "../components/firebase/firebase.config";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleTermsAccepted = () => {
        setTermsAccepted(!termsAccepted);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        const userName = e.target.name.value;
        console.log(userEmail, userPassword);
        if (userPassword.length < 6) {
            setErrorMessage('Password must be at least 6 charcaters long');
            return;
        }
        else if (!/[A-Z]/.test(userPassword)) {
            setErrorMessage('Password must contain at least one uppercase letter');
            return;
        }
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            console.log(result.user);
            setSuccessMessage('Successfully Registered');

            // update name
            updateProfile(result.user, {
                displayName: userName,
            })
            .then(() => {
                console.log('profile updated');
            })
            .catch(() => {
                console.log('profile update failed');
            })
        })
        .catch(error => {
            console.error(error);
            setErrorMessage(error.message)
        })
    }
    return (
        <div>
            <h3 className="text-3xl mt-[56px] mb-4">Please Register</h3>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-[450px]">
                <input className="bg-slate-500 py-2 px-4" type="text" placeholder="Your Name" name="name" id="" required/>
                <input className="bg-slate-500 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" required/>
                <div className="relative">
                    <input className="bg-slate-500 py-2 px-4 w-full" type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" id="" required/>
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-2 right-4 text-2xl">
                        {
                            showPassword ? <IoEye />   :
                            <IoEyeOff />      
                        }
                    </span>
                </div>
                <div className="flex gap-2 mt-6 mb-6">
                      <input onClick={handleTermsAccepted} type="checkbox"  className="checkbox checkbox-success" />
                      <p>Accept the terms and conditions</p>
                </div>
                <input disabled={!termsAccepted} className="btn btn-primary" type="submit" value="Submit" />
                <p>Already Have an Account? Please <Link to='/login'>Login</Link></p>
                {
                    errorMessage && <div>
                        <p className="text-3xl text-red-600">{errorMessage}</p>
                    </div>
                }
                {
                    successMessage && <div>
                        <p className="text-3xl text-green-600">{successMessage}</p>
                    </div>
                }
            </form>
        </div>
    );
};

export default Register;