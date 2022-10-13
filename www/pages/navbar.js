import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
function menuDeroulant(id) {
	document.getElementById(id).classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.boutounDeroulant')) {
		var deroulant = document.getElementsByClassName("contenu");
		let i;
		for (i = 0; i < deroulant.length; i++) {
			var ouverture = deroulant[i];
			if (ouverture.classList.contains('show')) {
				ouverture.classList.remove('show');
			}
		}
	}
}

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});
*/


function Navbar() {
    return (
        <header>
        <div id="BarrePrincipale">
            <a href="#"><img src="/bonjourapp-logo.png" alt="BonjourApp" width="102.4px" height="57.6px"></img></a>
            <div id="Navigation">
                <button onclick="#">Accueil</button>
                <div id="MenuDeroulant">
                    <button /*onclick={menuDeroulant('Options')}*/ class="boutounDeroulant">Tout Parcourir</button>
                    <div id="Options" class="contenu">
                        <a href='http://localhost:3000/hello'>Hello</a>
                        <a href="http://localhost:3000/hello?name=Adrien">Hello Adrien</a>
                        <a href="http://localhost:3000/hello?name=Aurelien">Hello Aurélien</a>
                        <a href="http://localhost:3000/hello?name=Tosca">Hello 🐶</a>
                    </div>
                </div>
                <button onclick="#">Contacts</button>
                <button onclick="#">Articles</button>
                <button onclick="#">About</button>
            </div>
            <div id="BarreRecherche">
                <form id="search" method="post">
                    <div id="Recherche">
                        <FontAwesomeIcon id="icone" icon={faMagnifyingGlass} flip='horizontal'></FontAwesomeIcon><input type="text" name="search" autocomplete="off" placeholder="    Y'a rien pour l'instant ..."/>
                        <button type="submit" id="SubmitRecherche">Rechercher</button>
                    </div>
                </form>
            </div>
            <div id="Darkmode"><button /* onclick="switchTheme();"*/ title="Changer de thème de couleur">◐</button></div>
        </div>
    </header>
    );
    }
    export default Navbar