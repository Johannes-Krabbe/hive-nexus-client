import styles from './button-section.module.scss'

import ButtonField from '../button-field/button-field'

const ButtonSection = props => {
  const {
    buttons
  } = props

  return (
    <div className={styles.DoubleButtonSection}>
      {buttons.map((button) => {
        return <ButtonField
          key={button._key}
          type={button.backgroundColor.title}
          title={button.title}
          buttonText={button.ctaContent}
          action='link'
          href={`/${button.link.slug.current}`} />
      })}
    </div>
  )
}

export default ButtonSection
