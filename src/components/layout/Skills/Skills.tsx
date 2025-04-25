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
        <p className="descricao">Olá, meu nome é Iago Nascimento, tenho 27 anos e sou desenvolvedor front-end e designer para social media.
Atualmente, minha especialização está no desenvolvimento de interfaces web e na criação de conteúdos visuais para redes sociais. Tenho uma abordagem colaborativa e gosto de trocar ideias para criar produtos que entreguem valor real.

Sou movido pela confiança e curiosidade, sempre buscando resolver desafios técnicos e visuais com criatividade. Meu foco está em entregar resultados de qualidade, que superem as expectativas dos clientes, tanto no código quanto no design.

Estou constantemente aprimorando minhas habilidades em front-end e comunicação visual, e sigo aberto a novos desafios no mundo digital.
Se quiser trocar uma ideia ou colaborar em algum projeto, fique à vontade para me chamar! </p>
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
          <p>Web, Posts para redes sociais, Carrosséis </p>
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

