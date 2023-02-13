import styles from './button.module.scss'
import { IButton } from '../../types/interfaces'

export const Button = ({action, variant, text, onClick}: IButton) => {
  const buttonStyles = `${styles.Button} ${styles[variant]}`

  switch(action) {
    case 'button': {
      return (
        <button className={buttonStyles} onClick={onClick}>
          {text}
        </button>
      )
    }
    case 'submit': {
      return (
        <input className={buttonStyles} type="submit" value={text}/>
      );
    }
    default: {
      return (
        <div>Error, wrong Button action</div>
      );
    }
  }
}

export default Button;
