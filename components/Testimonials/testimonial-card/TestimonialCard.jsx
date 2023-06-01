import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

export default function TestimonialCard({ name, designation, image, message}) {
  return (
    <div className={styles['testimonial-card']}>
      <Image src={image} width={65} height={65} className={styles['profile-img']}/>
      <p className={styles.name}>{name}</p>
      <p className={styles.message}>{message}</p>
      <p className={styles.designation}>{designation}</p>
    </div>
  )
}
