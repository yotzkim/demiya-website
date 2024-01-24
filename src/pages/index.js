import Link from 'next/link'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head';

export default function Home(){
    return(
        <Layout>
            <Head>
                <title>Demiya Website</title>
                <meta name="description" content="Official website for Demiya restaurant. Order online and check hours here!"></meta>
                <meta name="keywords" content="Demiya, Japanese Restaurant, Japanese Curry, Katsu, Cupertino, Dublin, San Jose, Saratoga"></meta>
                <link rel="icon" href="/images/demiyalogo1.jpg"></link>
            </Head>
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