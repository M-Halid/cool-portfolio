import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngular, faCss3, faGitAlt,  faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      }, [])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1><AnimatedLetters 
                letterClass={letterClass}
                strArray={["A","b","o","u","t"," ","m","e"]} idx={15} />
                </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus odio et blanditiis tempora perspiciatis nihil quod tempore quia expedita, fugiat sequi fugit fuga quo sit quidem ut cum ipsam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam veritatis suscipit omnis, dignissimos autem necessitatibus maxime quis optio reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, explicabo.</p>
            </div>  
            <div className="stage-cube-cont">
                <div className="cubespinner">

                    <div className="face1">
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon ={faGitAlt} color="#DD0031"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon ={faAngular} color="#DD0031"/>
                    </div>

                </div>
            </div>
        </div>
        )
}

export default About