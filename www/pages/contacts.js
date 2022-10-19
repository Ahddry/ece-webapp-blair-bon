import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Page de contact
function Contacts() {
  return (
    <div>
      <Navbar />
      <div id="body">
        <div className="container">
          <h1>Contacts</h1>
          <p>
            Pour nous contacter, rien de plus simple ! <br></br>
            Vous pouvez envoyer un mail soit à{" "}
            <a href="mailto:adrien.blair@edu.ece.fr">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Adrien
            </a>{" "}
            ou à{" "}
            <a href="mailto:aurelien.bon@edu.ece.fr">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Aurélien
            </a>
            .<br></br>
            Vous pouvez aussi nous contacter sur notre{" "}
            <a href="https://github.com/Ahddry/ece-webapp-blair-bon/issues">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
