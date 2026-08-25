import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom'

const RegisterRight = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)


        setPassword('')
        setEmail('');
        setName('');
    }
    return <>
        <div className="h-[100%] pt-10 w-1/2 flex flex-col gap-10">

            <div className="flex flex-col gap-5">
                <h1 className="text-7xl font-bold">Create Account</h1>
                <p className="font-lighter text-xl">Sign up to get started with LedgerBank</p>
            </div>

            <form className="flex flex-col gap-8" onSubmit={(e) => {
                submitHandler(e)
            }} action="/Account">

                <div>
                    <label id="name" className="font-bold">Full Name</label>
                    <div className="flex w-full items-center border px-4 py-2 rounded-md gap-5">
                        <User size={20} />
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }
                            }
                            className="outline-none"
                            placeholder="Enter your full name"
                            required
                            type="name" id="name"
                        />
                    </div>
                </div>

                <div>
                    <label id="email" className="font-bold">Email</label>
                    <div className="flex w-full items-center border px-4 py-2 rounded-md gap-5">
                        <Mail size={20} />
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="outline-none"
                            placeholder="Enter your email address"
                            required
                            type="email" id="email"
                        />
                    </div>
                </div>

                <div>
                    <label id="password" className="font-bold">Password</label>
                    <div className="flex w-full items-center border px-4 py-2 rounded-md gap-5">
                        <Lock size={20} />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            className="outline-none"
                            placeholder="Create a password"
                            required
                            type="password" id="password"
                        />
                    </div>
                </div>

                <div>
                    <label className="font-bold" id="confirm-password">Confirm Password</label>
                    <div className="flex w-full items-center border px-4 py-2 rounded-md gap-5">
                        <Lock size={20} />
                        <input
                            className="outline-none"
                            placeholder="Confirm your password"
                            required
                            type="password" id="confirm-password"
                        />
                    </div>
                </div>

                <div>
                    <label className="flex gap-5 items-center">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <p> I agree to the <span className="text-[#4646ea] font-semibold">Terms & Conditions and Privacy Policy</span></p>
                    </label>
                </div>

                <div>
                    <Link to="/account" className="bg-[#4646ea] text-white font-bold px-4 py-2 rounded-md">Create Account</Link>
                </div>

                <div className="border-t-1 border-[#e4e5fc]">
                    <div className="flex items-center mt-5 font-semibold">
                        <p>Already have an account? <Link to="/login" className="text-blue-800 ml-2">Login</Link></p>
                    </div>
                </div>
            </form>
        </div>

    </>
}

export default RegisterRight;
