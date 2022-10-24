import Image from "next/image";
import Link from "next/link";

// Projets réalisés par une personne
function CarteProjet({ nom, outils, lien }) {
    return (
        <div className=" relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 bg-background2 dark:bg-dark_background2 group hover:bg-gradient-to-r from-dark_secondaire to-principale max-w-2xl">
            <div className="relative w-[400px] h-[225px]">
                <Image src={lien} layout="fill" alt={nom + " logo"} className="rounded-xl group-hover:opacity-10" />
            </div>
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white font-bold tracking-wider text-center">{nom}</h3>
                <p className="pb-4 pt-2 text-white text-center">{outils}</p>
                <Link href="/">
                    <p
                        className="text-center p-3 rounded-lg bg-white dark:bg-dark_background2 text-on_background2 dark:text-dark_on_background2 hover:dark:bg-gradient-to-r from-dark_principale to-dark_principale_V1
                        hover:text-lien dark:hover:text-jaune hover:scale-105 ease-in duration-300 font-bold text-lg cursor-pointer"
                    >
                        Plus d'informations
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default CarteProjet;