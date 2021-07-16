import React from 'react'
import styles from './Programas.module.css';
import SimpleSlide from './CarouselProgramas';
import { StyleArrow } from '../Destaques/style';
const Programas = () => {
  return (
    <section className={styles.projetosProgramas} id="projetos-programas">
      <div className="container">
        <div className="row">
          <div className={styles.titulo}>
            <h1>Nossos projetos e programas</h1>
          </div>
          <div className="col-lg-12">
            <StyleArrow>
              <SimpleSlide/>
            </StyleArrow>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programas
