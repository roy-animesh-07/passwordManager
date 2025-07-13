import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { useState } from 'react'

function App() {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <Header />
      <div className="content">
        <div className='flex justify-center mt-4 w-full'>
          <form className='flex w-full flex-col items-center gap-y-4'>
            <div className='w-[50%] flex justify-between'>
              <label>Domain:</label>
              <input className='border w-[75%] ' type="text" name="domain" />
            </div>
            <div className='w-[50%] flex justify-between'>
              <label>Username:</label>
              <input className='border w-[75%]' type="text" name="username" />
            </div>
            <div className='w-[50%] flex justify-between'>
              <label>Password:</label>
              <div className='border w-[75%]'>
                <input className='w-[92%]' type={hidden ? "password" : "text"} name="password" />
                <button onClick={(event) => {
                  event.preventDefault();
                  setHidden(!hidden);
                }} className='hover:cursor-pointer bg-amber-200 '>{hidden ? "Show" : "Hide"}</button>
              </div>
            </div>
            <button className='bg-green-400 p-3 rounded-xl hover:cursor-pointer'>Save</button>


          </form>
        </div>
        <div className='w-full mt-10'>
          <p className='text-2xl font-bold text-center '>MY PASSWORDS</p>
          <div className='flex flex-col items-center'>
            <div className='w-[75%] flex justify-between bg-green-400'>
              <div className='w-[25%] border text-center'>Domain</div>
              <div className='w-[25%] border text-center'>Username</div>
              <div className='w-[25%] border text-center'>Password</div>
              <div className='w-[25%] border text-center'>Operation</div>
            </div>
            <div className='w-[75%] flex justify-between bg-green-100'>
              <div className='w-[25%] border-l text-center'>Google.com</div>
              <div className='w-[25%] border-l text-center'>hi</div>
              <div className='w-[25%] border-l text-center'>abcd</div>
              <div className='w-[25%] border-l justify-center flex gap-3 '>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
