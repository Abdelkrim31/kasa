import React from 'react'
import HostRateTagCSS from "../../components/HostRateTag/HostRateTag.module.css"
import FullStar from "../Images/full-star.png"
import EmptyStar from "../Images/empty-star.png"

function HostRateTag({ details }) {

    const scaleRating = details.rating

    const ratingStars = []
    for(let i = 1; i <= 5; i++) {
        if(i <= scaleRating) {
        ratingStars[i] = true
        } else {
           ratingStars[i] = false 
        }
    }
  return (
    <div className={HostRateTagCSS.container}>

        <div className={HostRateTagCSS.leftDetails}>
            <div className={HostRateTagCSS.title}>
                {details.title}
            </div>

            <div className={HostRateTagCSS.location}>
                {details.location}
            </div>

            <div className={HostRateTagCSS.tags}>
                {details.tags.map((tagsNb) => (
                    <div className={HostRateTagCSS.tag} key={tagsNb+details.id}>{tagsNb}</div>
                ))}
            </div>
        </div>

        <div className={HostRateTagCSS.rightDetails}>
            <div className={HostRateTagCSS.hostInfo}>

                <div className={HostRateTagCSS.hostName}>
                {details.host.name}
                </div>
                
                <div className={HostRateTagCSS.pictProfile}>
                    <img src={details.host.picture} className={HostRateTagCSS.picture} alt="alt"/>
                </div>
            </div>

            <div className={HostRateTagCSS.starsBox}>
                {ratingStars.map((nbStar, index) =>
                <img className={HostRateTagCSS.stars} src={nbStar ? FullStar : EmptyStar} alt={nbStar ? "full star" : "empty star"} key={nbStar+details.id+index} />
                )}
            </div>
        </div>
        
    </div>
  )
}

export default HostRateTag