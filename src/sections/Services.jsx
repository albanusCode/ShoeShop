import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='maxt-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard {...service}/>
      ))}
    </section>
  )
}

export default Services