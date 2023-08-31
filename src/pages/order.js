import Link from 'next/link';
import styles from '../../src/styles/orders.module.css';
import Layout from '../components/layout'

export default function Order() {
  const locations = [
    {
      name: 'Saratoga Online Order',
      address: '375 Saratoga Ave G, San Jose, CA 95129',
      mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=375+Saratoga+Ave+G%2C+San+Jose%2C+CA+95129`,
      orderLink: 'https://www.clover.com/online-ordering/demiya-saratoga'
    },
    {
        name: 'De Anza/Cupertino Online Order',
        address: '1145 S De Anza Blvd, San Jose, CA 95129',
        mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=1145+S+De+Anza+Blvd+%2C+San+Jose%2C+CA+95129`,
        orderLink: 'https://demiyainc.square.site/'
      },
      {
        name: 'Dublin Location (Online orders now available)',
        address: '7477 Village Pkwy, Dublin, CA 94568',
        mapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=7477+Village+Pkwy+%2C+Dublin+%2C+CA+94568`,
        orderLink: 'https://demiyainc.square.site/'
      },
  
  

  ];

  return (
    <Layout>
      <div className={styles.orderText}>
        {locations.map((location) => (
          <div key={location.address} className={styles.location}>
            <Link href={location.orderLink}>{location.name}</Link>
            <p>{location.address}</p>
            <div className = {styles.mapContainer}>
              <iframe
                src={location.mapSrc}
                frameBorder="0"
                allowFullScreen
                title={location.name}
              ></iframe>
            </div>
          </div>
        ))}
      <div className = {styles.contact}>Customer Support: Only text messages are available at <strong>650-833-8775</strong></div>
      </div>
    </Layout>
  );
}

  