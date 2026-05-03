import React from 'react'

function Setting() {
  const handleSave = () => {
  alert("Settings Saved");
};
  return (
    <>
   <div className='w-full px-6 py-5 '>
    <h1 className='text-xl font-bold'>Settings</h1>

{/* profile settings */}
    <div className='flex flex-col gap-y-7 pt-9'>
      <h1 className='font-semibold'>Profile Settings</h1>

      <input type="text" placeholder='Username' className='border pl-4 w-96 h-9 rounded'></input>
       <input type="text" placeholder='Email' className='border pl-4 w-96 h-9 rounded'></input>
      <input type="text" placeholder='Change Password' className='border pl-4 w-96 h-9 rounded'></input>
        <button className='bg-cyan-500 text-white w-36 h-10  rounded-md hover:bg-cyan-300 '>Save Changes</button>

    </div>


   </div>
    </>
  )
}

export default Setting