import React from 'react';
import styles from './Relatorio.module.css'
import  DownloadDireita from '../../imagens/download-ilustracao-direita.png';
import BotaoTopo from '../../imagens/botao-topo.svg';
import {Link} from 'react-scroll'
const Relatorio = () => {
  return (
    <section className={styles.relatorio} id="relatorio">
      <div className="container">
        <div className="row mt-5">
          <div className= {`${styles.relatorioAtivo} col-lg-6`}>
            <div className={styles.relato}>
              <div className={styles.titulo}>
                <h2>Relatório de <br/>Atividades <span>2020</span></h2>
              </div>
              <div className={styles.content}>
                <p>
                  Faça o download do pdf e saiba mais.
                </p>
                <div className={styles.button}>
                  <a href="#">Baixar</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.caracteristicasImgVisao} col-lg-6`}>
            <img src={DownloadDireita} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
      <Link  className={styles.botaoTopo} to="header-cabecalho"  smooth={true} spy={true} duration={500}>
        <img src={BotaoTopo} alt="botão topo" />
      </Link>

    </section>
  )
}

export default Relatorio
