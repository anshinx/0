import React from 'react'
import { HeadingBackground } from '../../Assets'
import './Heading.css'
function Heading() {
  return (
    <div className="heading">
      <img src={HeadingBackground} alt="" class="heading_background" />
      <div className="heading_content">
        <h1>At Kafası</h1>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;Hoşgeldiniz</h2>
      </div>
    </div>
  )
}

export default Heading
