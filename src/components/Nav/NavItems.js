import logo1 from '../../images/logo-bookmark.svg';
import logoActive from '../../images/logo-bookmark-white.svg'
import menu from "../../images/icon-hamburger.svg"
import closed from "../../images/icon-close.svg"
import { useState } from 'react';
const NavItems = (props) => {
    const {navClass,setNavClass}=props
     const[logo,setLogo]=useState(logo1)
   const [menuClass,setMenuClass]=useState('')
    const [closedClass,setClosedClass]=useState('hide')
    function handleMenu(){
        setLogo(logoActive)
        setNavClass('active')
        setMenuClass('hide')
        setClosedClass('')
    }
    function handleClosed(){
        setLogo(logo1)
        setNavClass('')
        setMenuClass('')
        setClosedClass('hide')
    }
  return (
    <div className="nav--items">
                    <a href="#" className="nav--logo"><img src={logo} alt="logo" /></a>
                    <div className="nav--btns">
                    <a onClick={handleMenu} className={`nav--menu ${menuClass}`}><img src={menu} alt="menu" /></a>
                        <a onClick={handleClosed} className={`nav--closed ${closedClass}`}><img src={closed} alt="close" /></a>
                    </div>
                </div>
  )
}

export default NavItems