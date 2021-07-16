import React from 'react';
import styles from './IdentidadeVisao.module.css';
import visao from '../../../imagens/visao.png';

const IdentidadeVisao = () => {
  return (
    <div className="row mt-5 box-dis" id="visao">
    <div className={`${styles.caracteristicasvisao} col-lg-6`}>
      <div className={styles.visao}>
        <div className="titulo">
          <h2>Visão</h2>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu velit sed nibh sodales scelerisque. Integer cursus consectetur ullamcorper. Proin sit amet sapien diam. Proin et lacinia nunc, eget volutpat nunc. Phasellus sed imperdiet tortor, at convallis quam. Sed finibus molestie massa at sagittis. Pellentesque semper elit et lacus euismod feugiat. Mauris pharetra et elit sit amet pretium. Vivamus feugiat diam at nibh finibus placerat. Quisque varius faucibus tortor non maximus. Integer nisl sapien, lobortis eget ipsum sed, varius aliquet est. Fusce purus nulla, laoreet sed blandit a, egestas in mi. Donec lacus nisl, accumsan ut pellentesque eu, volutpat pulvinar leo.
          </p>
        </div>
      </div>
    </div>
    <div className={`${styles.caracteristicasIimgVisao}  col-lg-6`}>
      <img src={visao} alt="visão" className={`${styles.img}  img-fluid`} />
    </div>
  </div>
  )
}

export default IdentidadeVisao
