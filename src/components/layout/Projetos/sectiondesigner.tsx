import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesdesigner.scss';
import img1 from '/public/img/pfinal.png';
import img2 from '/public/img/ss2.png';
import img3 from '/public/img/construcao.png';

import projectsData from '../../../api/design.json';

function ProjetosDesigner() {
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

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


  return (
    <section className="projects-section1 " id="projects1">
      <div className="containerbarline1">
        <div className="line1"></div>
          <p className='desh2'>Designer</p>
        <div className="line1"></div>
        </div>
      <div className="projects-grid1">
      {projectsData.map((project) => (
            <div className="project-title1" key={project.id}>
              <div className="testhover">
                <a href={project.link} target="_blank" className="project">
                  {project.id === 1 && <img src={img1} alt="projeto" className="project-image1" />}
                  {project.id === 2 && <img src={img2} alt="projeto" className="project-image1" />}
                  {project.id === 3 && <img src={img3} alt="projeto" className="project-image1" />}
                </a>
                <div className="containerbar1">
                  <div className="containerbar__content1">
                     <a href={project.link} target="_blank" >
                      <p>{project.title}</p>
                    </a>
                    {isProjectSelected(project.id) ? (
                      <FontAwesomeIcon icon={faTimes} className="rotateicon" onClick={() => handleIconClick(project.id)}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faBars} className="rotateicon" onClick={() => handleIconClick(project.id)}
                      />
                    )}
                  </div>
                </div>
                <div className={`boxproject1 project-description1 ${
                    isProjectSelected(project.id) ? 'show' : ''
                  }`}
                >
                  <ul>
                    <li>
                      <div className="boxcircle">
                        <p>{project.subtitle}</p>
                      </div>
                    </li>
                    <li>
                      <div className="boxcircle">
                        <p>{project.tec1}</p>
                      </div>
                    </li>
                    <li>
                      <div className="boxcircle">
                        <p>{project.tec2}</p>
                      </div>
                    </li>
                    <li>
                      <div className="boxcircle">
                        <p>{project.tec3}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProjetosDesigner;
