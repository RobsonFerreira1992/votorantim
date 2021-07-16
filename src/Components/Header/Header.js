import React from 'react';
import styles from './Header.module.css';
import Language from './Language'; 
import Navbar from './Navbar';
import Logo from './Logo';
import Hamburguer from './Hamburguer'



const Header = () => {

 
  const [navBar , setNavbar] = React.useState(true);

  const [menu ,setMenu] = React.useState(false);
   
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
   <header className= {`${styles.header} ${navBar ? styles.maxHeader : styles.minHeader}` }>
     <Language/>
     <div className={styles.containerH}>
      <div className={styles.menu} onClick={handleMenu}>
        <Hamburguer className={`${styles.hamburguer} ${styles.maxHamburguer} ${menu ? styles.closeBtn : ''}`}/>
      </div>
       <Navbar className={`${styles.navBar} ${navBar ? styles.maxNav : styles.minNav} ${menu ? styles.menuOpened : ''}` }/>
       <Logo/>
     </div>
   </header>
  )
}

export default Header
