import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    const navigate = useNavigate()
   const navigateToProfile = () => {    
    navigate('/profile')    
   }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 '>
    <div className='h-[85vh] w-80 bg-[#f7f8f9] flex flex-col '>
      <div className='text-black font-semibold text-2xl px-5 w-52 mt-6'>
       SignIn to your PopX account
      </div>
      <div className='text-[#787979] pl-5 w-56 mt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
     </div>

     <div className='mx-5 mt-5'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder="Enter email address "
              />
              <span className='input-text'>Email Address

              </span>
            </label>
           </div>

           <div className='mx-5 mt-5'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder="Enter Password "
              />
              <span className='input-text'>Password

              </span>
            </label>
           </div>

           <div className='w-72 flex flex-col mt-5'>
                <button className='bg-[#cbcbcb]  w-full ml-4 text-white p-2 rounded-md'
            onClick={navigateToProfile}
                >
                    Login
                </button>
              </div>


      </div>
      </div>

)
}

export default LoginScreen