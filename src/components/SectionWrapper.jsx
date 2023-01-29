import React from 'react'

const SectionWrapper = ({title, description, showBtn, mockupImg }) => {
  return (

    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <img src={mockupImg} alt="mockup"/>
      </div>
  )
}

export default SectionWrapper