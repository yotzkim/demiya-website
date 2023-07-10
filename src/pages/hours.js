import Link from 'next/link'
import styles from '../../src/styles/hours.module.css'
import Image from 'next/image'
import Layout from '../components/layout'

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
        <Layout>{
            <div className = {styles.container}>
                <div className = {styles.content}>
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
                    <div className = {styles.image}>
                        <Image
                            src = "/images/eggCurry_.jpeg"
                            alt='Egg Curry'
                            width = {500}
                            height = {200}
                            layout = "responsive"  
                        />
                    </div>
                </div>
            </div>
}       </Layout>
    )
}
  