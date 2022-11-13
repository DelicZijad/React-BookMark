import footerLogo from '../../images/logo-bookmark-footer.svg'
import {FaFacebook,FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
  <footer className='footer bgDark fs-footer'>
    <div className="container footer--container">
    <div className="footer--logo"><img src={footerLogo} alt="footer logo" /></div>
    <div className="footer--links txtGray txtCtr">
      <a href="#" className='redOnHover' aria-label='see our features'>FEATURES</a>
      <a href="#" className='redOnHover' aria-label='look at our pricing'>PRICING</a>
      <a href="#" className='redOnHover' aria-label='contact us'>CONTACT</a>
    </div>
    <div className="footer--socials txtWhite">
   <FaFacebook role="link" className='footer--social redOnHover' style={{cursor:"pointer"}}/>
    <FaTwitter role="link" className='footer--social redOnHover' style={{cursor:"pointer"}}/>
    </div>
    </div>
  </footer>
  )
}

export default Footer