import Image from "next/image";
import Link from "next/link";

// Barre de navigation affichée sur toutes les pages
function Navbar() {
    return (
        <div>
            <nav id="BarrePrincipale" className="bg-background2 dark:bg-dark_background2 flex justify-between gap-10 drop-shadow-lg  md:drop-shadow-xl max-h-20 fixed w-full z-10">
                <Link href="#" className="cursor-pointer">
                    <Image src="/ECE_LOGO.png" alt="Logo" width={130} height={100} className="cursor-pointer" />
                </Link>
                <ul className="flex items-center space-x-5 md:space-x-15 xl:space-x-22 font-medium mx-auto">
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="#portfolio" className="cursor-pointer ">
                            Portfolios
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="#" className="cursor-pointer ">
                            Projets
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="#" className="cursor-pointer ">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="my-auto">
                    <button
                        title="Changer de thème de couleur"
                        className="mr-10 focus:ring bg-principale hover:bg-principale_V1 focus:bg-principale_V2 focus:ring-principale dark:bg-dark_secondaire hover:dark:bg-dark_secondaire_V1
                        focus:dark:bg-dark_secondaire_V2 focus:dark:ring-dark_secondaire dark:text-on_background h-10 w-10 m-auto rounded-full text-center cursor-pointer text-2xl"
                    >
                        ◐
                    </button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
