import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Context2 from "../components/ThemeContext";
import { useContext } from "react";

// Pied de page affiché sur toutes les pages
function Footer() {
    const { colour } = useContext(Context2);
    return (
        <div className="text-center content-center ">
            <footer className={"bg-" + colour.tertiaire + " dark:bg-dark_background2 dark:text-dark_on_background2 font-medium py-3 bottom-0 w-full shadow-2xl"}>
                <div id="footer" className=" inline-block">
                    <p className=" ">
                        © Adrien BLAIR - Aurélien BON<br></br>
                    </p>
                    <div className="inline-flex gap-4">
                        <Link href="http://localhost:3000/">
                            <div className="inline-flex gap-1 cursor-pointer">
                                <FaHome className={"my-auto text-" + colour.secondaire + " dark:text-" + colour.secondaireDark}></FaHome> Accueil
                            </div>
                        </Link>
                        <span> ● </span>
                        <Link href="https://github.com/Ahddry/ece-webapp-blair-bon">
                            <div className="inline-flex gap-1 cursor-pointer">
                                <FaGithub className={"my-auto text-" + colour.secondaire + " dark:text-" + colour.secondaireDark}></FaGithub> GitHub
                            </div>
                        </Link>
                        <span> ● </span>
                        <Link href="https://github.com/adaltas/ece-webtech-2022-fall">
                            <div className="inline-flex gap-1 cursor-pointer">
                                <FaGithub className={"my-auto text-" + colour.secondaire + " dark:text-" + colour.secondaireDark}></FaGithub> Consignes
                            </div>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
