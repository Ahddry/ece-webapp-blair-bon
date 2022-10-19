import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Page pour les erreurs 404
function E404() {
    return (
      <div>
        <Navbar />
            <div id="P404">
                <h1>Erreur 404 <FontAwesomeIcon icon={faTriangleExclamation} /></h1>
                <div >
                    <p>La page que vous avez demandé n'existe pas <FontAwesomeIcon icon={faFaceFrown} /></p>
                </div>
            </div>
            <Footer />
      </div>
    );
}

export default E404