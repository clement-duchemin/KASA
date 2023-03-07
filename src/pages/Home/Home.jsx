import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import datas from '../../data/data'

// function Home() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("/logements.json")
//         .then((res) => setData(res.data));
//     }, []);

//     return (
//         <>
//             <Banner />
//             <div className="cards-container">
//                 {data.map((flat, id) => (
//                     <div className="card_logement" key={id}>
//                         <Link className="link_card_logement" to={`/logement/${flat.id}`}>
//                             <Card cover={flat.cover} title={flat.title} />
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Home


function Home() {
    

    

    return (
        <>
            <Banner />
            <div className="cards-container">
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
            </div>
        </>
    );
}

export default Home







