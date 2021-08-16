import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Mensagem from './Components/Mensagem/Mensagem';
import Destaques from './Components/Destaques/Destaques';
import Pandemia from './Components/Pandemia/Pandemia';
import Footer from './Components/Footer/Footer';
import Identidade from './Components/Identidade/Identidade';
import Programas from './Components/Programas-projetos/Programas';
import Relatorio from './Components/Relatorio/Relatorio';
import Ghost from './Components/Ghost.js/Ghost';



function App() {
  return (
   <div id="header-cabecalho">
     <Header/>
     <Ghost/>
     <Banner/>
     <Mensagem/>
     <Destaques/>
     <Pandemia/>
     <Identidade/>
     <Programas/>
     <Relatorio/>
     <Footer/>
   </div>
  );
}

export default App;
