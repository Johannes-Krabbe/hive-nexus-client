import styles from './case-studie.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../../../public/assets/images/index/button/arrow-cta.svg'

const CaseStudie = (props) => {
    const {
        data
    } = props
    return (
        <Link href={data.link}>
            <div className={styles.Container}>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <div>
                    <Link href={data.link}>
                        <button className={`${styles.button} ${styles.learmore}`}>
                        <span className={styles.circle} aria-hidden="true">
                            <span className={`${styles.icon} ${styles.arrow}`}>
                                <Image height={15} width={9} alt="button-arrow" src={arrow}/>
                            </span>
                        </span>
                            <span className={styles.buttontext}>Weiter lesen</span>
                        </button>
                    </Link>
                </div>
            </div>
        </Link>

    )
}

export default CaseStudie
