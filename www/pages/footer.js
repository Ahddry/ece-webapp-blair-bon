import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
      <div>
        <footer>
            <div id="footer">
                <p>
                    © Adrien BLAIR - Aurélien BON<br></br>
                    <a href="https://github.com/Ahddry/ece-webapp-blair-bon">
                        <FontAwesomeIcon id="icone-footer" icon={faGithub} flip='horizontal'></FontAwesomeIcon> GitHub
                    </a>
                </p>
            </div>
        </footer>
      </div>
    );
    }
    export default Footer