import Navbar from "./navbar";
import Footer from "./footer";

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
                            Cette application veut vous dire <b>BONJOUR</b> ! <br></br>
                            Vous pouvez rester anonyme, auquel cas il suffit d'aller à cette adresse : <a href="http://localhost:8080/hello">localhost:8080/hello</a>,
                            Pour cela, rien de plus simple, il suffit de rentrer cette adresse <a href="http://localhost:8080/hello?name=">localhost:8080/hello?name=</a>
                            et de rajouter votre nom à la fin de celle-ci ! <a>test</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default HomePage