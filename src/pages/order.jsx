import Link from "next/link";
import styles from "../../src/styles/orders.module.css";
import Layout from "../components/layout.jsx";
import Head from "next/head";

export default function Order() {
  const locations = [
    {
      name: "SARATOGA AVE",
      address: "375 Saratoga Ave G, San Jose, CA 95129",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=375+Saratoga+Ave+G%2C+San+Jose%2C+CA+95129`,
      orderLink:
        "https://demiyainc.square.site/?location=11ee09b720ff009293a3ac1f6bbba828&customer_seat_id=11ee5cca1196d886ae73d230f2d6098d",
    },
    {
      name: "CUPERTINO",
      address: "1145 S De Anza Blvd, San Jose, CA 95129",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=1145+S+De+Anza+Blvd+%2C+San+Jose%2C+CA+95129`,
      orderLink:
        "https://demiyainc.square.site/?location=11ee09b7202ff20393a3ac1f6bbba828&customer_seat_id=11ee3cb9a5c1c9fca9dade2627b4fc9e",
    },
    {
      name: "DUBLIN",
      address: "7477 Village Pkwy, Dublin, CA 94568",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=7477+Village+Pkwy+%2C+Dublin+%2C+CA+94568`,
      orderLink:
        "https://demiyainc.square.site/?location=11ee09b71fbfbab993a3ac1f6bbba828&customer_seat_id=11ee0bbf4a379d6cbbfe56e914396b31",
    },
    {
      name: "FREMONT",
      address: "46551 Mission Blvd, Fremont, CA 94539 (inside 99 Ranch)",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=46551+Mission+Blvd+%2C+Fremont+%2C+CA+94539`,
      orderLink: "https://order.toasttab.com/online/demiya-fremont-em-46551-mission-boulevard",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Demiya Online Order</title>
        <meta
          name="description"
          content="Official website for Demiya restaurant. Order online here!"
        ></meta>
        <meta
          name="keywords"
          content="Demiya, Japanese Restaurant, Japanese Curry, Katsu, Cupertino, Dublin, San Jose, Saratoga"
        ></meta>
        <link rel="icon" href="/images/logo.jpeg"></link>
      </Head>
      <div className={styles.orderText}>
        {locations.map((location) => (
          <div key={location.address} className={styles.location}>
            <p className={styles.locationName}>{location.name}</p>
              <Link href={location.orderLink}>Online order</Link>
            <p>{location.address}</p>
            <div className={styles.mapContainer}>
              <iframe
                src={location.mapSrc}
                frameBorder="0"
                allowFullScreen
                title={location.name}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contact}>
        Customer Support: Only text messages are available at{" "}
        <strong>650-833-8775</strong>
      </div>
      <div className={styles.spacer}></div>
    </Layout>
  );
}
