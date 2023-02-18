import styles from './hero.module.scss'

interface HeroProps {
	text: string
};

export const Hero = ({text}: HeroProps) => {
  return (
    <div className={styles.Hero}>
      <h1 className={styles.H1}>{text}</h1>
    </div>
  )
};
