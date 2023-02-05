import React, { useEffect } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  // themeVariables: {
  //   primaryColor: '#991b1b',
  // },
})

const Mermaid = ({ diagram }) => {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [])

  return <div className="mermaid webkit-center scale-110">{diagram}</div>
}

export default Mermaid
