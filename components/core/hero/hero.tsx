import styles from './hero.module.scss'
import indexStyles from '../layout/index.module.scss'

import Headline from './headline/headline'
import Subheadline from './subheadline/subheadline'

type Props = {
	headline: string;
  subHeadline: string;
};

const Hero = ({headline, subHeadline}: Props) => {
  return (
    <div className={styles.Hero}>
      <div className={indexStyles.Container}>
        <Headline headline={headline} />
      </div>
      <Subheadline subheadline={subHeadline} />
    </div>
  )
}

export default Hero;