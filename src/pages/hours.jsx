import styles from "../../src/styles/hours.module.css";
import Image from "next/image";
import Layout from "../components/layout.jsx";
import Head from "next/head";

export default function Hours() {
  const hoursData = {
    emeryville: {
      title: "NEW: Emeryville Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tues-Sat", time: "11:30am-8:00pm" },
        { day: "Sunday", time: "11:30am-7:30pm" },
      ],
    },
    saratoga: {
      title: "Saratoga Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tues-Thurs", time: "11:30am-1:00pm; 5:30pm-8:00pm" },
        { day: "Fri", time: "11:30am-1:00pm; 5:30pm-8:30pm" },
        { day: "Sat", time: "11:30am-1:30pm; 5:30pm-8:30pm" },
        { day: "Sunday", time: "11:30am-1:30pm; 5:30pm-7:30pm" },
      ],
    },
    deAnza: {
      title: "De Anza Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tues-Thurs", time: "11:30am-1:00pm; 5:30pm-8:00pm" },
        { day: "Fri", time: "11:30am-1:00pm; 5:30pm-8:30pm" },
        { day: "Sat", time: "11:30am-1:30pm; 5:30pm-8:30pm" },
        { day: "Sunday", time: "11:30am-1:30pm; 5:30pm-7:30pm" },
      ],
    },

    dublin: {
      title: "Dublin Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tues-Fri", time: "11:30am-2:30pm; 5:00pm-8:00pm" },
        { day: "Sat", time: "11:30am-3:00pm; 5:00pm-8:00pm" },
        { day: "Sunday", time: "11:30am-3:00pm; 5:00pm-7:30pm" },
      ],
    },

    fremont: {
      title: "Fremont Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tues-Sat", time: "11:30am-8:00pm" },
        { day: "Sunday", time: "11:30am-7:30pm" },
      ],
    },
  };

  return (
    <Layout>
      <Head>
        <title>Demiya Hours</title>
        <meta
          name="description"
          content="Official website for Demiya restaurant. Check hours here!"
        ></meta>
        <meta
          name="keywords"
          content="Demiya, Japanese Restaurant, Japanese Curry, Katsu, Cupertino, Dublin, San Jose, Saratoga"
        ></meta>
        <link rel="icon" href="/images/logo.jpeg"></link>
      </Head>
      <div className={styles.hoursContainer}>
        {Object.values(hoursData).map((location, index) => (
          <div className={styles.locationBox} key={index}>
            <h2 className={styles.hoursHeading}>{location.title}</h2>
            <div className={styles.hoursContent}>
              {location.hours.map((item, idx) => (
                <div key={idx}>
                  <strong>{item.day}:</strong> {item.time}
                </div>
              ))}
            </div>
          </div>
        ))}
        <Image
          src="/images/eggcurry_.jpeg"
          alt="Egg Curry"
          width={500}
          height={300}
          style={{ width: "50%", height: "auto" }}
        />
      </div>
    </Layout>
  );
}
