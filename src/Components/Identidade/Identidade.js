import React from 'react';
import styles from './Identidade.module.css';
import IdentidadeMissao from './Identidade-missao/IdentidadeMissao';
import IdentidadeVisao from './Identidade-visao/IdentidadeVisao';
import IdentidadeProposito from './Identidade-proposito/IdentidadeProposito'



const Identidade = () => {
  return (
    <section className="indentidade">
      <div className="container-fluid">
        <IdentidadeMissao/>
        <IdentidadeVisao/>
        <IdentidadeProposito/>
      </div>
    </section>
  )
}

export default Identidade
