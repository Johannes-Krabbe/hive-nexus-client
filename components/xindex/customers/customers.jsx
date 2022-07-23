import styles from './customers.module.scss'
import Image from 'next/image'
import urlFor from '../../../lib/urlFor'
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

const CustomerSection = props => {
    const {
        customers
    } = props
    const onlineCustomers = customers.filter(customer => customer.isOnline)

    return (
        <section className={styles.Container}>
            <div className={styles.Inner}>
                {
                    onlineCustomers.map((customer, index) => (
                        <div key={customer._key} className={styles.Customer}>
                            <div className={styles.imageContainer}>
                                <Image
                                    key={customer._key}
                                    width={160}
                                    height={96}
                                    alt={customer.name}
                                    src={urlFor(customer.image).url()}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CustomerSection
