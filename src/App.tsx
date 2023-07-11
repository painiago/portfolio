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
import { Helmet} from 'react-helmet'
import './fonts/The Californication.ttf';

import favicon from '../public/img/iconfav.png'
const linkg = 'https://fonts.googleapis.com';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Iago Nascimento | DevWeb</title>
        <meta name="description"content="Iago Nascimento | DevWeb | Portifolio"/>
        <meta http-equiv="Cache-Control" content="public, max-age=86400" />
        <link rel="apple-touch-icon" href={favicon} />
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href={linkg}/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
      </Helmet>

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
