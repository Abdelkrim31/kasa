import React from "react"
import { useState } from "react"
import SliderCSS from "../Carrousel/Carrousel.module.css"
import leftArrow from "../Images/left-arrow.svg"
import rightArrow from "../Images/right-arrow.svg"

function Carrousel({ images }) {
  /*Définir Hook useState pour écouter les modifications*/
  const [current, setCurrent] = useState(0)  // l'index du premier slide défini à 0

  /*Ajout d'un const pour la longueur des données : 
  longueur du tableau de slides*/
  const length = images.length

  /*Fonction ajoutée pour la navigation entre les images*/
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) // on repart au premier slide quand on arrive au dernier
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1) // on repart au dernier slide quand on est au premier
  }
  

  return (
    <section className={SliderCSS.container_carrousel}>

      <div className={SliderCSS.slider}>
        <img
          src={images[current]}
          alt={images.title}
          className={SliderCSS.image}
          key={images.id}
        />
      </div>

      <img
        src={leftArrow}          //Affichage des flèches seulement si length > 1 : A CONFIRMER
        className={
          images.length === 1 ? SliderCSS.leftArrowNone : SliderCSS.leftArrow
        }
        onClick={prevSlide}
        alt="alt"
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
        alt="alt"
      />

    </section>
  )
}

export default Carrousel