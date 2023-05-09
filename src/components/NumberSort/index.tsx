'use client';
import { useState } from 'react'
import styles from './NumberSort.module.css'

const NumberSort = () => {
const [ gameNumber, setGameNumber ] = useState<number[]>([])

  function gameSort() {
    const newNumbers = []
    for(let i = 0; i < 6; i ++) {
      newNumbers.push(GenerateRandomNumber())
    }
    setGameNumber(newNumbers)
  }

  function GenerateRandomNumber(): number{
    return Math.floor(Math.random() * 100) + 10 <= 60 ? Math.floor(Math.random() * 10) : 10
  }
  
  return (
    <div className={styles.numbersort}>
      <button onClick={gameSort}>Gerador de Números</button>
      <span>Números do Sorteio: {gameNumber.join(' - ')}</span>
    </div>
  )
}

export default NumberSort