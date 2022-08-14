import React from 'react';

import styles from './hero.module.scss'
import indexStyles from '../layout/index.module.scss'

import Headline from './headline/headline'
import Subheadline from './subheadline/subheadline'

interface Props {
	headline: string;
  subheadline: string;
};

const Hero: React.FC<Props> = ({
  headline,
  subheadline
}) => {
  return (
    <div className={styles.Hero}>
      <div className={indexStyles.Container}>
        <Headline headline={headline} />
      </div>
      <Subheadline subheadline={subheadline} />
    </div>
  )
};

export default Hero;