import { createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../components/firebase/firebase.config";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const handleTermsAccepted = () => {
        setTermsAccepted(!termsAccepted);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail, userPassword);
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <h3 className="text-3xl mt-[56px] mb-4">Please Register</h3>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-[450px]">
                <input className="bg-slate-500 py-2 px-4" type="text" placeholder="Your Name" name="name" id="" />
                <input className="bg-slate-500 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" />
                <div className="relative">
                    <input className="bg-slate-500 py-2 px-4 w-full" type={showPassword ? 'password' : 'text'} placeholder="Password" name="password" id="" />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-2 right-4 text-2xl">
                        {
                            showPassword ? 
                            <IoEyeOff />
                            :
                            <IoEye />
                        }
                    </span>
                </div>
                <div className="flex gap-2 mt-6 mb-6">
                      <input onClick={handleTermsAccepted} type="checkbox"  className="checkbox checkbox-success" />
                      <p>Accept the terms and conditions</p>
                </div>
                <input disabled={!termsAccepted} className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;