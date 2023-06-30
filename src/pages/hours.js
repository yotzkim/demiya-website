import Link from 'next/link'
import styles from '../../src/styles/home.module.css'

export default function Hours(){
    return(
        <div className = {styles.container}>
            <div className = {styles.tabs}>
                <Link href="/" className={styles.a}> Home</Link>
                <Link href="/order" className={styles.a}>Online Order/Locations</Link>
                <Link href="/hours" className={styles.a}>Business Hours </Link>  
            </div>
            <div className = "styles.hours">
                
            </div>
            
        </div>
    )
}
  