import React from 'react'

function NavBar() {
  return (
    <div>
       <div className='flex justify-between items-center bg-gray-300 p-4 gap-3'>
           <div>Cityfix</div>
        <ul className='flex justify-between items-center'>
            <li>Home</li>
            <li>Feed section</li>
            <li>Report Issue</li>
            <li>Login</li>
        </ul>
       </div>
    </div>
  )
}

export default NavBar