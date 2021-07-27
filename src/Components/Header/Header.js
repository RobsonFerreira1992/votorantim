import React from 'react';
import styles from './Header.module.css';
import Language from './Language'; 
import Logo from './Logo';
import Hamburguer from './Hamburguer'
import {Link} from 'react-scroll'
import stylesLinks from './Navbar.module.css'



const Header = () => {

 
  const [navBar , setNavbar] = React.useState(true);
  const [menu ,setMenu] = React.useState(false);

  const links = document.querySelectorAll('.teste');

  console.log(links)
  
  function fecharMenu(){
    if(menu === true){
      setMenu(false)
    }else{
      setMenu(true)
    }
  }
   
  function handleMenu(){
   if(menu === false){
     setMenu(true)   
   }else{
     setMenu(false)
   }
  }
  function changeBackground() {
    if(window.pageYOffset > 60){
      setNavbar(false)
    }else if(window.pageYOffset <= 60){
      setNavbar(true)
    }
  }
  React.useEffect(() => {
  window.addEventListener('scroll', changeBackground)
  }, [])


  return (
   <header className= {`${styles.header} ${navBar ? styles.maxHeader : styles.minHeader}` } >
     <Language/>
     <div className={styles.containerH}>
      <div className={styles.menu} onClick={handleMenu}>
        <Hamburguer className={`${styles.hamburguer} ${styles.maxHamburguer} ${menu && styles.closeBtn}`}/>
      </div>
       <nav className={`${styles.navBar} ${navBar ? styles.maxNav : styles.minNav} ${menu && styles.menuOpened}` }>
          <ul>
            <li><Link activeClass={stylesLinks.active} onClick={fecharMenu} className={`${stylesLinks.link}`} to="mensagem-conselho" spy={true} smooth={true} offset={-80} duration={500}>Mensagem do conselho</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="destaques" spy={true} smooth={true} offset={-80} duration={500}>Destaques</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="pandemia-e-atuacao" spy={true} smooth={true} offset={-80} duration={500}>Pandemia e atuação</Link></li>
            {/* <li><Link activeClass={stylesLinks.active} to="#">Ações da Pandemia</Link></li> */}
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="missao" spy={true} smooth={true} offset={-80} duration={500}>Missão</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="visao" spy={true} smooth={true} offset={-80} duration={500}>Visão</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="proposito" spy={true} smooth={true} offset={-80} duration={500}>Proposito</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="projetos-programas" spy={true} smooth={true} offset={-80} duration={500}>Nossos projetos e programas</Link></li>
            <li><Link activeClass={stylesLinks.active}  onClick={fecharMenu} className={`${stylesLinks.link}`} to="relatorio" spy={true} smooth={true} offset={-80} duration={500}>Download do relatório</Link></li>
          </ul>
       </nav>
       <Logo/>
     </div>
   </header>
  )
}

export default Header
