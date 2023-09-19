// import ScrollColorChange from './ScrollColorChange';
import  './NavBar.scss';

function NavBar (){
  return (
    <nav className="navbar">
      <ul className="navlist">
        <li>
          <a href="#infinite" id='texto'>Sobre</a>
        </li>
        <li>
          <a href="#projects" id='texto'>Projetos</a>
        </li>
        <li>
          <a href="#contato" id='texto'>Contato</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar;


