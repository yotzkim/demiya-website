import styles from '../../src/styles/hours.module.css'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Hours(){
    const businessHours = [
        { day: 'Monday', hours: {dayTime: 'Closed'}},
        { day: 'Tuesday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Wednesday', hours: {dayTime: '11:30am - 1:00pm'}},
        { day: 'Thursday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Friday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Saturday', hours: {dayTime: '11:30am - 1:30pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Sunday', hours: {dayTime: '11:30am - 1:30pm', nightTime: '5:30pm - 7:30pm'}}
    ]

    const dublinHours = [
        { day: 'Monday', hours: 'Closed'},
        { day: 'Tuesday', hours: '11:30am - 8:00pm'},
        { day: 'Wednesday', hours: 'Closed',},
        { day: 'Thursday', hours: '11:30am - 8:00pm'},
        { day: 'Friday', hours: '11:30am - 8:00pm'},
        { day: 'Saturday', hours: '11:30am - 8:00pm'},
        { day: 'Sunday', hours: '11:30am - 7:30pm'}
    ]
    return(
        <Layout>
            <div className = {styles.hoursContainer}>

                <div className = {styles.businessHours}>
                    <h2 className = {styles.hoursHeading}>De Anza / Saratoga Hours:</h2>
                    {businessHours.map((item) => (
                        <div className = {styles.day} key = {item.day}>
                            <div className = {styles.dayLabel}>{item.day}:</div>
                            <div className = {styles.time}>
                                <p>{item.hours.dayTime}</p>
                                <p>{item.hours.nightTime}</p>
                            </div>
                        </div>
                     ))}
                </div>

                <div className={styles.dublinHours}>
                    <h2 className = {styles.hoursHeading}>Dublin Hours:</h2>
                    {dublinHours.map(item => (
                        <div className={styles.day} key={item.day}>
                            <div className={styles.dayLabel}>{item.day}:</div>
                            <div className={styles.time}>
                                {item.hours.split(',').map((hour, index) => (
                                    <p key={index}>{hour}</p>
                                 ))}
                            </div>

                        </div>
                    ))}
                    <Image
                        src = "/images/eggcurry_.jpeg"
                        alt='Egg Curry'
                        width = {500}
                        height = {300}
                        style = {{width: '50%', height: 'auto'}}
                    />
                </div>

            </div>
        </Layout>
    )
}
  