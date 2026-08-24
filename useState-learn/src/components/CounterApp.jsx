import { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0)

    const IncreaseNum = () => {
        setCount(count + 1);
    }

    const DecreaseNum = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="p-10 flex flex-col bg-gray-800 h-screen text-gray-200 gap-10 items-center">
                <h1 className='bg-gray-400  rounded-md flex items-center justify-center font-bold text-5xl h-[200px] w-[200px]'>{count}</h1>
                <div className='flex gap-5'>
                    <button className="border px-4 py-2 rounded-md" onClick={IncreaseNum}>Increase</button>
                    <button className="border px-4 py-2 rounded-md" onClick={DecreaseNum}>decrease</button>
                </div>
            </div>
        </>
    )
}

export default CounterApp;
