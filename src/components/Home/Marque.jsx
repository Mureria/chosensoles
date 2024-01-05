import React from 'react'
import Container from '../Container'
import Slider from './Slider'
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Container>
        <Marquee speed={100}>
            <Slider/>
        </Marquee>
    </Container>
  )
}

export default Marque