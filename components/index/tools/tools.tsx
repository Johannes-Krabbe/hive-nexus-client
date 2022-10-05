import { FadeIn } from 'components/fade-in/fade-in'
import { Tool } from './tool/tool'

import styles from './tools.module.scss'

// TODO: Define Tool Type
interface Props {
  headline: string
  tools: Array<any>
}

export const Tools = ({headline, tools}: Props) => {
  return (
    <FadeIn
      className={styles.container}
      isSection
      >
      <h2 className={styles.headline}>{headline}</h2>
      <div className={styles.tools}>
        {tools.map((t, index) => {
          return (
            <Tool
              key={index}
              name={t.name}
              description={t.description}
              href={t.href}
              hoverColor={t.hoverColor}
              />
            )
        })}
      </div>
    </FadeIn>
  );
};
