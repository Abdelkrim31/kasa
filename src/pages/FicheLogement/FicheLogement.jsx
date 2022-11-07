import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import data from "../../datas/logements.json";


export default function FicheLogement() {
	const params = useParams();
	const pickedAppart = data.find(({ id }) => id === params.id);
	const slidePics = pickedAppart.pictures;

	console.log(pickedAppart);
	if(pickedAppart !== undefined) {
	return (
		<div key={params.id} className="fiche-container">
			<Carrousel slides={slidePics} />
		</div>
	);
	}	
}


