import React from 'react'
import styles from '../style'
import { OutlinedBtn } from './Buttons'

const USP = () => {
  return (
    <div className={`${styles.padding} flex flex-row justify-between  `}>
      <OutlinedBtn />
      <OutlinedBtn />
      <OutlinedBtn />
    </div>
  );
}

export default USP