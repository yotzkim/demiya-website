import Link from "next/link";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Layout from "../components/layout.jsx";
import Head from "next/head";

export default function Home() {
  // Add announcements here
  const announcements = [
    {
      boldText: "Palo Alto location",
      text: " coming soon!"
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
        {/* // Uncomment below to enable announcements */}
        <div className={styles.announcementsBox}>
          <ul className={styles.announcementList}>
            {announcements.map((announcement, index) => (
              <li className={styles.announcementItem} key={index}>
                <span style={{ fontWeight: "bold" }}>
                  {announcement.boldText}
                </span>
                {announcement.text}
                {announcement.subText}
                {announcement.linkText && (
                  <Link
                    href={announcement.linkHref}
                    className={styles.announcementLink}
                  >
                    {announcement.linkText}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.homeText}>
          <span>
            The most up-to-date information is available on Instagram at{" "}
          </span>
          <Link
            className={styles.instagramLink}
            href="https://www.instagram.com/demiya_inc/"
          >
            demiya_inc
          </Link>
          !
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hamburgCurry.jpg"
            alt="Hamburg Curry"
            width={800}
            height={450}
            style={{ width: "70%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </Layout>
  );
}
