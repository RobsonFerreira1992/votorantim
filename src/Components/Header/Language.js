import React from 'react';
import styles from './Language.module.css'

const Language = () => {
  return (
    <div className={styles.language}>
      <ul>
        <li><a href="">PT</a></li>
        <span>|</span>
        <li><a href="/en/">ENG</a></li>
      </ul>
    </div>
  )
}

export default Language
