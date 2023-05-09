import styles from './page.module.css'
import Image from 'next/image'
import Menu from '../components/Menu'
import Contador from '@/components/Contador'
import NumberSort from '@/components/NumberSort'

export default function Home() {

  return (       
    <main className={styles.main}>
        <Menu />
      <div className={styles.description}>
        <Contador/>
      </div>
      <br />
      <NumberSort/>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main >
  )
}
