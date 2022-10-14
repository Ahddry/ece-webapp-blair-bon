import Navbar from "./navbar";
import Footer from "./footer";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Page À propos
function About() {
    return (
        <div>
            <Navbar />
            <div id="body">
                <div className="about">
                    <h1>À propos</h1>
                    <div>
                        <h2>Introduction</h2>
                        <p>
                            Projet du premier semestre de Technologies web SI. <br></br>
                            Ce projet a pour but de créer une application web en utilisant le framework <b>Node.js</b> pour <b>React</b>. <br></br>
                            <b>React</b> est un framework JavaScript libre développé par Facebook depuis 2013. Il est utilisé pour développer des interfaces utilisateur, et permet de créer des applications web monopages. <br></br><br></br>

                            Le contenu créé pour les TP 1 à 3 est disponible dans le dossier <a href="https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/server">server</a>, la suite dont nous parlons dans cette documentation est quant à elle dispnible dans le dossier <a href="https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/www">www</a>.
                        </p>

                        <h3>État d'avancement</h3>
                        <p>
                            Cette application est actuelement capable de :
                        </p>
                        <ol>
                            <li>Afficher des pages écrites en <b>React</b> à l'aide du framework <b>Next.js</b></li>
                            <li>Rediriger l'utilisateur vers les bonnes routes pour afficher les pages adéquates</li>
                            <li>Lire et afficher des fichiers <b>JSON</b></li>
                            <li>Inclure des styles CSS variés</li>
                        </ol>

                        <h3>Fonctionnalités supplémentaires</h3>
                        <p>
                            Pour compléter cette application, nous avons décidé d'y rajouter une couche d'<b>HTML</b> et de <b>CSS</b> à plusieurs thèmes, s'adaptant ainsi aux préférences de couleurs de l'utilisateur (clair ou sombre) afin d'en améliorer le rendu et la fluidité de navigation.<br></br>
                            Cette application comporte aussi des icônes <b>Font Awesome</b> pour améliorer la lisibilité et le rendu final.
                        </p>

                        <h3>Fonctionnalités à venir</h3>
                        <p>
                            Nous développons actuellement les fonctionnalités de la partie 3 du TP : routage dynamique. <br></br>
                            Nous avons aussi prévu d'ajouter une page de articles, référençant des articles que nous créerons comme exemple. <br></br>
                            Nous avons aussi prévu d'ajouter des pages nous permettant de retrouver les fonctionnalités des TP précédents, nottament la partie <i>Hello</i>.
                        </p>

                        <h2>Contributeurs</h2>
                        <p>
                            Cette application a été développée par : <br></br>
                        </p>
                        <ul>
                            <li>Adrien BLAIR   <a href="https://github.com/Ahddry"><FontAwesomeIcon icon={faGithub}/>Ahddry</a> </li>
                            <li>Aurélien BON   <a href="https://github.com/Aurelien-Bon"><FontAwesomeIcon icon={faGithub}/>Aurelien-Bon</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    }

export default About