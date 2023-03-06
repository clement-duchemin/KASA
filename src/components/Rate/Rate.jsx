import fullStar from "../../assets/full-star.svg"
import emptyStar from "../../assets/empty-star.svg"

function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-stars">
        {stars.map((level) => 
            score >= level ? (
                <img
                    key={level.toString()}
                    className="star"
                    src={fullStar}
                    alt="rating stars"
                />    
            ) : (
                <img
                    key={level.toString()}
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