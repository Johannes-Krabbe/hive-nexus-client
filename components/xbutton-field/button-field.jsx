import styles from './button-field.module.scss'

import Button from '../button/button'

const ButtonField = (props) => {

  const {
    type = '',
    title = '',
    buttonText = '',
    action,
    onClick = '',
    href = ''
  } = props

  const classNames = `${styles.ButtonField} ${styles[type]}`

  return (
    <div className={classNames}>
      <h3>
        {title}
      </h3>
      <Button action={action} type='dark' text={buttonText} onClick={onClick} href={href}/>
    </div>
  )
}

export default ButtonField
