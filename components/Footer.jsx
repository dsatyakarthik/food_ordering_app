import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE LAMA PIZZA, 
          </h2>
          <h2 className={styles.motto}>Slice into Happiness!!!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <br />
            
          <p className={styles.text}>
            1654 OMR Road #304.
            <br /> Chennai, 85022
            <br /> (602) 867-1010
            <br />
            <br/>
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Hyderabad, 85022
            <br /> (602) 867-1011
            <br />
            <br/>
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Mumbai, 85022
            <br /> (602) 867-1012
            <br />
            <br/>
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Delhi, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
          <br />
            
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
          <br />
            
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;