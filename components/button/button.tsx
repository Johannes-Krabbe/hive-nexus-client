import styles from './button.module.scss'
// import Link from 'next/link'
// import { Url } from 'url';

interface Props {
	action: string;
  variant: 'primary' | 'secondary' | 'dark';
  text?: string;
  onClick?: () => void;
  // href?: Url;
};

// TODO: implement href type

const Button = ({action, variant, text, onClick}: Props) => {
  const classNames = `${styles.Button} ${styles[variant]}`

  switch(action) {
    case 'button': {
      return (
        <button className={classNames} onClick={onClick}>
          {text}
        </button>
      )
    }
    case 'submit': {
      return (
        <input className={classNames} type="submit" value={text}/>
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
