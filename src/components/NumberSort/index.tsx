'use client';
import { useState } from 'react'
import styles from './NumberSort.module.css'
import{ mega } from '../NumberSort/mega'

const NumberSort = () => {
const [ qtde, setQtde ] = useState<number>(0)
const [ sortNumber, setSortNumber ] = useState<number[]>([])

  return (
    <div className={styles.numbersort}>
      <p>Digite a quantidade de números:</p>
      <input 
        type="number" 
        min={1} 
        max={20} 
        value={qtde}
        onChange={ev => setQtde(+ev.target.value)}
      />
      <button onClick={() => setSortNumber(mega(qtde))}>Gerador de Números</button>
      <p>6 Números do Sorteio: <span>{sortNumber.join(' - ')}</span></p>
    </div>
  )
}

export default NumberSort