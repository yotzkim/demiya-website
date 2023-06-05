import Link from 'next/link'
import styles from '../../src/styles/home.css'
import Image from 'next/image'

export default function Home(){
    return(
        <div className = "container">
            <div className = "tabs">
                <Link href="/" className="styles.a"> Home</Link>
                <Link href="/order" className="styles.a">Online Order/Locations</Link>
                <Link href="/hours" className="a">Business Hours </Link>  
            </div>
            <div className = "homeText">
                <span>The most up-to-date information is available only on Instagram (not Yelp) at</span>
                <Link className = "instagramLink" href="https://www.instagram.com/demiya_inc/"> demiya_inc</Link> 
            </div>
        </div>
    )
} 