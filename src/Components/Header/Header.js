import React from 'react';
import styles from './Header.module.css';
import Language from './Language'; 
import BotaoMenu from './BotaoMenu';
import Navbar from './Navbar';
import Logo from './Logo';



const Header = () => {

 
  const [navBar , setNavbar] = React.useState(true);

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
   <header className= {`${styles.header} ${navBar ? styles.maxHeader : styles.minHeader}` }>
     <Language/>
     <div className={styles.containerH}>
       <BotaoMenu />
       <Navbar className={`${styles.navBar} ${navBar ? styles.maxNav : styles.minNav} `}/>
       <Logo/>
     </div>
   </header>
  )
}

export default Header
