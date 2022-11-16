import React from "react"
import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../components/Images/banner-home.jpg"
import Card from "../../components/Cards/Card"
import { Link } from "react-router-dom";
import data from "../../datas/logements.json";

export default function Home() {
  return (
    <div>
      <Banner src={ImgBannerHome} title={"Chez vous, partout et ailleurs"} alt="Illustration d'une côte"/>
	  
	    <div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
		</div>
    </div>
  )
}

/*
import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import data from "../../datas/logements.json";

export default function Home() {
	return (
		<div>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
*/



