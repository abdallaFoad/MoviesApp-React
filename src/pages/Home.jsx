import React from 'react'
import Clients from '../sections/clients/Clients'
import Gallery from '../sections/gallery/Gallery'
import PresentationVideo from '../sections/Presentation/PresentationVideo'
import Production from '../sections/Production'
import SliderVideo from '../sections/SliderVideo'

const Home = () => {
  return (
    <div>
      <SliderVideo />
      <Production />
      <Gallery />
      <PresentationVideo />
      <Clients />
    </div>
  )
}

export default Home