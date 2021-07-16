import React from 'react'
import styles from './Banner.module.css';
import fotoHeader from '../../imagens/imagem-header.jpg';


const Banner = () => {
  return (
    <div className={styles.video}>
      <img src={fotoHeader} alt=" imagem header"/>
      <div className={styles.headerTitulo}>
        <div className="container">
          <div className="row">
            <h1>Relatório de Atividades <br /><span>2020</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
