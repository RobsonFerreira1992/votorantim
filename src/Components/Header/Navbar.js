import React from 'react';




const Navbar = ({className}) => {
  return (
    
    <nav className={className}  >
      <ul>
        <li><a href="#mensagem-conselho">Mensagem do conselho</a></li>
        <li><a href="#destaques">Destaques</a></li>
        <li><a href="#pandemia-e-atuacao">Pandemia e atuação</a></li>
        <li><a href="#">Ações da Pandemia</a></li>
        <li><a href="#missao">Missão</a></li>
        <li><a href="#visao">Visão</a></li>
        <li><a href="#proposito">Proposito</a></li>
        <li><a href="#projetos-programas">Nossos projetos e programas</a></li>
        <li><a href="#relatorio">Download do relatório</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
