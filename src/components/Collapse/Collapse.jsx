import CollapseCSS from "../Collapse/Collapse.module.css"
import { useState } from "react" //import des hooks de base react
import iconCollapse from "../Images/icon-collapse.svg"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false) // je defini le state isOpen (et false par défaut)

  // affiche le collapse replié par défaut, et l'ouvre au clic puis 
  // le referme au clic en faisant disparaitre le texte et le style
  return isOpen ? (
    /*Collapse ouvert */
     <div className={CollapseCSS.container}>  
      <div className={CollapseCSS.title} onClick={() => setIsOpen(false)}>
        {title}
        <img src={iconCollapse} className={CollapseCSS.iconOpen} alt="alt" />
      </div>
      <div className={CollapseCSS.content}>{content}</div>
    </div> 

  ) : ( //affichage conditionnel du Collapse
    /*Collapse replié */
    <div className={CollapseCSS.container}>
      <div className={CollapseCSS.title} onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className={CollapseCSS.icon} alt="alt"/>
      </div>
    </div> 
  )
}

export default Collapse
