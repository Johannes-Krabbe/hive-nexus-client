import CaseStudie from './case-studie/case-studie'
import styles from "./case-studies.module.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
// https://swiperjs.com/react
import 'swiper/css';


const CaseStudies = (props) => {
    const {
        data
    } = props
    return (
        <section className={styles.Container}>
            <h2 className={styles.Headline}>{data.headline}</h2>
            <div className={styles.swiperContainer}>
                <div className={styles.swiperWrapper}>
                <Swiper
                    className={styles.Swiper}
                    breakpoints={{
                      320: {
                          centeredSlides: true,
                          // loop: true,
                          slidesPerView: 1.2,
                          initialSlide: 1,
                          spaceBetween: 16
                      },
                        600: {
                            slidesPerView: data.caseStudies.length > 2 ? 1.6 : 1,
                            centeredSlides: true,
                            // loop: true,
                            initialSlide: 1,
                            spaceBetween: 16
                        },
                        1024: {
                            // slidesPerView: 3,
                            slidesPerView: data.caseStudies.length > 2 ? 3 : 2,
                            spaceBetween: 24
                        }

                    }}
                >
                    {data.caseStudies.map(caseStudies => {
                        return <SwiperSlide key={caseStudies._key} className={styles.Slide}><CaseStudie key={caseStudies._key} data={caseStudies}/></SwiperSlide>
                    })}
                </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
