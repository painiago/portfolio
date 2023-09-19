import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projeto.scss';
import img1 from '/public/img/arquitetura.png';
import img2 from '/public/img/exhouse2.png';
import img3 from '/public/img/guiajs2.png';
import projectsData from '../../../api/projects.json';

function Projetos() {
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
    <section className="projects-section" id="projects">
      <div className="containerbarline">
        <div className="line"></div>
        <h2 className='desh1'>PROJETOS</h2>
        <div className="line"></div>
      </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-title" key={project.id}>
              <div className="testhover">
                <a href={project.link} target="_blank" className="project">
                  {project.id === 1 && <img src={img1} alt="projeto" className="project-image" loading="lazy" />}
                  {project.id === 2 && <img src={img2} alt="projeto" className="project-image" loading="lazy" />}
                </a>
                <a href={project.link}  className="project">
                {project.id === 3 && <img src={img3} alt="projeto" className="project-image" loading="lazy" />}
                </a>
                <div className="containerbar">
                  <div className="containerbar__content">
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
                <div className={`boxproject project-description ${
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
export default Projetos;
