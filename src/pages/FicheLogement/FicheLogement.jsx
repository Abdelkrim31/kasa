import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import data from "../../datas/logements.json";


export default function FicheLogement() {
	const params = useParams();
	const pickedAppart = data.find(({ id }) => id === params.id);
	const slidePics = pickedAppart.pictures;
	const tags = pickedAppart.tags;

	console.log(pickedAppart);
	
	return (
		<div key={params.id} >
			<Carrousel slides={slidePics} />
			<section className="hostInfo-container">

				<div className="title-tags-container">
					<div className="title-container redFont">
						<h1>{pickedAppart.title}</h1>
						<h3>{pickedAppart.location}</h3>
					</div>

					<div className="tags-container">
						{tags.map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
				</div>

				<div className="rate-host-container">

					<div className="redFont">
						<Host
							hostName={pickedAppart.host.name}
							hostPic={pickedAppart.host.picture}
						/>
					</div>

					<div className="rate-container">
						<Rate score={pickedAppart.rating} />
					</div>
				</div>

			</section>

			<div className="collapse-fiche-container">
				<Collapse />
				<Collapse />
			</div>

		</div>
	);
		
}


