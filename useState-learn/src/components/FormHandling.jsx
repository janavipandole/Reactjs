import { useState } from "react";

function FormHandling() {
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');

    }
    return (
        <>
            <div>
                <form onClick={submitHandler} className="flex flex-col gap-10">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        placeholder="Enter your email" className="outline-none bg-[#07132d] px-4 py-2 rounded-md w-[240px]" />

                    <button className="px-4 py-2 rounded-md w-[240px] bg-[#4646ea] cursor-pointer">Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default FormHandling;
