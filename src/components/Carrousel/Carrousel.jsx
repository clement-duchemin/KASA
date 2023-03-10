import { useState } from "react"
import right from "../../assets/Vector-right.svg"
import left from "../../assets/Vector-left.svg"

function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1) // On repart au premier slide quand on arrive au dernier
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1) // On repart au dernier slide quand on est au premier
    }

  return (
    <section id="carrousel-container">
      <img 
        src={left} 
        alt="flèche-gauche" 
        onClick={previousSlide} 
        className="leftArrow" 
        />
      <img 
        src={right}
        alt="flèche-droite"
        onClick={nextSlide}
        className="rightArrow" 
        />
      {slides.map((slide, index) => (
        <div key={index} 
             className={current === index ? "slider" : null}>
             {index === current && <img src={slide} alt="appartement à louer" />}
             {index === current && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
             )}
        </div>
      ))}  
    </section>
  );
}

export default Carrousel