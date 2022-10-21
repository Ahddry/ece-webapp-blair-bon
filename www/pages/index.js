import Image from "next/image";
import { ImArrowDown2 } from "react-icons/im";
import { useState } from "react";
import Adrien from "../components/Adrien";
import Aurelien from "../components/Aurelien";

// Page d'accueil
function HomePage() {
    let [checked, setChecked] = useState(true);

    return (
        <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
            <section className="flex items-center justify-center w-full h-screen snap-start flex-col" id="portfolio">
                <div className="w-full h-20" id="vide"></div>
                <div className="my-auto px-5 space">
                    <h2 className="text-3xl font-extralight lg:text-5xl">Bonjour !</h2>
                    <h1 className="pt-8 text-5xl lg:text-7xl text-yellow-400 font-thin">Nous sommes des développeurs web.</h1>
                </div>
                <div className="my-auto">
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                        <li>
                            <input type="radio" id="adrien" name="nom" className="hidden peer" required checked={true} onClick={() => setChecked(true)} />
                            <label
                                htmlFor="adrien"
                                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer
                                dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-dark_secondaire peer-checked:border-principale peer-checked:text-principale
                                hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-dark_background2 dark:hover:bg-dark_principale gap-10 overflow-hidden max-h-28 lg:max-h-52"
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Adrien</div>
                                    <div className="w-full">Blair</div>
                                </div>
                                <div className="relative  overflow-hidden w-32 h-32 -right-12 lg:w-56 lg:h-56 lg:-right-24">
                                    <Image src="/adrien.jpg" alt="adri" className=" -right-9 rounded-full shadow-lg  " layout="fill"></Image>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="aurelien" name="nom" className="hidden peer" value={false} onClick={() => setChecked(false)} />
                            <label
                                htmlFor="aurelien"
                                className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer
                                dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-dark_secondaire peer-checked:border-principale peer-checked:text-principale
                                hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-dark_background2 dark:hover:bg-dark_principale gap-10 overflow-hidden max-h-28 lg:max-h-52"
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Aurélien</div>
                                    <div className="w-full">Bon</div>
                                </div>
                                <div className="relative  overflow-hidden w-32 h-32 -right-12 lg:w-56 lg:h-56 lg:-right-24">
                                    <Image src="/aurelien.png" alt="adri" className=" -right-9 rounded-full shadow-lg  " layout="fill"></Image>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="my-auto rounded-full bg-background2 dark:bg-dark_background2 p-3 animate-bounce ring-2 ring-principale dark:ring-dark_secondaire">
                    <ImArrowDown2 className="text-3xl text-principale dark:text-dark_secondaire" />
                </div>
            </section>
            <div>{checked ? <Adrien></Adrien> : <Aurelien></Aurelien>}</div>
        </div>
    );
}
export default HomePage;
