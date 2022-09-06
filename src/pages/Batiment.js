import React, { useEffect, useState } from "react";
import "./batiment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../img/smarthome.webp";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

export default function Produit(prop) {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container className="batiment">
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem", marginBottom: "4rem" }}></div>

      <Row>
        <Row>
          <Col>
            <h2 className="batiment-h2">LA GESTION TECHNIQUE DU BÂTIMENT</h2>
            <i className="batiment-i">SWATEK</i>
            <Col></Col>
            <img className="smart-home" src={img} />
            <Col></Col>
          </Col>
        </Row>
        <Row className="paragraph">
          <p>
            La Gestion Technique du Bâtiment – GTB – permet de raccorder les équipements techniques du bâtiment afin de
            sécuriser, maitriser, économiser et gérer. Concept communiquant numérique et informatique, elle permet de :
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Surveiller des installations 24h/24 7j/7 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Réduire les dépenses énergétiques <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Maintenir la température et le confort <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fiabiliser les installations et augmenter leur durée de
            vie <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Réduire des déplacements et intervenir très rapidement à
            distance <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Assurer une gestion énergétique optimum du bâtiment.
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>LES PRINCIPAUX AVANTAGES D’ UNE GTB</b>
            <br />
            L’avantage premier est de permettre la conduite simplifiée et centralisée des installations techniques d’un
            bâtiment, que l’exploitation soit organisée sur site et/ou déportée. Nous insistons particulièrement, en
            tant que prescripteur, sur le fait que l’appropriation de l’outil est un préalable à l’utilisation et la
            pérennité de la GTB ; en ce sens, la GTB doit être un outil conçu et utilisable par un personnel non
            informaticien.
            <br />
            <br />
            Les autres avantages procurés par la <b style={{ color: "#7420d3" }}>GTB</b> sont :
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;la remontée d’informations temps réel (état de fonctionnement d’équipements,
            remontée d’alarmes sur défaut ou sur dépassement de seuil, mesure de grandeurs physiques telles que comptage
            d’énergies, relève de température, comptabilisation des temps de fonctionnement, etc…).
            <br />
            <br />
            la planification des opérations de maintenance préventive ; la remontée d’informations de terrain permet
            d’anticiper et de cibler précisément les besoins de maintenance. Il en résulte une diminution du nombre de
            pannes et donc une meilleure disponibilité des installations.
            <br />
            <br />
            enfin, la GTB permet l’interconnexion d’installations techniques au travers de bus de terrain fédérateurs et
            rend les bâtiments intelligents dans leur fonctionnement (le fonctionnement s’avère quasi-autonome une fois
            la mise en exploitation de la GTB validée); l’interconnexion des installations permet également d’éviter les
            doublons d’équipements (exemple : multi-capteurs installés dans les bureaux commandant à la fois les
            terminaux de CVC, les luminaires et les protections solaires).
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>LES ENJEUX D’UNE GTB</b>
            <br />
            <br />
            Les enjeux essentiels de la GTB sont avant tout la maîtrise de la gestion d’énergie et la réduction
            d’émissions de gaz à effet de serre, enjeux majeurs des bâtiments d’aujourd’hui et de demain. Deux aspects
            de la GTB permettent de converger vers ces objectifs : <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La configuration de scénarii de fonctionnement associés à la
            définition de programmes horaires,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L’interaction des installations techniques, exemple des
            bureaux : En hiver : bénéficier des apports solaires <br /> en relevant les protections solaires mobiles et
            diminuer le besoin en éclairage, En été : descente et inclinaison des protections solaires mobiles en cas de
            surexposition limitant les besoins en rafraîchissement.
            <br />
            <br />
            Les autres enjeux sont d’améliorer de façon significative le confort des occupants des bâtiments en agissant
            automatiquement et de manière précise sur le comportement des installations mais également d’anticiper les
            périodes de fortes consommations énergétiques en délestant de manière automatique une partie des
            installations. Dans même esprit, certaines GTB permettent la reconfiguration des espaces sans intervention
            sur le câblage. Le gain de temps se cumule avec l’absence de gêne des occupants. La GTB doit être adaptée et
            directement parlante aux utilisateurs, quel que soit le profil de ces derniers, de manière à constituer un
            outil de conduite utilisé et pérenne (il est en effet rarement organisé de formation à l’utilisation du
            système au changement d’exploitant).
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>LES POSSIBILITÉS D’ECONOMIES</b>
            <br />
            <br />
            L’exploitation d’un bâtiment représente environ <b style={{ color: "#7420d3" }}>80%</b> du coût global de
            l’ouvrage contre
            <b>15 à 20%</b> pour son coût de construction. La <b style={{ color: "#7420d3" }}>GTB</b> permet une
            meilleure conduite des installations (gestion au plus près des besoins par le recours aux programmes
            horaires, délestage en cas de dépassement de seuils de puissance, etc.) et une meilleure anticipation des
            besoins de maintenance ce qui se traduit par une meilleure prévention des pannes (remontée à la supervision
            des temps de fonctionnement des équipements tournants, du pourcentage d’encrassement des filtres, de l’état
            d’usure des ballasts d’éclairage, etc.) et donc une planification au plus juste des besoins en maintenance
            corrective (nombre de déplacements optimisés, maintenance et réglage à distance). La <b>GTB</b> permet
            également la télé-relève des compteurs d’énergie et des états des équipements (remontée à distance) ce qui
            évite les déplacements spécifiques sur site. La norme
            <b style={{ color: "#7420d3" }}>
              NF EN 15-232 « Performance énergétique des bâtiments, impact de l’automatisation, de la régulation et de
              la gestion technique »
            </b>
            permet aujourd’hui d’évaluer les économies attendues en fonction du degré d’automatisation du bâtiment. Ce
            référentiel vise l’unification des méthodes d’évaluation de l’impact des automatisations, des systèmes de
            régulation et de la <b style={{ color: "#7420d3" }}>GTB</b> sur la consommation d’énergie. Nous pouvons
            également citer la norme <b style={{ color: "#7420d3" }}>NF EN 15-193</b> visant les exigences énergétiques
            en matière d’éclairage.
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>RETOUR SUR INVESTISSEMENT</b>
            <br />
            <br />
            Une nouvelle fois la norme <b style={{ color: "#7420d3" }}>NF 15-232</b> peut permettre d’évaluer
            l’incidence financière de l’automatisation plus ou moins prononcée des bâtiments. Le retour sur
            investissement est également accessible par le bais du
            <br />
            retour d’expériences entre les bâtiments fonctionnant avec et sans <b style={{ color: "#7420d3" }}>GTB</b>
            , notamment :
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comparaison des factures d’énergies,
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comparaison des coûts d’exploitation / maintenance.
          </p>
        </Row>
      </Row>
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem", marginBottom: "4rem" }}></div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            height: "50px",
            width: "50px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={scrollUp}
        >
          <BsFillArrowUpCircleFill style={{ color: "#7420d3" }} size={40} />
        </button>
      )}
      <Footer />
    </Container>
  );
}
