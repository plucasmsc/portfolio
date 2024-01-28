{/*PEDRO LUCAS MS CUNHA - ID 301.376.268 2024-01-28   */}
import React, {useState} from 'react'


import Icon from '../assets/icon.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)



  return (
    <div className= 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
      <div> 
        <img src={Icon} alt="Icon Image" style={{width: '70px'}}/>
      </div>


      {/* menu */}
              <ul className='hidden md:flex'>
          <li> Home </li>
          <li> About </li>
          <li> Skills </li>
          <li> Work </li>
          <li> Contact </li>

        </ul>
      

  
      

      
    </div>
  )
}

export default Navbar