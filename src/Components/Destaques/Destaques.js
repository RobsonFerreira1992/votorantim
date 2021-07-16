import React from 'react';
import styles from './Destaques.module.css'
import SimpleSlider from './Carrousel';
import { StyleArrow } from './style';


const Destaques = () => {
  return (
    <section className={styles.destaques} id="destaques">
      <div className="container">
        <div className="row">
          <div className={styles.titulo}>
            <h1>Destaques</h1>
          </div>
          <div className="col-lg-12">
            <StyleArrow>
            <SimpleSlider/>
            </StyleArrow>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destaques
