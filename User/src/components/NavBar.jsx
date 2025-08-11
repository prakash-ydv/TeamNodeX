import React from 'react'

function NavBar() {
  return (
    <div>
       <div className='flex justify-between items-center bg-gray-300 p-4 '>
           <div>Cityfix</div>
        <ul className='flex justify-between items-center gap-4'>
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