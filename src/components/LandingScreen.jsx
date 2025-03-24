import React from 'react'
import { useNavigate } from 'react-router-dom'
const LandingScreen = () => {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }
    const navigateToCreateAccount = () => {
        navigate('/create-account')
    }
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 '>
         <div className='h-[85vh] w-80 bg-[#f7f8f9] flex flex-col justify-end'>
              <div className='text-black font-semibold text-2xl px-5'>
                Welcome to PopX
              </div>
              <div className='text-[#787979] pl-5 w-56'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              </div>
              <div className='w-72 flex flex-col mt-5'>
                <button className='bg-[#6c25ff] w-full ml-4 text-white p-2 rounded-md'
                onClick={navigateToCreateAccount}
                >
                    Create Account
                </button>
              </div>
              <div className='w-72 flex flex-col mt-3 mb-10'>
                <button className='bg-[#cebafb] w-full ml-4 text-black p-2 rounded-md font-semibold'
                onClick={navigateToLogin}
                >
                Already Registered? Login
                </button>
              </div>
              
         </div>
    </div>
  )
}

export default LandingScreen