import styles from "../../src/styles/hours.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Hours() {
  const saratogaHours = [
    { day: "Monday", hours: { dayTime: "Closed" } },
    {
      day: "Tuesday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:00pm" },
    },
    { day: "Wednesday", hours: { dayTime: "11:30am - 1:00pm" } },
    {
      day: "Thursday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:00pm" },
    },
    {
      day: "Friday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:30pm" },
    },
    {
      day: "Saturday",
      hours: { dayTime: "11:30am - 1:30pm", nightTime: "5:30pm - 8:30pm" },
    },
    {
      day: "Sunday",
      hours: { dayTime: "11:30am - 1:30pm", nightTime: "5:30pm - 7:30pm" },
    },
  ];

  const deAnzaHours = [
    { day: "Monday", hours: { dayTime: "Closed" } },
    {
      day: "Tuesday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:00pm" },
    },
    { day: "Wednesday", hours: { dayTime: "11:30am - 1:00pm" } },
    {
      day: "Thursday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:00pm" },
    },
    {
      day: "Friday",
      hours: { dayTime: "11:30am - 1:00pm", nightTime: "5:30pm - 8:30pm" },
    },
    {
      day: "Saturday",
      hours: { dayTime: "11:30am - 1:30pm", nightTime: "5:30pm - 8:30pm" },
    },
    {
      day: "Sunday",
      hours: { dayTime: "11:30am - 1:30pm", nightTime: "5:30pm - 7:30pm" },
    },
  ];

  const dublinHours = [
    { day: "Monday", hours: { dayTime: "Closed" } },
    {
      day: "Tuesday",
      hours: { dayTime: "11:30am - 2:30pm", nightTime: "5:00pm - 8:00pm" },
    },
    { day: "Wednesday", hours: { dayTime: "11:30am - 2:30pm", nightTime: "5:00pm - 8:00pm" }},
    {
      day: "Thursday",
      hours: { dayTime: "11:30am - 2:30pm", nightTime: "5:00pm - 8:00pm" },
    },
    {
      day: "Friday",
      hours: { dayTime: "11:30am - 2:30pm", nightTime: "5:00pm - 8:00pm" },
    },
    {
      day: "Saturday",
      hours: { dayTime: "11:30am - 3:00pm", nightTime: "5:00pm-8:00pm" },
    },
    {
      day: "Sunday",
      hours: { dayTime: "11:30am - 3:00pm", nightTime: "5:00pm - 7:30pm" },
    },
  ];
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
        <div className={styles.saratogaHours}>
          <h2 className={styles.hoursHeading}>Saratoga Hours</h2>
          {saratogaHours.map((item) => (
            <div className={styles.day} key={item.day}>
              <div className={styles.dayLabel}>{item.day}:</div>
              <div className={styles.time}>
                <p>{item.hours.dayTime}</p>
                <p>{item.hours.nightTime}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.deAnzaHours}>
          <h2 className={styles.hoursHeading}>
            De Anza Hours
            <br /> (Breakfast on Sat/Sun!){" "}
          </h2>
          {deAnzaHours.map((item) => (
            <div className={styles.day} key={item.day}>
              <div className={styles.dayLabel}>{item.day}:</div>
              <div className={styles.time}>
                <p>{item.hours.dayTime}</p>
                <p>{item.hours.nightTime}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dublinHours}>
          <h2 className={styles.hoursHeading}>Dublin Hours</h2>
          {dublinHours.map((item) => (
            <div className={styles.day} key={item.day}>
              <div className={styles.dayLabel}>{item.day}:</div>
              <div className={styles.time}>
                <p>{item.hours.dayTime}</p>
                <p>{item.hours.nightTime}</p>
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
      </div>
    </Layout>
  );
}
