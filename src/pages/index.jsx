import Link from 'next/link';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Layout from '../components/layout.jsx';
import Head from 'next/head';

export default function Home() {
  const announcements = [
    {text: 'You can now reserve tables at the Cuperitno / De Anza Blvd location through: ', linkText: 'OpenTable', linkHref: 'https://www.opentable.com/restref/client/?restref=1412428&lang=en-US&ot_source=Restaurant%20website&corrid=2c03b971-05d1-47df-92a2-98eaf21cbd6b'},
    { text: 'New location at ',
      boldText: 'The Public Market in Emeryville',
      subText: ' is open!'
    },

  ];


  return (
    <Layout>
      <Head>
        <title>Demiya Website</title>
        <meta
          name="description"
          content="Official website for Demiya restaurant. Order online and check hours here!"
        />
        <meta
          name="keywords"
          content="Demiya, Japanese Restaurant, Japanese Curry, Katsu, Cupertino, Dublin, San Jose, Saratoga"
        />
        <link rel="icon" href="/images/logo.jpeg" />
      </Head>
      <div className={styles.container}>
        <div className={styles.announcementsBox}>
          <ul className={styles.announcementList}>
            {announcements.map((announcement, index) => (
              <li className={styles.announcementItem} key={index}>
              {announcement.text}
              <span style={{fontWeight: 'bold'}}>
              {announcement.boldText}
              </span>
              {announcement.subText}
              {announcement.linkText && (
                <Link href={announcement.linkHref} className={styles.announcementLink}>
                  {announcement.linkText}
                </Link>
              )}
            </li>
            ))}
          </ul>
        </div>
        <div className={styles.homeText}>
          <span>The most up-to-date information is available on Instagram at </span>
          <Link className={styles.instagramLink} href="https://www.instagram.com/demiya_inc/">
            demiya_inc
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hamburgCurry.jpg"
            alt="Hamburg Curry"
            width={800}
            height={450}
            style={{ width: '70%', height: 'auto' }}
            priority
          />
        </div>
      </div>
    </Layout>
  );
}
