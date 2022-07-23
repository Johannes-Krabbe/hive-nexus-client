import styles from './hero.module.scss'
import indexStyles from '../layout/index.module.scss'

import Headline from './headline/headline'
import Subheadline from './subheadline/subheadline'

const Hero = props => {
  const {
    headline = '',
    subheadline = ''
  } = props

  return (
      <div className={styles.Hero}>
         <div className={indexStyles.Container}>
            <Headline headline={headline} />
         </div>
        <Subheadline subheadline={subheadline} />
      </div>
  )
}

export default Hero
