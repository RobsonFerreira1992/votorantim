import React from 'react'
import styles from './Footer.module.css';
import facebook from './../../imagens/facebook.svg';
import youtube from './../../imagens/youtube.svg';
import linkedin from './../../imagens/linkedin.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="/">
              <img src={facebook} alt="icone-facebook" className={styles.iconsSociais} />
            </a>
            <a href="/">
              <img src={youtube} alt="icone-youtube" className={styles.iconsSociais}/>
            </a>
            <a href="/">
              <img src={linkedin} alt="icone-linkedin" className={styles.iconsSociais}/>
            </a>
          </div>
          <div className="col-lg-12 text-center mt-3">
            <p>Instituto Votorantim © Todos os direitos reservados - Website institucional</p>
            <p className="blendon">Designed by blendON</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
