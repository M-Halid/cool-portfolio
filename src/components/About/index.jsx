import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1><AnimatedLetters strArray={"About me".split()} idx={15} />
                </h1>
                <p> I'm Very good at something</p>
                <p>You know, stuff</p>
                <p>Ok c u around!</p>
            </div>
        </div>)
}

export default About