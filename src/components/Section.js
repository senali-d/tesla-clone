import React from 'react'
import styles from 'styled-components'

const Section = () => {
  return (
    <Wrap>
      Section
    </Wrap>
  )
}

export default Section

const Wrap = styles.div`
  width: 100vw;
  height: 100vh;
  background: orange;
`
