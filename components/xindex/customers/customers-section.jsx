import styles from "./customers-section.module.scss";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";

const CustomerSection = (props) => {
  const { customers } = props;

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        {customers.map((c, index) => (
          <div key={index} className={styles.customer}>
            <div className={styles.imageContainer}>
              <Image
                key={c._key}
                width={160}
                height={96}
                alt={c.name}
                src={urlFor(c.image).url()}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerSection;
