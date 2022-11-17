import React from "react"
import { useState } from "react"
import SliderCSS from "../Carrousel/Carrousel.module.css"
import leftArrow from "../Images/left-arrow.svg"
import rightArrow from "../Images/right-arrow.svg"
import PropTypes from "prop-types"

function Carrousel({ images }) {
  /*Définir Hook useState pour écouter les modifications*/
  const [current, setCurrent] = useState(0)

  /*Ajout d'un const pour la longueur des données*/
  const length = images.length

  /*Fonction ajoutée pour la navigation entre les images*/
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  

  return (
    <section className={SliderCSS.container}>

      <div className={SliderCSS.slider}>
        <img
          src={images[current]}
          alt={images.title}
          className={SliderCSS.image}
          key={images.id}
        />
      </div>

      <img
        src={leftArrow}
        className={
          images.length === 1 ? SliderCSS.leftArrowNone : SliderCSS.leftArrow
        }
        onClick={prevSlide}
        alt={PropTypes}
      />

      <div
        className={
          images.length === 1 ? SliderCSS.numbInfoNone : SliderCSS.numbInfo
        }
      >
        {current + 1}/{images.length}
      </div>

      <img
        src={rightArrow}
        className={
          images.length === 1 ? SliderCSS.rightArrowNone : SliderCSS.rightArrow
        }
        onClick={nextSlide}
        alt={PropTypes}
      />

    </section>
  )
}

export default Carrousel