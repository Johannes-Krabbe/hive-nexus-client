import styles from './button.module.scss'
import Link from 'next/link'

const Button = (props) => {
  const {
    // TODO: idea -> get rid of action and render conditionally based on if onClick exists
    action,
    type = '',
    text = '',
    onClick,
    href
  } = props

  const classNames = `${styles.cta} ${styles[type]}`

  if (action === 'button') {
    return (
      <button className={classNames} onClick={onClick}>
        {text}
      </button>
    )
  } else if (action === 'link') {
    return (
      <Link href={href}>
        <a className={classNames}>
          {text}
        </a>
      </Link>
    )
  } else if (action === 'submit') {
    return (
      <input className={classNames} type="submit" value={text}/>
    )
  }
}

export default Button
