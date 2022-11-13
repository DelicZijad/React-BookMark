import {useState} from 'react'
import {FaFacebook,FaTwitter} from 'react-icons/fa';
import NavItems from './NavItems';
function Nav(){
 const [navClass,setNavClass]=useState('')
    return (
        <nav className={`nav fs-nav ${navClass}`}>
            <div className="container nav--container">
               <NavItems navClass={navClass} setNavClass={setNavClass} />

                <ul className='nav--links hide txtGray'>
                    <li><a href="#" className="nav--link redOnHover" aria-label='see our features'>FEATURES</a></li>
                    <li><a href="#" className="nav--link redOnHover" aria-label='look at our pricing'>PRICING</a></li>
                    <li><a href="#" className="nav--link redOnHover" aria-label='contact us'>CONTACT</a></li>
                    <li><a href="#" className="nav--link btnRed btnMax nav--login" aria-label='sign in to your account'>LOGIN</a></li>
                </ul>
  
  <div className="nav--socials hide">
    <FaFacebook role="link" className='nav--social' style={{cursor:"pointer"}}/>
    <FaTwitter role="link" className='nav--social ' style={{cursor:"pointer"}}/>
  </div>
            </div>
        </nav>
    )
}
export default Nav;