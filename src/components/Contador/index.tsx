'use client';
import React, { useState} from "react"
import styles from './Contador.module.css'

const Contador = () => {
  const [contador, setContador] = useState<number>(0) 
  function aumentar(){
      setContador(contador + 1)
    }

  function diminuir(){
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  return (       
    <div className={styles.contador}>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <p>Contador:{contador}</p>
    </div>
  )}

  export default Contador