import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Halid_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (

    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
           </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="../About">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mhkutsal/'>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/M-Halid'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 