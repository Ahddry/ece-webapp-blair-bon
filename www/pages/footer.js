import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Pied de page affiché sur toutes les pages
function Footer() {
    return (
      <div>
        <div id="vide"></div>
        <footer>
            <div id="footer">
                <p>
                    © Adrien BLAIR - Aurélien BON<br></br>
                    <a href="http://localhost:3000/">
                        <FontAwesomeIcon id="icone-footer" icon={faHome}></FontAwesomeIcon> Accueil
                    </a>
                    <span> ● </span>
                    <a href="https://github.com/Ahddry/ece-webapp-blair-bon">
                        <FontAwesomeIcon id="icone-footer" icon={faGithub}></FontAwesomeIcon> GitHub
                    </a>
                    <span> ● </span>
                    <a href="https://github.com/adaltas/ece-webtech-2022-fall" >
                        <FontAwesomeIcon id="icone-footer" icon={faGithub}></FontAwesomeIcon>Consignes
                    </a>
                </p>
            </div>
        </footer>
      </div>
    );
    }

export default Footer