import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Page d'accueil
function HomePage()
{
    return (
        <div>
            <Navbar />
            <div id="body">
                <div className="container">
                    <h1>Bienvenue !</h1>
                    <div >
                        <p>
                            Bienvenue sur notre site web ! <br></br>
                            Vous pouvez naviguer à travers les différentes pages en utilisant le menu en haut de la page. <br></br>
                            Vous pouvez aussi utiliser les liens suivants : <br></br>
                        </p>
                        <ul>
                            <li><a href="http://localhost:3000/articles">Liste des articles</a></li>
                            <li><a href="http://localhost:3000/articles/myarticle">Un article en particulier</a></li>
                            <li><a href="http://localhost:3000/contacts">Contacts</a></li>
                            <li><a href="http://localhost:3000/about">À propos</a></li>
                            <li><a href="http://localhost:3000/fzaifhazfiqs">Une page qui n'existe pas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default HomePage