import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
// Fonction pour le menu déroulant
function menuDeroulant(id) {
	document.getElementById(id).classList.toggle("show");
}

// Fonction pour changer de thème
window.onClick = function (event) {
	if (!event.target.matches('.boutounDeroulant')) {
		var deroulant = document.getElementsByclassName("contenu");
		let i;
		for (i = 0; i < deroulant.length; i++) {
			var ouverture = deroulant[i];
			if (ouverture.classList.contains('show')) {
				ouverture.classList.remove('show');
			}
		}
	}
}

// Fonction pour changer de thème
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// On vérifie si le thème est déjà défini
btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});
*/

// Barre de navigation affichée sur toutes les pages
function Navbar()
{
    return (
        <header>
        <div id="BarrePrincipale">
            <a href="http://localhost:3000/"><img src="/bonjourapp-logo.png" alt="BonjourApp" width="102.4px" height="57.6px"></img></a>
            <div id="Navigation">
                <button onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/';}}>Accueil</button>
                <div id="MenuDeroulant">
                    <button /*onClick={menuDeroulant('Options')}*/ className="boutounDeroulant">Tout Parcourir</button>
                    <div id="Options" className="contenu">
                        <a href='http://localhost:3000/hello'>Hello</a>
                        <a href="http://localhost:3000/hello?name=Adrien">Hello Adrien</a>
                        <a href="http://localhost:3000/hello?name=Aurelien">Hello Aurélien</a>
                        <a href="http://localhost:3000/hello?name=Tosca">Hello 🐶</a>
                    </div>
                </div>
                <button onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/contacts';}}>Contacts</button>
                <button onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/articles';}}>Articles</button>
                <button onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3000/about';}}>À propos</button>
            </div>
            <div id="BarreRecherche">
                <form id="search" method="post">
                    <div id="Recherche">
                        <FontAwesomeIcon id="icone" icon={faMagnifyingGlass} flip='horizontal'></FontAwesomeIcon><input type="text" name="search" autoComplete="off" placeholder="    Y'a rien pour l'instant ..."/>
                        <button type="submit" id="SubmitRecherche">Rechercher</button>
                    </div>
                </form>
            </div>
            <div id="Darkmode"><button /* onClick="switchTheme();"*/ title="Changer de thème de couleur">◐</button></div>
        </div>
    </header>
    );
}
export default Navbar