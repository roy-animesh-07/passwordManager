import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { useEffect, useState } from 'react'
import PasswordRow from './components/PasswordRow'


function App() {
  const [hidden, setHidden] = useState(true);
  const [success, setSuccess] = useState(0);
  const [mypass, setMypass] = useState([]);

  const [domain, setdomain] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const res = fetch('http://localhost:8000/api/password/allpasswords');
    res.then(res => res.json()).then(res => setMypass(res));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      domain,
      username,
      password,
    }
    const response = fetch('http://localhost:8000/api/password/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    response.then(res => {
      if (res.ok) {
        form.reset();
        setSuccess(1);
        setTimeout(() => {
          setSuccess(0);
          window.location.reload();
        }, 2000);
      } else {
        setSuccess(2);
        setTimeout(() => {
          setSuccess(0);
          window.location.reload();
        }, 2000);
        console.error("Signup failed");
      }
    })

  }


  return (
    <>
      <Header />
      <div className="content min-h-[80.65vh]">
        {
          success === 1 && (
            <div className='bg-green-200 p-3 mt-4 flex justify-end w-fit absolute right-1'> Password Added Successfully </div>
          )
        }
        {
          success === 2 && (
            <div className='bg-red-200 p-3 mt-4 flex justify-end w-fit absolute right-1'> Password Added Failed </div>
          )
        }
        <div className='flex justify-center mt-4 w-full'>

          <form onSubmit={handleSubmit} className='flex w-full flex-col items-center gap-y-4'>
            <div className='flex justify-between w-[100%] md:w-[50%] '>
              <label>Domain:</label>
              <input className='border  w-[75%]  h-10 px-2 rounded shadow outline-none' type="text" name="domain" value={domain} onChange={(e) => setdomain(e.target.value)} />
            </div>
            <div className=' w-[100%] md:w-[50%] flex justify-between'>
              <label>Username:</label>
              <input className='border w-[75%] h-10 px-2 rounded shadow outline-none' type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
            </div>
            <div className=' w-[100%] md:w-[50%] flex justify-between'>
              <label>Password:</label>
              <div className='border w-[75%] flex justify-between h-fit'>
                <input className='w-[85%]  h-10 px-2 rounded shadow outline-none' type={hidden ? "password" : "text"} name="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
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
              </div>
            </div>
            <button className='hover:cursor-pointer flex justify-center items-center border rounded px-3 py-1 bg-green-100'>
              <lord-icon
                src="https://cdn.lordicon.com/fjvfsqea.json"
                trigger="hover"
              >
              </lord-icon> Save
            </button>


          </form>
        </div>
        <div className='w-full mt-10'>
          <p className='text-2xl font-bold text-center '>MY PASSWORDS</p>
          <div className='flex flex-col items-center'>
            <div className=' w-[100%] md:w-[75%] flex justify-between bg-green-400'>
              <div className='w-[25%] border text-center truncate '>Domain</div>
              <div className='w-[25%] border text-center truncate '>Username</div>
              <div className='w-[25%] border text-center truncate '>Password</div>
              <div className='w-[25%] border text-center truncate '>Operation</div>
            </div>
            {
              mypass.length > 0 ? (mypass.map((pass,index) => (
                <PasswordRow key={index} domain={pass.domain} username={pass.username} password={pass.password} setDomain={setdomain} setUsername={setusername} setPassword={setpassword}  />))) : (<div>No records found</div>)

            }



          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
