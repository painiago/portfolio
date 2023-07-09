/* eslint-disable react/jsx-no-undef */
import './styles/Global.scss';

// IMPORTAÇÃO DE COMPONENTES
import './components/layout/Navbar/NavBar';
import NavBar from './components/layout/Navbar/NavBar';
import Welcome from './components/layout/Welcome/Welcome';
import Projetos from './components/layout/Projetos/Projetos';
import Contato from './components/layout/Contato/Contato';
import Footer from './components/layout/Footer/Footer';
import SliderLogo from './components/layout/SliderLogos/SliderLogo';
import Skills from './components/layout/Skills/Skills';
import Curriculo from './components/curriculo/curriculo';
import ProjetosDesigner from './components/layout/Projetos/sectiondesigner';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <SliderLogo />
      <Skills />
      <Projetos />
      <ProjetosDesigner/>
      <Curriculo />
      <Contato/>
      <Footer />
    </div>
  );
}

export default App;
