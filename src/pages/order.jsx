import Link from "next/link";
import styles from "../../src/styles/orders.module.css";
import Layout from "../components/layout.jsx";
import Head from "next/head";

export default function Order() {
  const locations = [
    {
      name: "EMERYVILLE",
      address: "The Public Market 5959 Shellmound St, Emeryville, CA 94608",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=5959+Shellmound+St+%2C+Emeryville+%2C+CA+94608`,
    },
    {
      name: "SARATOGA AVE",
      address: "375 Saratoga Ave G, San Jose, CA 95129",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=375+Saratoga+Ave+G%2C+San+Jose%2C+CA+95129`,
      orderLink:
        "https://order.toasttab.com/online/demiya-saratoga-ave-em-375-saratoga-ave-ste-g",
      doordashLink: "https://www.doordash.com/store/demiya-san-jose-31449623",
    },
    {
      name: "CUPERTINO",
      address: "1145 S De Anza Blvd, San Jose, CA 95129",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=1145+S+De+Anza+Blvd+%2C+San+Jose%2C+CA+95129`,
      orderLink:
        "https://order.toasttab.com/online/demiya-de-anza-em-1145-south-de-anza-boulevard",
      doordashLink: "https://www.doordash.com/store/demiya-san-jose-31449571/",
      ubereatsLink:
        "https://www.ubereats.com/store/demiya-de-anza-blvd/ArVjGu43T1yi8lU9regVYQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE5ODAwJTIwVmFsbGNvJTIwUGt3eSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjMxMGQzMWFmLTBmOTEtOWUxMS1jNjNkLWQxZDRmMmQwMTIyOSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzcuMzI1MTQlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTIyLjAxMTM4JTdE&ps=1",
    },
    {
      name: "DUBLIN",
      address: "7477 Village Pkwy, Dublin, CA 94568",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=7477+Village+Pkwy+%2C+Dublin+%2C+CA+94568`,
      orderLink:
        "https://order.toasttab.com/online/demiya-dublin-em-7477-village-parkway",
      doordashLink: "https://www.doordash.com/store/demiya-dublin-31449671",
    },
    {
      name: "FREMONT",
      address: "46551 Mission Blvd, Fremont, CA 94539 (inside 99 Ranch)",
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=46551+Mission+Blvd+%2C+Fremont+%2C+CA+94539`,
      orderLink:
        "https://order.toasttab.com/online/demiya-fremont-em-46551-mission-boulevard",
      doordashLink:
        "https://www.doordash.com/en-AU/store/demiya-fremont-31282911/?srsltid=AfmBOoqGA3GxBQ3uAlVvH1WXBnUvhIYMXvq2xrVhXcz_v9lXvlpX6rVo",
      ubereatsLink:
        "https://www.ubereats.com/store/demiya-fremont-em/aqjfiPLdQoCy7NTnFVmA9g?srsltid=AfmBOooFvn6RPgqYi5TQUlyTOsYwDoFeXrc89o5oMmIyBVDbymKniinu",
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
      <div className={styles.centeredEmeryville}>
        {locations
          .filter((loc) => loc.name === "EMERYVILLE")
          .map((location) => (
            <div key={location.address} className={styles.location}>
              <p className={styles.locationName}>
                <span className={styles.newLabel}>NEW:</span>
                {location.name}
              </p>
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

      <div className={styles.orderText}>
        {locations
          .filter((loc) => loc.name !== "EMERYVILLE")
          .map((location) => (
            <div key={location.address} className={styles.location}>
              <p className={styles.locationName}>{location.name}</p>
              <Link href={location.orderLink}>Online order</Link>

              {(location.name === "FREMONT" ||
                location.name === "CUPERTINO") && (
                <div className={styles.deliveryLinks}>
                  <Link
                    className={styles.doorDash}
                    href={location.doordashLink}
                  >
                    DoorDash
                  </Link>
                  <Link
                    className={styles.uberEats}
                    href={location.ubereatsLink}
                  >
                    UberEats
                  </Link>
                </div>
              )}

              {(location.name === "SARATOGA AVE" ||
                location.name === "DUBLIN") && (
                <div className={styles.doorDashLinks}>
                  <Link
                    className={styles.doorDash}
                    href={location.doordashLink}
                  >
                    DoorDash
                  </Link>
                </div>
              )}

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
