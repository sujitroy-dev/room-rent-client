import styles from "./ListYourProperty.module.scss";

export default function ListYourProperty() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Start Posting Your Ads for free in 3 setps
      </h2>
      <div className={styles.wrapper}>
        <video
          className={styles["video-background"]}
          // autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source
            src="https://res.cloudinary.com/doy9gcs3y/video/upload/v1683222196/Room-rent-assets/pexels-cottonbro-studio-4569931-960x506-25fps_i8pvvf.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className={styles["model-image"]}></div> */}
        <div className={styles["step-cards-container"]}>
          <ListCard
            number={1}
            title="Create a Property Listing"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing
              elit."
          />
          <ListCard
            number={2}
            title="Respond to Buyer Inquiries"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing
            elit."
          />
          <ListCard
            number={3}
            title="Finalize the Sale"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing
            elit."
          />
        </div>
      </div>
    </div>
  );
}

type ListCardProps = {
  number: number;
  title: string;
  subtitle: string;
};

function ListCard({ number, title, subtitle }: ListCardProps) {
  return (
    <div className={styles["step-card"]}>
      <div className={styles.count}>{number}</div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
