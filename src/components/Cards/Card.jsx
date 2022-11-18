import { useState } from "react"
import { Link } from "react-router-dom"
import PageLogement from "../../data/logements.json"
import CardsCSS from "../Cards/Card.module.css"

function Card() {
  const [logement] = useState(PageLogement)

  return (
    <div className={CardsCSS.backgroundCards}>
      {logement.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
          <div key={logement.id} className={CardsCSS.card}>
            <img
              src={logement.cover}
              alt={logement.title}
              className={CardsCSS.img}
            />
            <div className={CardsCSS.title}>{logement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card
