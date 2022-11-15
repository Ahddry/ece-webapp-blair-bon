import Footer from "../components/Footer";
import { useState } from "react";

// Simple compteur de nombre de clics sur un bouton avec la fonction useState()
function State() {
    const [count, setCount] = useState(0);
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%]">
                <div className="space-y-6">
                    <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale ">Nombre de clics sur le bouton : {count}</h1>
                    <div className="space-y-4">
                        <p className="gap-4 text-justify flex-wrap space-x-2">Cliquer sur le bouton pour augmententer le compteur : </p>
                        <button
                            className="shadow-md focus:ring bg-principale hover:bg-principale_V1 focus:bg-principale_V2 focus:ring-principale dark:bg-dark_secondaire hover:dark:bg-dark_secondaire_V1
                        active:dark:bg-dark_secondaire_V2 active:dark:ring-dark_secondaire dark:text-on_background px-5 py-2 m-auto rounded-full text-center cursor-pointer text-2x"
                            onClick={() => setCount(count + 1)}
                        >
                            Cliquez ici
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer className="mx-auto w-full" />
            </div>
        </section>
    );
}

export default State;
