
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail, userPassword)
    }
    return (
        <div>
            <h3 className="text-3xl mt-[56px] mb-4">Please Register</h3>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-[450px]">
                <input className="bg-slate-500 py-2 px-4" type="text" placeholder="Your Name" name="name" id="" />
                <input className="bg-slate-500 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" />
                <input className="bg-slate-500 py-2 px-4" type="password" placeholder="Password" name="password" id="" />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;