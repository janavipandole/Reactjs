import { useState } from "react";

function CreateNotes() {
    const [heading, setHeading] = useState(''), [description, setDescription] = useState(''), [notes, setNotes] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const copyNotes = [...notes]
        copyNotes.push({ heading, description })

        setNotes(copyNotes)

        setHeading('');
        setDescription('');
    }

    const deleteNotes = (index) => {
        const copyNotes = [...notes]

        copyNotes.splice(index, 1)

        setNotes(copyNotes)
    }
    return (
        <>
            <div className="h-screen p-5 flex gap-10 w-full">

                <div className="h-screen w-1/2">
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="flex flex-col  w-1/2 justify-between gap-4">
                            <h1 className="font-bold text-2xl">Create Notes</h1>
                            <input
                                className="outline-none border-1 px-4 py-2 rounded-md"
                                placeholder="Note Heading"
                                value={heading}
                                onChange={(e) => {
                                    setHeading(e.target.value)
                                }}
                            />
                            <textarea
                                className="outline-none border-1 h-[200px] px-4 py-2 rounded-md"
                                placeholder="Note Description"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                            <button className="text-white bg-blue-500 font-semibold px-4 py-2 rounded-md">Create Note</button>
                        </div>
                    </form>
                </div>

                <div className="h-screen w-1/2 border-l-1 p-5 flex flex-col  gap-5">
                    <h1 className="font-bold text-2xl">Recent Notes</h1>

                    <div className="flex-wrap flex gap-5 h-[80vh] overflow-auto">
                        {notes.map((data, index) => {
                            return <div key={index} >
                                <div className="h-[140px] w-[180px] p-2 border flex flex-col justify-between rounded-md items-center">
                                    <div className="flex flex-col gap-2 items-center">
                                        <h2 className="text-[12px] font-semibold">{data.heading}</h2>
                                        <p className="text-[10px]">{data.description}</p>
                                    </div>
                                    <button onClick={(index) => {
                                        deleteNotes(index)
                                    }} className="bg-red-600 px-4 text-[12px] font-semibold rounded-md">Delete</button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNotes
