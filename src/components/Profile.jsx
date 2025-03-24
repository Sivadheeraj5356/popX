import React from 'react'
import woman from "../assets/woman.jpg"
import camera from "../assets/camera.png"
import { useLocation } from 'react-router-dom'
const Profile = () => {
    const location = useLocation()
    const name = location.state?.name
    const email = location.state?.email
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 '>
    <div className='h-[85vh] w-80 bg-white flex flex-col '>
      <div className='text-black text-lg px-5 mt-3'>
       Account Settings
      </div>
      
      <div className='h-full bg-[#f7f8f9] mt-3'>
      <div className='mt-3 grid grid-cols-3'>
        <div className='h-20 w-20 mt-3 mx-5'>
        <img src={woman} alt="woman" height={'100%'} width={'100%'} className='rounded-full' />
        <img src={camera} alt="camera" className='relative -top-7 left-[3.5rem]' height={23} width={23}/>
        </div>
      
        <div className='col-span-2 mt-3 ml-4'>
            <div className='font-semibold'>
            {name ? name : 'Marry Doe'}
            </div>
            <div className='text-sm'>
                {email ? email : 'Marry@Gmail.com'}
            </div>
        </div>
      </div>

      <div className='mt-5 mx-4 text-sm border-b-2 border-dashed border-gray-700 pb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, commodi. Sunt velit expedita assumenda pariatur officia! A, nemo!
      </div>
       
      <div className='mt-5 mx-4 text-sm border-b-2 border-dashed border-gray-700 pb-80'>

      </div>

      </div>
     
    
      </div>
      </div>
)
}

export default Profile