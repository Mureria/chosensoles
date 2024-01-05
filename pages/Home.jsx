import React from 'react'
import Container from '../src/components/Container'
import HotCategory from '../src/components/Home/HotCategory'
import Call from '../src/components/Home/Call'
import Collection from '../src/components/Home/Collection'
import Popular from '../src/components/Home/Popular'
import Marque from '../src/components/Home/Marque'
import Featured from '../src/components/Home/Featured'
import Cat from '../src/components/Home/Cat'
import Faq from '../src/components/Home/Faq'
import Partners from '../src/components/Home/Partners'

const Home = () => {
  return (
    <Container>
        <Call/>
        <HotCategory/>
        <Collection/>
        <Popular/>
        <Marque/>
        <Featured/>
        <Cat/>
        <Faq/>
        <Partners/>
    </Container>
  )
}

export default Home