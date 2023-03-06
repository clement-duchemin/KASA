import axios from "axios";
import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";



function FicheLogement() {
    const params = useParams();
	const navigate = useNavigate();

	const [currentFlat, setCurrentFlat] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/logements.json"); 
			const flat = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setCurrentFlat(flat));
			if (flat === undefined) {
				navigate("/404", { state: { message: "Can't get data" } }); 
			}
		};
		getData();
       
    }, [navigate, params.id]);

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