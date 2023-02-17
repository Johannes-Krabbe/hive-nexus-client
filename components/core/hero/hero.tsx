import { Headline } from './headline/headline'

import styles from './hero.module.scss'

interface Props {
	headline: string
};

export const Hero = ({headline}: Props) => {
  return (
    <div className={styles.Hero}>
      <Headline headline={headline} />
    </div>
  )
};
