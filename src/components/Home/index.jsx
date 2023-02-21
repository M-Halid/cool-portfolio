
import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'a', 'l', 'i', 'd']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  return (
    <div className="container home-page">

      <div className="text-zone" >
        <h1>Hi, <br /> I'm
          <img src={LogoTitle} alt="Developer" />
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>

    </div>
  )
}
export default Home