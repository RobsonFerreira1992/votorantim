import React from 'react'
import styles from './Mensagem.module.css';
import fotoPresidente from '../../imagens/foto-presidente.png';
import BotaoPlayer from '../../imagens/botao-player.svg'


const Mensagem = () => {
  return (
    <section className={styles.mensagemConselho} id="mensagem-conselho">
      <div className="container">
        <div className="row">
          <div className={styles.titulo}>
            <h1>Mensagem do Conselho</h1>
          </div>
          <div className={styles.boxPresidentContent}>
            <div className={styles.boxContent}>
              <div className={styles.boxPresidente}>
                <div className={styles.boxImg}>
                  <img src={fotoPresidente} alt="foto presidente"/>
                  <button data-bs-toggle="modal" data-bs-target="#modalAdministracao">
                    <img src={BotaoPlayer} alt="player"/>
                  </button>
                </div>
                <div className={styles.boxInformacoes}>
                  <h3>Nome diretor</h3>
                  <span>Diretor Executivo</span>
                </div>
              </div>
              <div className={styles.boxPresidente}>
                <div className={styles.boxImg}>
                  <img src={fotoPresidente} alt="foto presidente"/>
                  <button data-bs-toggle="modal" data-bs-target="#modalPresidente">
                    <img src={BotaoPlayer} alt="player"/>
                  </button>
                </div>
                <div className={styles.boxInformacoes}>
                  <h3>Nome diretor</h3>
                  <span>Diretor Executivo</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.boxBluePresidente}></div>
    </section>
  )
}

export default Mensagem
