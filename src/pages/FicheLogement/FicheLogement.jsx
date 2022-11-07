import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import data from "../../datas/logements.json";


export default function FicheLogement() {
	const params = useParams();
	const pickedAppart = data.find(({ id }) => id === params.id);
	const slidePics = pickedAppart.pictures;
	const tags = pickedAppart.tags;

	console.log(pickedAppart);
	if(pickedAppart !== undefined) {
	return (
		<div key={params.id} >
			<Carrousel slides={slidePics} />
			<section>
				<div>
					<div>
						{tags.map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
	}	
}


