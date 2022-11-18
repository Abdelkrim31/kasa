import React from "react"
import { Navigate, useParams } from "react-router-dom"
import Carrousel from "../../components/Carrousel/Carrousel"
import LogementsCSS from "../PageLogement/PageLogement.module.css"
import HostRateTag from "../../components/HostRateTag/HostRateTag"
import Collapse from "../../components/Collapse/Collapse"
import { DataLogements } from "../../data/DataLogements" // import de DataLogements à partir du dossier data 

export default function Logements() {
  let { id } = useParams()
  const logement = DataLogements.getOneLogement(id)

  return (
    <>
      {logement ? (
        <div>
          <Carrousel key={logement.pictures} images={logement.pictures} />

          <HostRateTag key={logement.title} details={logement} />

          <div className={LogementsCSS.collapse}>
            <Collapse
              key={logement.description}
              title="Description"
              content={logement.description}
            />
            <Collapse
              key={logement.equipments}
              title="Equipments"
              content={logement.equipments.map((infos, index) => (
                <div key={`${logement.equipments}-${index}`}>{infos}</div>
              ))}
            />
          </div>
          
        </div>
      ) : ( //affichage conditionnel 
        <Navigate replace to="/*" /> //renvoi vers la page 404 si l'id du logement est invalide
      )}
    </>
  )
}

