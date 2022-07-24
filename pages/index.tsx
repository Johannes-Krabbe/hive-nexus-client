import type { NextPage } from 'next'

import styles from '../components/core/layout/index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      Home Page Coming Here
      {/* {sections.map((section) => {
        switch (section._type) {
          case 'heroSection':
            return <Hero key={section._key}
                         headline={section.headline}
                         headlinebold={section.headlinebold}
                         headlinepart={section.headlinepart}
                         description={section.description}/>
          case 'contentSection':
            return <Content key={section._key} content={section.content}/>
          case 'toolsSection':
            return <Tools key={section._key} data={section}/>
          case 'caseStudiesSection':
            return <CaseStudies key={section._key} data={section}/>
          case 'typewriterSection':
            return <TypeWriter key={section._key} strings={section.texts}/>
          case 'customerSection':
            return <Customer key={section._key} customers={section.customer}/>
        }
      })} */}
    </div>
  )
}

export default Home
