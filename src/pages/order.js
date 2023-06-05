import Link from 'next/link'
import styles from '../../src/styles/home.css'

export default function Order(){
    return(
        <div className = "container">
            <div className = "tabs">
                <Link href="/" className="styles.a"> Home</Link>
                <Link href="/order" className="styles.a">Online Order/Locations</Link>
                <Link href="/hours" className="a">Business Hours </Link>  
            </div>
            <p className = "homeText">order</p>
        </div>
    )
}
  