import styles from './tools.module.scss'
import Tool from './tool/tool'

const Tools = (props) => {
  const {
    data
  } = props

  return (
    <section className={styles.Container}>
      <h2 className={styles.Headline}>{data.headline}</h2>
      <div className={styles.Tools}>
        {data.tools.map(tool => {
          return <Tool key={tool._key} data={tool} />
        })}
      </div>
    </section>
  )
}

export default Tools
