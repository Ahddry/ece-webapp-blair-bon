import Footer from "../components/Footer";
import { ImSad2 } from "react-icons/im";
import Link from "next/link";
import Image from "next/legacy/image";
import Context from "../components/UserContext";
import { useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Context2 from "../components/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

// Page de création d'un nouveau projet

function NouveauProjet() {
    const { user } = useContext(Context);
    const { colour } = useContext(Context2);

    const router = useRouter();

    const Connecte = () => {
        // Ajouter les variables ici

        return (
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className={"pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-" + colour.principale + " dark:text-" + colour.principaleDark}>
                    Création d'un nouveau projet pour {user.firstname}
                </h1>
                <div>{/* AJOUTER CODE ICI */}</div>
            </div>
        );
    };

    const NonConnecte = () => {
        return (
            <div className="flex flex-col items-center justify-center space-y-2 mt-[10%]">
                <ImSad2 className="text-5xl text-gray-400" />
                <h1 className="text-3xl font-bold text-gray-400">Vous n'êtes pas connecté à un comte administrateur !</h1>
                <p className="text-xl text-gray-400">
                    <Link href="/login">
                        <span className="text-lien visited:text-lien_click hover:border-b hover:border-lien hover:visited:border-lien_click cursor-pointer">Connectez</span>
                    </Link>
                    -vous pour accéder à votre profil
                </p>
            </div>
        );
    };

    return (
        <section className="flex items-center justify-between flex-col w-full min-h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5 max-w-full">
                <div>{user ? user.id === "5db7ae9a-72c9-4b30-9d2c-f882ea540279" || user.id === "cbdd2007-e5de-49e4-9c11-ef15c0360c37" ? <Connecte /> : <NonConnecte /> : <NonConnecte />}</div>
            </div>
            <div className="mt-[10%] w-full">
                <Footer />
            </div>
        </section>
    );
}

export default NouveauProjet;
