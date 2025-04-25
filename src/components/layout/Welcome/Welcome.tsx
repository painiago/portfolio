import './welcome.scss';

import { faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingAudio from './SettingAudio';
import videointro from '/public/img/intro.mp4';

function Welcome (){
return (
  <section id="welcome-section" className="welcomesection">
      <div className='container text' id='text'>
        <span>
          <h1>
            Hi, I'm Iago Nascimento
              <FontAwesomeIcon icon={faHand} className='icon'/>
            </h1>
          </span>
          <p className='web'> desenvolvedor Front-End | Social Media</p>
          <p className='subtitle'>Transformo ideias em interfaces.</p>
          <SettingAudio/> 
          <div className="contact-linkwelcome">
          <a className="btnwelcome btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/iagonascimento/" role="button"><i className="fab fa-linkedin-in "></i></a>
          <a className="btnwelcome btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/painiago" role="button"><i className="fab fa-github "></i></a>
          <a className="btnwelcome btn-outline-light btn-floating m-1" target="_blank" href="https://www.behance.net/iagonascimento6/" role="button"><i className="fa-brands fa-behance "></i></a>
        </div>
        </div>
        <div className='bg one'>
       <video src={videointro} id='bgvid'   autoPlay loop muted  playsInline></video>
      </div>
</section> 
  )
}
export default Welcome;