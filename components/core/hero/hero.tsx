import React from 'react';

import { Headline } from './headline/headline'
import { Subheadline } from './subheadline/subheadline'

import styles from './hero.module.scss'
import indexStyles from '../layout/index.module.scss'
interface Props {
	headline: string
  subheadline: string
};

export const Hero = ({headline, subheadline}: Props) => {
  return (
    <div className={styles.Hero}>
      <div className={indexStyles.Container}>
        <Headline headline={headline} />
      </div>
      <Subheadline subheadline={subheadline} />
    </div>
  )
};
