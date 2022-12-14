import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Context2 from "../components/ThemeContext";
import { useContext } from "react";

// Page À propos
function About() {
    const { colour } = useContext(Context2);
    return (
        <section id="about" className="flex items-center justify-between flex-col w-full min-h-screen  bg-background dark:bg-dark_background">
            <div className="w-full mt-12" id="vide"></div>
            <div className="p-5">
                <div className="space-y-6">
                    <h1 className={"pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-" + colour.principale + " dark:text-" + colour.principaleDark}>À propos</h1>
                    <div className="space-y-4">
                        <h2 className="text-xl font-extralight lg:text-2xl 2xl:text-4xl">Introduction</h2>
                        <p className="text-justify">
                            Projet du premier semestre de Technologies web SI. <br></br>
                            Ce projet a pour but de créer une application web en utilisant le framework <b>Node.js</b> pour <b>React</b>. <br></br>
                            <b>React</b> est un framework JavaScript libre développé par Facebook depuis 2013. Il est utilisé pour développer des interfaces utilisateur, et permet de créer des
                            applications web monopages. <br></br>
                            <br></br>
                            Le contenu créé pour les TP 1 à 3 est disponible dans le dossier <a href="https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/server">server</a>, la suite dont nous
                            parlons dans cette documentation est quant à elle dispnible dans le dossier <a href="https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/www">www</a>.
                        </p>

                        <h3 className="text-lg font-extralight lg:text-xl 2xl:text-2xl">État d'avancement</h3>
                        <p>Cette application est actuelement capable de :</p>
                        <ol className="ml-6 list-decimal list-outside">
                            <li>
                                Afficher des pages écrites en <b>React</b> à l'aide du framework <b>Next.js</b>
                            </li>
                            <li>Rediriger l'utilisateur vers les bonnes routes pour afficher les pages adéquates</li>
                            <li>Rediriger vers des sous-pages de manière dynamique en vérifiant que celles-ci existent bien</li>
                            <li>Inclure des styles CSS variés</li>
                        </ol>

                        <h3 className="text-lg font-extralight lg:text-xl 2xl:text-2xl">Fonctionnalités supplémentaires</h3>
                        <p className="text-justify">
                            Pour compléter cette application, nous avons décidé d'y rajouter une couche d'<b>HTML</b> et de <b>CSS</b> à plusieurs thèmes, s'adaptant ainsi aux préférences de couleurs
                            de l'utilisateur (clair ou sombre) afin d'en améliorer le rendu et la fluidité de navigation.<br></br>
                            Cette application comporte aussi des icônes <b>Font Awesome</b> pour améliorer la lisibilité et le rendu final.
                        </p>

                        <h3 className="text-lg font-extralight lg:text-xl 2xl:text-2xl">Fonctionnalités à venir</h3>
                        <p className="text-justify">
                            Nous avons prévu d'ajouter des pages nous permettant de retrouver les fonctionnalités des TP précédents, nottament la partie <i>Hello</i>.
                        </p>

                        <h2 className="text-xl font-extralight lg:text-2xl 2xl:text-4xl">Contributeurs</h2>
                        <p>
                            Cette application a été développée par : <br></br>
                        </p>
                        <ul className="ml-5 list-disc">
                            <li>
                                <div className="inline-flex gap-2">
                                    Adrien BLAIR{" "}
                                    <Link href="https://github.com/Ahddry">
                                        <div className=" text-lien visited:text-lien_click cursor-pointer">
                                            <FaGithub className="mb-1 inline-block" /> Ahddry
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="inline-flex gap-2">
                                    Aurélien BON
                                    <Link href="https://github.com/Aurelien-Bon">
                                        <div className=" text-lien visited:text-lien_click cursor-pointer">
                                            <FaGithub className="mb-1 inline-block" /> Aurelien-Bon
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer className="mx-auto w-full" />
            </div>
        </section>
    );
}

export default About;
