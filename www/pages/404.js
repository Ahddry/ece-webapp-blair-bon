import { FaExclamationTriangle } from "react-icons/fa";
import { HiFaceFrown } from "react-icons/hi2";

// Page pour les erreurs 404
function E404() {
    return (
        <div>
            <div id="P404">
                <h1 className="text-erreur dark:text-dark_erreur text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center">
                    <div className="inline-flex gap-5 my-10">
                        Erreur 404
                        <FaExclamationTriangle className="" />
                    </div>
                </h1>
                <div className="text-center">
                    <p className="inline-flex text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        La page que vous avez demandé n'existe pas
                        <HiFaceFrown className="my-auto ml-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default E404;
