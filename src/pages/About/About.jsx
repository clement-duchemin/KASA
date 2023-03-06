import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";

function About() {

    const aboutDatas = [
		{
			"id": "1",
			"aboutTitle": "Fiabilité",
			"aboutText": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"aboutTitle": "Respect",
			"aboutText": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"aboutTitle": "Service",
			"aboutText": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"aboutTitle": "Sécurité",
			"aboutText": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]
  return (
    <>
        <AboutBanner />
        {aboutDatas.map((rule, id) => (
            <Collapse 
            key={id}
            aboutTitle={rule.aboutTitle}
            aboutText={rule.aboutText}
            aboutStyle="about-style"
            />
        ))}
    </>
  )
}

export default About