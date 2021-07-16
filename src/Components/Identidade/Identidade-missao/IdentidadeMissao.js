import React from 'react'
import styles from './IdentidadeMissao.module.css';
import missao from  '../../../imagens/missao.png';



const IdentidadeMissao = () => {
  return (
    <div className="row mt-5" id="missao">
      <div className={`${styles.caracteristicasIimgMissao}  col-lg-6`}>
        <img src={missao} alt="missão" className={`${styles.img}  img-fluid`} />
      </div>
      <div className={`${styles.caracteristicas} col-lg-6`}>
        <div className={`${styles.missao}`}>
          <div className="titulo">
            <h2>Missão</h2>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu velit sed nibh sodales scelerisque. Integer cursus consectetur ullamcorper. Proin sit amet sapien diam. Proin et lacinia nunc, eget volutpat nunc. Phasellus sed imperdiet tortor, at convallis quam. Sed finibus molestie massa at sagittis. Pellentesque semper elit et lacus euismod feugiat. Mauris pharetra et elit sit amet pretium. Vivamus feugiat diam at nibh finibus placerat. Quisque varius faucibus tortor non maximus. Integer nisl sapien, lobortis eget ipsum sed, varius aliquet est. Fusce purus nulla, laoreet sed blandit a, egestas in mi. Donec lacus nisl, accumsan ut pellentesque eu, volutpat pulvinar leo.
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default IdentidadeMissao
