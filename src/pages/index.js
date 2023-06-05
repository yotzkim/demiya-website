import Link from 'next/link'
import styles from '../../src/styles/home.module.css'

import Image from 'next/image'

export default function Home(){
    return(
        <div className = {styles.container}>
            <div className = {styles.tabs}>
                <Link href="/" className={styles.a}> Home</Link>
                <Link href="/order" className={styles.a}>Online Order/Locations</Link>
                <Link href="/hours" className={styles.a}>Business Hours </Link>  
            </div>
            <div className = {styles.homeText}>
                <span>The most up-to-date information is available only on Instagram (not Yelp) at </span>
                <Link className = {styles.instagramLink} href="https://www.instagram.com/demiya_inc/">demiya_inc</Link> 
            </div>
            <div className = {styles.image}>
                <Image
                    src = "/images/hamburgCurry.jpg"
                    alt='Hamburg Curry'
                    style = {image}
                />
            </div>
        </div>
    )
} 