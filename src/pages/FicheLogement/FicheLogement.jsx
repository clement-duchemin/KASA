import axios from "axios";
import { useState, useEffect} from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";



function FicheLogement() {
    const params = useParams(); // La méthode useParams permet de manipuler les paramètres de requête (id) des url du fichier logements.json
	  const navigate = useNavigate(); // Hook qui permet de rediriger vers la page 404 en cas d'erreur d'url.

	const [currentFlat, setCurrentFlat] = useState(); // Je déclare la variable state currentFlat
	useEffect(() => {  // Je passe la fonction getData au hook useEffect
		const getData = async () => {
			const res = await axios.get("/logements.json"); 
			const flat = res.data.find(({ id }) => id === params.id); // La méthode find retourne le premier id trouvé qui correspond à un id extrait avec useParams.
			res.data.map(() => setCurrentFlat(flat)); // La logique de recherche d'id est passée dans la variable flat qui est passée à la fonction setCurrentFlat pour être intégré au state.
			if (flat === undefined) {   // La méthode map avec une fonction callback sur l'élément setCurrentFlat me permet de manipuler les données de logements.json intégrées au state currentFlat.
				navigate("/404", { state: { message: "Can't get data" } }); 
			}
		};
		getData();
       
    }, [params, navigate]);

    const slidePics = currentFlat && currentFlat.pictures;
    const tags = currentFlat && currentFlat.tags;
    const equipments = currentFlat && currentFlat.equipments;
    const equip = currentFlat && equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));


  return (
    currentFlat && (
      <div key={params.id} className="fiche-container">
          <Carrousel slides={slidePics}  />
          <section className="hostInfo-container">
                <div className="title-tags-container">
                  <div className="title-container">
                      <h1>{currentFlat.title}</h1>
                      <h3>{currentFlat.location}</h3>
                  </div>
                  <div className="tags-container">
                      {tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                  </div>
                </div>
                <div className="rate-host-container">
                        <div className="host-container">
                            <Host
                                  hostName={currentFlat.host.name}
                                  hostPic={currentFlat.host.picture}
                            />      
                        </div>
                        <div className="rate-container">
                            <Rate score={currentFlat.rating} />
                        </div>
                </div>        
          </section>
          <div className="collapse-fiche-container">
                        <Collapse
                              aboutTitle="Description"
                              aboutText={currentFlat.description}
                        />
                        <Collapse aboutTitle="Équipements" aboutText={equip} />      
          </div>
      </div>
    )
  );
}

export default FicheLogement






