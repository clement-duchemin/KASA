import { Link } from "react-router-dom";

function Card({id, cover, title}) {
  return (
    <Link to={`/logement/${id}`} className="card-logement">
        <img src={cover} alt="appartement" />
        <div className="card-logement__layer">
            <p className="card-logement__title">{title}</p>
        </div>
    </Link>
  );
}

export default Card


// function Card({ cover, title}) {
//   return (
//     <article className="card-logement">
//         <img src={cover} alt="appartement" />
//         <div className="card-logement__layer">
//             <p className="card-logement__title">{title}</p>
//         </div>
//     </article>
//   );
// }

// export default Card