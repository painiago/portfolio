import React, { useState, useRef } from 'react';
import { faAngleLeft, faAngleRight, faBars, faHandPointer, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './projeto.scss';
import img1 from '/public/img/arquitetura.png';
import img2 from '/public/img/exhouse2.png';
import img3 from '/public/img/guiajs2.png';
import img4 from '/public/img/sviral.png';
import projectsData from '../../../api/projects.json';

function Projetos() {
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (projectId: number) => {
    setSelectedProjects((prevSelectedProjects) => {
      if (prevSelectedProjects.includes(projectId)) {
        return prevSelectedProjects.filter((id) => id !== projectId);
      } else {
        return [...prevSelectedProjects, projectId];
      }
    });
  };
  
  const isProjectSelected = (projectId: number) => {
    return selectedProjects.includes(projectId);
  };

  const scrollToLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  const scrollToRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="containerbarline">
        <div className="line"></div>
        <h2 className='desh1'>PROJETOS</h2>
        <div className="line"></div>
      </div>
      <div className='slide-container' ref={scrollRef}>
        {projectsData.map((project) => (
          <div key={project.id} className={`swiper-slide`}>
            <div className="project-title">
              <div className="testhover">           
                <a href={project.link} target="_blank" className="project">
                  {(project.id === 4 || project.id === 2 || project.id === 3 || project.id === 1) && 
                    <img src={project.id === 1 ? img1 : project.id === 2 ? img2 : project.id === 3 ? img3 : img4} alt="projeto" className="project-image" loading="lazy" />
                  }
                </a>
               
                <div className="containerbar">
                  <div className="containerbar__content">
                    <a href={project.link} target="_blank" >
                      <p>Visitar site</p>
                    </a>
                    {isProjectSelected(project.id) ? (
                      <FontAwesomeIcon icon={faTimes} className="rotateicon" onClick={() => handleIconClick(project.id)} />
                    ) : (
                      <FontAwesomeIcon icon={faBars} className="rotateicon" onClick={() => handleIconClick(project.id)} />
                    )}
                  </div>
                </div>
                <div className={`boxproject project-description ${isProjectSelected(project.id) ? 'show' : ''}`}>
                  <ul>
                    <li>
                      <div className="boxcircle">
                        <p>{project.subtitle}</p>
                      </div>
                    </li>
                    <li>
                      <div className="boxcircle">
                        <p>{project.tec1}</p>
                        <a href={project.repo} target='_blank'><FontAwesomeIcon icon={faGithub} />Repositório GIT</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="navigation-buttons">
        <button className="scroll-left-button" onClick={scrollToLeft}>
        <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="scroll-right-button" onClick={scrollToRight}>
        <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}

export default Projetos;
