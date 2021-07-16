import React from 'react'
import styles from './Logo.module.css'
import imageLogoMaior from '../../imagens/logo-instituto-votorantim.svg';
import imagemLogoMenor from '../../imagens/logo-instituto-votorantim-simplificado.svg'



const Logo = () => {

  const  [logo , setLogo] = React.useState(true);

  function changeLogo(){
    if(window.pageYOffset > 60){
      setLogo(false)
    }else if(window.pageYOffset <= 60){
      setLogo(true)
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeLogo)
    }, [])
  return (
    <div className= {`${styles.logo} ${logo ? styles.maxLogo : styles.minLogo}`}>
      <img src={logo ? imageLogoMaior : imagemLogoMenor } className={styles.img} alt="Instituto Votorantim"/>
    </div>
  )
}

export default Logo
