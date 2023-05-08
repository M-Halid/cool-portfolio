
import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','H', 'a', 'l', 'i', 'd']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  }, [])

  return (
    <div className="container home-page">

      <div className="text-zone" >
        <h1>
          <span className={letterClass}>H</span>
          <span className={letterClass} >i</span>
          <br />
          <span className={letterClass}>I</span>
          <span className={letterClass}>'m</span>
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={13} />
          <br />
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>

    </div>
  )
}
export default Home