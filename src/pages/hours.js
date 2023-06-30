import Link from 'next/link'
import styles from '../../src/styles/hours.module.css'

export default function Hours(){
    const businessHours = [
        { day: 'Monday', hours: {dayTime: 'Closed'}},
        { day: 'Tuesday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Wednesday', hours: {dayTime: '11:30am - 1:00pm', nightTime: 'Closed'}},
        { day: 'Thursday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Friday', hours: {dayTime: '11:30am - 1:00pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Saturday', hours: {dayTime: '11:30am - 1:30pm', nightTime: '5:30pm - 8:00pm'}},
        { day: 'Sunday', hours: {dayTime: '11:30am - 1:30pm', nightTime: '5:30pm - 7:30pm'}}


    ]

    return(
        <div className = {styles.container}>
            <div className = {styles.tabs}>
                <Link href="/" className={styles.a}> Home</Link>
                <Link href="/order" className={styles.a}>Online Order/Locations</Link>
                <Link href="/hours" className={styles.a}>Business Hours </Link>  
            </div>
            <div className = {styles.hoursText}>
                <div className = {styles.dayTimeContainer}></div>
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
            
        </div>
    )
}
  