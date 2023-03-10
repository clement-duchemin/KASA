import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";


function Home() {
    const [data, setData] = useState([]);// Je crée un useState avec un array. La variable data contiendra les données du fichier logement.json.

    useEffect(() => { // Dans ce useEffect je fais un axios.get pour récupérer les données du fichier logement.json.
        axios.get("https://raw.githubusercontent.com/clement-duchemin/kasa/master/public/logements.json")
        .then((res) => setData(res.data));
    }, []);

    return (
        <>
            <Banner />
            <div className="cards-container">
                {data.map((flat, id) => (
                    <div className="card_logement" key={id}>
                        <Link className="link_card_logement" to={`/logement/${flat.id}`}>
                            <Card cover={flat.cover} title={flat.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home










