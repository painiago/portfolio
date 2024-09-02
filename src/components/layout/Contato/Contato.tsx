import React from 'react';
import './Contato.scss';

function Contato(){
  return (
    <section id='contato' className='contact-section'>
      <div className="contact-section-header color">
        <h2 className='contatoh2'> CONTATO </h2>
        <p >Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.</p>
        <div className="contact-link">
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/iagonascimento/" role="button"><i className="fab fa-linkedin-in iconSize"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/painiago" role="button"><i className="fab fa-github iconSize"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.behance.net/iagonascimento6/" role="button"><i className="fa-brands fa-behance iconSize"></i></a>
        </div>
      </div>
      <div className="animacao-rotacao">
        <a href="/" className='contacto-gmail'>
          <p className='contacto'>contatowebiago@gmail.com</p>
        </a>
      </div>
    </section>
  )
}
export default Contato;