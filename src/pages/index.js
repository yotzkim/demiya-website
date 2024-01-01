import Link from 'next/link'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Layout from '../components/layout'


export default function Home(){
    return(
        <Layout>
            <div className = {styles.container}>
                <div className = {styles.homeText}>
                    <span>The most up-to-date information is available on Instagram at </span>
                    <Link className = {styles.instagramLink} href="https://www.instagram.com/demiya_inc/">demiya_inc</Link> 
                </div>
                <div className = {styles.imageContainer}>
                    <Image
                        src = "/images/hamburgCurry.jpg"
                        alt='Hamburg Curry'
                        width = {800}
                        height = {450}
                        style = {{width: '70%', height: 'auto'}}
                        priority
                    />
                </div>
            </div>
        </Layout>
    )
} 