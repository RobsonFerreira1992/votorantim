import React from 'react'
import Hamburguer from './Hamburguer';
import styles from './Hamburguer.module.css'



const BotaoMenu = () => {
  
  const [menu ,setMenu] = React.useState(false);
   
  function handleMenu(){
   if(menu === false){
     setMenu(true)   
   }else{
     setMenu(false)
   }
  }

  return (
    <div className={styles.menu} onClick={handleMenu}>
      <Hamburguer className={`${styles.hamburguer} ${styles.maxHamburguer} ${menu ? styles.closeBtn : ''}`}/>
    </div>
     
    
  )
}

export default BotaoMenu
