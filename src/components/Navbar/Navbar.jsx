import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import { Link } from 'react-router-dom'
import user_profile from '../../assets/user_profile.jpg'
import voicesearch from '../../assets/voice-search.png'


const Navbar = ({setSidebar}) => {
  return (
   <nav className='flex-div'>
    <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(prev => !prev)}
        src={menu_icon} 
        alt="" />
        <Link to='/'><img className='logo'src={logo} alt="" /></Link>
    </div>
    <div className='nav-middle flex-div'>
      <div className='search-box flex-div'>
        <input type="text" placeholder='  Search' />
        <img src={search_icon} alt="" />
        <img src={voicesearch} alt="" />
      </div>
    </div>

    <div className='nav-right flex-div'>
      <img src={upload_icon} alt="" />
      <img src={more_icon} alt="" />
      <img src={notification_icon} alt="" />
      <img src={user_profile} className='user-icon' alt="" />
    </div>
  </nav>
  )
}

export default Navbar
