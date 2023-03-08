import fullStar from "../../assets/full-star.svg"
import emptyStar from "../../assets/empty-star.svg"

function Rate({ score }) {  // Le score est ici passé en props.
    const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-stars">
        {stars.map((level) => 
            score >= level ? (     // Affiche-moi les levels (étoiles rouges) inférieurs et égaux au score.
                <img
                    key={level.toString()}// Les keys dans les tableaux et listes doivent être uniques. Ici je passe l'élément de la méthode map.
                    className="star"       
                    src={fullStar}
                    alt="rating stars"
                />    
            ) : (
                <img
                    key={level.toString()} // Les levels (empty stars) supérieurs au score seront affiché en gris.
                    className="star"
                    src={emptyStar}
                    alt="rating stars"
                />
            )
        )}
    </div>
  );
}

export default Rate