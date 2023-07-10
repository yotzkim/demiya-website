import Link from 'next/link'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home(){
    return(
        <Layout>{
            <div className = {styles.container}>
                <div className = {styles.homeText}>
                    <span>The most up-to-date information is available only on Instagram (not Yelp) at </span>
                    <Link className = {styles.instagramLink} href="https://www.instagram.com/demiya_inc/">demiya_inc</Link> 
                </div>
                <div className = {styles.image}>
                    <Image
                        src = "/images/hamburgCurry.jpg"
                        alt='Hamburg Curry'
                        width = {800}
                        height = {450}
                        layout = "responsive"
                    />
                </div>
            </div>
        }</Layout>
    )
} 