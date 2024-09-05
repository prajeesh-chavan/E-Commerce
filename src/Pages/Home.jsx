import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import Popular from '../components/Popular'

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Latest/>
    </div>
  )
}

export default Home