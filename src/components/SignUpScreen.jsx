import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUpScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const navigateToProfile = () => {
        navigate('/profile', { state: { name, email } })
    }
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 '>
         <div className='h-[85vh] w-80 bg-[#f7f8f9] flex flex-col '>
           <div className='text-black font-semibold text-2xl px-5 w-52 mt-6'>
            Create your PopX account
           </div>

           <div className='mx-5 mt-5'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder=""
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                required
              />
              <span className='input-text'>Full Name<span className='text-red-500'>&#42;</span></span>
            </label>
           </div>

           <div className='mx-5 mt-3'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder=" "
                required
              />
              <span className='input-text'>Phone Number<span className='text-red-500'>&#42;</span></span>
            </label>
           </div>
           <div className='mx-5 mt-3'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder=" "
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
              />
              <span className='input-text'>Email Address<span className='text-red-500'>&#42;</span></span>
            </label>
           </div>
           <div className='mx-5 mt-3'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder=" "
              />
              <span className='input-text'>Password<span className='text-red-500'>&#42;</span></span>
            </label>
           </div>
           <div className='mx-5 mt-3'>
            <label className='relative block'>
              <input 
                type="text" 
                className='h-10 px-3 w-full border-gray-500 rounded-md border-2 transition duration-200 border-opacity-50  focus:outline-none' 
                placeholder=" "
              />
              <span className='input-text'>Company Name</span>
            </label>
           </div>
          
          <div className='mx-5 mt-3'>
            <div className='text-black mb-1'>
              Are you an Agency?<span className='text-red-500'>&#42;</span>
            </div>
            <div className='flex gap-6'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input 
                  type="radio" 
                  name="agency" 
                  className='w-4 h-4 accent-[#5b14e9] border-gray-300 focus:ring-[#6c25ff]'
                />
                <span className='text-black'>Yes</span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input 
                  type="radio" 
                  name="agency" 
                  className='w-4 h-4 accent-[#6c25ff] border-gray-300 focus:ring-[#6c25ff]'
                />
                <span className='text-black'>No</span>
              </label>
            </div>
          </div>
          
          <div className='w-72 flex flex-col mt-40'>
                <button className='bg-[#6c25ff] w-full ml-4 text-white p-2 rounded-md'
               onClick={navigateToProfile}
                >
                    Create Account
                </button>
              </div>

         </div>
         </div>
  )
}

export default SignUpScreen