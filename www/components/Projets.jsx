import CarteProjet from "./CarteProjet";
import { supabase } from "../utils/supabase";
import { useState } from "react";
import { useEffect } from "react";

// Projets réalisé par une personne
function Projets({ userid }) {
    const [listprojets, setlistporjets] = useState([])
    // async function getprojets()
    // {
    //     let {data: projets, error} = await supabase.from('projets').select('*').eq('auteur', userid)
    //     if(error) throw error;
    //     setlistporjets(projets);
    // }
    // getprojets()
    useEffect(() => {
        async function getprojets() {
            let { data: projets, error } = await supabase.from('projets').select('name,language,listeimage,id').eq('auteur', userid)
            if (error) throw error;
            setlistporjets(projets);
        }
        getprojets()
    }, [userid])
    console.log(listprojets)
    let projetsTel = [];
    let projetsMd = [];
    let projetsLg = [];
    let projetsXl = [];

    //#region Tri des projets par taille d'écran
    for (let i = 0; i < listprojets.length; i += 2) {
        let array = [];
        array.push(listprojets[i]);
        if (listprojets[i + 1] !== undefined) {
            array.push(listprojets[i + 1]);
        }
        projetsTel.push(array);
    }

    for (let i = 0; i < listprojets.length; i += 4) {
        let array = [];
        array.push(listprojets[i]);
        if (listprojets[i + 1] !== undefined) {
            array.push(listprojets[i + 1]);
        }
        if (listprojets[i + 2] !== undefined) {
            array.push(listprojets[i + 2]);
        }
        if (listprojets[i + 3] !== undefined) {
            array.push(listprojets[i + 3]);
        }
        projetsMd.push(array);
    }

    for (let i = 0; i < listprojets.length; i += 6) {
        let array = [];
        array.push(listprojets[i]);
        if (listprojets[i + 1] !== undefined) {
            array.push(listprojets[i + 1]);
        }
        if (listprojets[i + 2] !== undefined) {
            array.push(listprojets[i + 2]);
        }
        if (listprojets[i + 3] !== undefined) {
            array.push(listprojets[i + 3]);
        }
        if (listprojets[i + 4] !== undefined) {
            array.push(listprojets[i + 4]);
        }
        if (listprojets[i + 5] !== undefined) {
            array.push(listprojets[i + 5]);
        }
        projetsLg.push(array);
    }
    for (let i = 0; i < listprojets.length; i += 8) {
        let array = [];
        array.push(listprojets[i]);
        if (listprojets[i + 1] !== undefined) {
            array.push(listprojets[i + 1]);
        }
        if (listprojets[i + 2] !== undefined) {
            array.push(listprojets[i + 2]);
        }
        if (listprojets[i + 3] !== undefined) {
            array.push(listprojets[i + 3]);
        }
        if (listprojets[i + 4] !== undefined) {
            array.push(listprojets[i + 4]);
        }
        if (listprojets[i + 5] !== undefined) {
            array.push(listprojets[i + 5]);
        }
        if (listprojets[i + 6] !== undefined) {
            array.push(listprojets[i + 6]);
        }
        if (listprojets[i + 7] !== undefined) {
            array.push(listprojets[i + 7]);
        }
        projetsXl.push(array);
    }
    //#endregion
    return (
        <section id="projets">
            <div className="md:hidden" key={"Projets taille S"}>
                {projetsTel.map((projets) => (
                    <div className="flex items-center w-full h-screen snap-start flex-col bg-gray-200 dark:bg-[#1d1f23]" key={`${Math.floor(Math.random() * 255)}`}>
                        <div className="w-full h-20" id="vide"></div>
                        <h2 className="my-8 ml-[10%] mr-auto text-3xl lg:text-5xl 2xl:text-7xl font-extralight">Les projets que j'ai réalisé</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mx-5">
                            {projets.map((projet) => (
                                <CarteProjet nom={projet.name} outils={projet.language} lien={projet.listeimage[0]} id={projet.id} key={projet.id + "s"}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden md:block lg:hidden" key={"Projets taille md"}>
                {projetsMd.map((projets) => (
                    <div className="flex items-center w-full h-screen snap-start flex-col bg-gray-200 dark:bg-[#1d1f23]" key={`${Math.floor(Math.random() * 255)}`}>
                        <div className="w-full h-20" id="vide"></div>
                        <h2 className="my-8 ml-[10%] mr-auto text-3xl lg:text-5xl 2xl:text-7xl font-extralight">Les projets que j'ai réalisé</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mx-5">
                            {projets.map((projet) => (
                                <CarteProjet nom={projet.name} outils={projet.language} lien={projet.listeimage[0]} id={projet.id} key={projet.id + "m"} />
                            ))}
                        </div>
                        <div className=" mt-[-500px] mx-5 p-3 rounded-3xl bg-gray-300 md:my-3 dark:bg-dark_background2 md:max-w-5xl 2xl:max-w-7xl">
                            <p className="text-justify text-sm lg:text-xl 2xl:text-3xl"> "Voici quelques projets que j'ai pu réaliser au cours de mes études."</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden lg:block xl:hidden" key={"Projets taille LG"}>
                {projetsLg.map((projets) => (
                    <div className="flex items-center w-full h-screen snap-start flex-col bg-gray-200 dark:bg-[#1d1f23]" key={`${Math.floor(Math.random() * 255)}`}>
                        <div className="w-full h-20" id="vide"></div>
                        <h2 className="my-8 ml-[10%] mr-auto text-3xl lg:text-5xl 2xl:text-7xl font-extralight">Les projets que j'ai réalisé</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mx-5">
                            {projets.map((projet) => (
                                <CarteProjet nom={projet.name} outils={projet.language} lien={projet.listeimage[0]} id={projet.id} key={projet.id +  "l"} />
                            ))}
                        </div>
                        <div className="mb-5 mx-5 p-3 rounded-3xl bg-gray-300 md:my-3 dark:bg-dark_background2 md:max-w-5xl 2xl:max-w-7xl">
                            <p className="text-justify text-sm lg:text-xl 2xl:text-3xl"> "Voici quelques projets que j'ai pu réaliser au cours de mes études."</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden xl:block" key={"Projets taille XL"}>
                {projetsXl.map((projets) => (
                    <div className="flex items-center w-full h-screen snap-start flex-col bg-gray-200 dark:bg-[#1d1f23] space-y-12" key={`${Math.floor(Math.random() * 255)}`}>
                        <div className="w-full h-20" id="vide"></div>
                        <h2 className="my-8 ml-[10%] mr-auto text-3xl lg:text-5xl 2xl:text-7xl font-extralight">Les projets que j'ai réalisé</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mx-5">
                            {projets.map((projet) => (
                                <CarteProjet nom={projet.name} outils={projet.language} lien={projet.listeimage[0]} id={projet.id} key={projet.id + "xl"} />
                            ))}
                        </div>
                        <div className="mb-5 mx-5 p-3 rounded-3xl bg-gray-300 md:my-3 dark:bg-dark_background2 md:max-w-5xl 2xl:max-w-7x">
                            <p className="text-justify text-sm lg:text-xl 2xl:text-3xl"> "Voici quelques projets que j'ai pu réaliser au cours de mes études."</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projets;
