import { useState, useRef, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";

// function Collapse(props) {
// const [toggle, setToggle] = useState(false);
// const [heightEl, setHeightEl] = useState();

// const toggleState = () => {
//     setToggle(!toggle);
// }

// const refHeight = useRef();

// useEffect(() => {
//     setHeightEl(`${refHeight.current.scrollHeight}px`);
// }, []);

//   return (
//     <div className={`collapse ${props.aboutStyle}`}>
//         <div onClick={toggleState} className="collapse__visible">
//             <h2>{props.aboutTitle}</h2>
//             <img
//                 className={toggle ? "chevron rotated" : "chevron"}
//                 src={Chevron}
//                 alt="chevron"
//             />    
//         </div>
//         <div 
//             ref={refHeight}
//             className={toggle ? "collapse__toggle animated" : "collape__toggle"}
//             style={{ height: toggle ? `${heightEl}`: "0px"}}
//          >
//             <p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
//         </div>    
//     </div>
//   );
// }

// export default Collapse

 function Collapse(props) {
	const [toggle, setToggle] = useState(false); // je definie la valeur du state du toggle à false.
	const [heightEl, setHeightEl] = useState(); // je definie le state de la hauteur du collapse

	const toggleState = () => {
		//je définie la fonction toggleState qui modifie la valeur toggle au clic.
		setToggle(!toggle);
	};

	const refHeight = useRef(); //La méthode useRef, ici déclarée, permettra de récupérer et conserver la valeur de la hauteur du collapse déplié.

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
	}, []); //La propriété scrollHeight permet de mesurer la hauteur de l'élément, y compris ce qui n'est pas visible(overflow).

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collapse`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}//Au premier clic, les classes chevron et rotate sont activées, au deuxième seulement chevron.
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight} // La constante refHeight, qui contient la logique de capture de la hauteur du collapse est passée en référence.
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p>{props.aboutText}</p> 
			</div> 
		</div>
	); 
}

export default Collapse