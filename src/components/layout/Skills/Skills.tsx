import './Skills.scss'

import { faCubes, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function Skills (){
  return(
    <div className= "box" id="skills-sobre">
    <div className="container">
      {/* <h2>Olá, sou o Iago. Prazer em conhecê-lo</h2> */}
      <h2>Prazer em conhecê-lo</h2>
      <div className="containerDescription">
        <p className="descricao">Sou um freelancer desenvolvedor front-end, especializado em criar experiências digitais incríveis. Tenho uma abordagem colaborativa e estou aberto a compartilhar ideias para desenvolver produtos excepcionais. Com confiança e curiosidade natural, estou constantemente trabalhando para resolver bugs e problemas, um de cada vez.</p>
        </div>
        
      <div className="content">
        <div className="column">
          <span className="styles.fa">
          <FontAwesomeIcon icon={faLaptop} className="iconSkills"/>
        </span>
          <h2> Desenvolvedor Frontend</h2>
          <p>Gosto de codificar as coisas do zero e gosto de dar vida às idéias no navegador.</p>
          <p className="titulo">Idiomas que falo:</p>
          <p>HTML, CSS, Sass, Git, JS, React.js</p>
          <p className="titulo">Ferramentas do desenvolvedor:</p>
          <ul>  
            <li>Atom</li>
            <li>Bootstrap</li>
            <li>Github</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="column">
        <span className="fa">
        <FontAwesomeIcon icon={faCubes} className="iconSkills"/>
        </span>
          <h2>Designer</h2>
          <p> Valorizo a estrutura de conteúdo simples, padrões de design limpos e interações ponderadas.</p>
          <p className="titulo">Coisas que eu gosto de projetar:</p>
          <p>Web, Logotipos</p>
          <p className="titulo">Ferramentas de design:</p>
          <ul>
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;

