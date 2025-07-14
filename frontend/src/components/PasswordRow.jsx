import { useState } from "react"

const PasswordRow = (props) => {
    const [delsuc, setDelsuc] = useState(0);
    const [hidden, setHidden] = useState(true);
    const handleEdit = () => {
        props.setDomain(props.domain);
        props.setUsername(props.username);
        props.setPassword(props.password);

    }
    const handleDelete = () => {
        const data = {
            domain: props.domain
        }
        const response = fetch('http://localhost:8000/api/password/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        response.then(res => {
            if (res.ok) {
                setDelsuc(1);
                setTimeout(() => {
                    setDelsuc(0);
                    window.location.reload();
                }, 1000);
            } else {
                setDelsuc(2);
                console.error("Signup failed");
            }
        })
    }
    return (
        <>
            {
                delsuc === 1 && (
                    <div className='bg-red-400 p-3 mt-4 flex justify-end w-fit absolute top-20 right-1'> Password Deleted Successfully </div>
                )
            }
            
            <div className='w-[100%] md:w-[75%] flex justify-between items-center bg-green-100 '>
                <div className='w-[25%] border-l text-center  '>{props.domain}</div>
                <div className='w-[25%] border-l text-center  '>{props.username}</div>
                <div className='w-[25%] border-l justify-between items-center px-2 flex  '>
                    <p className="">{hidden?("*".repeat(props.password.length)):(props.password)}</p>
                    <div className="flex">
                        <button onClick={(event) => {
                            event.preventDefault();
                            setHidden(!hidden);
                        }} className='hover:cursor-pointer'>{hidden ? (<lord-icon
                            src="https://cdn.lordicon.com/dicvhxpz.json"
                            trigger="hover"
                        >
                        </lord-icon>) : (<lord-icon
                            src="https://cdn.lordicon.com/dicvhxpz.json"
                            trigger="hover"
                            state="hover-cross"
                        >
                        </lord-icon>)}</button>
                        <button className="hover:cursor-pointer" onClick={() => {

                            navigator.clipboard.writeText(props.password)
                                .then(() => alert("Copied!"))
                                .catch(err => alert("Failed to copy!", err));
                        }} >
                            <lord-icon
                                src="https://cdn.lordicon.com/sbnjyzil.json"
                                trigger="hover"
                            >
                            </lord-icon>
                        </button>
                    </div>

                </div>
                <div className='w-[25%] border-l justify-center flex gap-3 hover:cursor-pointer  '>
                    <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        onClick={handleEdit}
                    >
                    </lord-icon>
                    <lord-icon
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="hover"
                        onClick={handleDelete}
                    >
                    </lord-icon>
                </div>
            </div>
        </>
    )
}

export default PasswordRow;