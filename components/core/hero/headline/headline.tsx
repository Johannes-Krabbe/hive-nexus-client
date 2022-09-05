import styles from './headline.module.scss'

interface Props {
	headline: string
};

export const Headline = ({headline}: Props) => {
  return (
    <h1 className={styles.Headline}>
      {headline}
    </h1>
  )
};
