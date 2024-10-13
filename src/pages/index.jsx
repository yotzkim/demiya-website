import Link from 'next/link';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Layout from '../components/layout.jsx';
import Head from 'next/head';

export default function Home() {
  const announcements = [
    { text: 'Uber Eats and DoorDash available now at our Fremont location under ', linkText: 'Orders/Locations', linkHref: '/order' },
    { text: 'All locations are now open on Wednesdays' }
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
          <h2 className={styles.announcementsHeading}>Announcements</h2>
          <ul className={styles.announcementList}>
            {announcements.map((announcement, index) => (
              <li className={styles.announcementItem} key={index}>
              {announcement.text}
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
