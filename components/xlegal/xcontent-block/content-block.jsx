import styles from './content-block.module.scss'
import PortableText from 'react-portable-text'

const ContentBlock = props => {
	const {
		body = '',
  } = props

  const renderH1 = props => <h3 className={styles.H1}>{ props.children }</h3>
  const renderH2 = props => <h4 className={styles.H2}>{ props.children }</h4>
  const renderH3 = props => <h5 className={styles.H3}>{ props.children }</h5>
  const renderP1 = props => <p className={styles.P1}>{ props.children }</p>
  const renderP2 = props => <p className={styles.P2}>{ props.children }</p>

  return (
    <section className={styles.Container}>
      <PortableText
        content={body}
        serializers={{
          H1: renderH1,
          H2: renderH2,
          H3: renderH3,
          P1: renderP1,
          P2: renderP2
        }}
        />
    </section>
  )
}

export default ContentBlock
