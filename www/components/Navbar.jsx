import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Barre de navigation affichée sur toutes les pages
function Navbar() {
    const [nav, setNav] = useState(false);

    const ouvrirNav = () => {
        setNav(!nav);
    };

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    return (
        <div>
            <nav id="BarrePrincipale" className="bg-background2 dark:bg-dark_background2 flex justify-between gap-10 drop-shadow-lg  md:drop-shadow-xl max-h-20 fixed w-full z-10">
                <Image src="/ECE_LOGO.png" alt="Logo" width={130} height={100} className="cursor-pointer" />
                <ul className="hidden md:flex md:items-center md:space-x-5 md:space-x-15 xl:space-x-22 mdfont-medium mx-auto">
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                        <Link href="/#portfolio" className="cursor-pointer ">
                            Portfolios
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/#presentation" className="cursor-pointer ">
                            Présentation
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/#competences" className="cursor-pointer ">
                            Compétences
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/#projets" className="cursor-pointer ">
                            Projets
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/#experiences" className="cursor-pointer ">
                            Expériences
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/contacts" className="cursor-pointer ">
                            Contacts
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/articles" className="cursor-pointer ">
                            Articles
                        </Link>
                    </li>
                </ul>
                <div className="my-auto inline-flex space-x-4 mr-5 ">
                    <button
                        title="Changer de thème de couleur"
                        className="shadow-md focus:ring bg-principale hover:bg-principale_V1 focus:bg-principale_V2 focus:ring-principale dark:bg-dark_secondaire hover:dark:bg-dark_secondaire_V1
                        focus:dark:bg-dark_secondaire_V2 focus:dark:ring-dark_secondaire dark:text-on_background h-10 w-10 m-auto rounded-full text-center cursor-pointer text-2xl"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        ◐
                    </button>
                    <div className="md:hidden bg-gray-200 dark:bg-[#36383c] my-auto rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2" onClick={ouvrirNav}>
                        <HiOutlineMenuAlt3 className=" " size={"25"} />
                    </div>
                </div>
            </nav>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-30" : ""}>
                <div
                    className={
                        nav
                            ? "md:hidden fixed right-0 top-0 w-3/4 sm:w-3/5 h-screen bg-background2 dark:bg-dark_background2 p-10 ease-in-out duration-500 z-50 translate-x-0"
                            : "fixed right-[100%] top-0 p-10 ease-in-out duration-500 opacity-0  translate-x-[1000px]"
                    }
                >
                    <div>
                        <div className="flex justify-between w-full items-center">
                            <Image src="/ECE_LOGO.png" alt="Logo" width={130} height={100} className="cursor-pointer" />
                            <div className="p-3 bg-gray-200 dark:bg-[#36383c] hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background rounded-full shadow-md" onClick={ouvrirNav}>
                                <CgClose className="cursor-pointer" size={"25"} />
                            </div>
                        </div>
                        <p>Développons.</p>
                        <hr className="mb-2 mr-auto w-64 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"></hr>
                        <div className="py-4 flex flex-col">
                            <ul className="space-y-4">
                                <Link href="/#portfolio" className=" cursor-pointer">
                                    <li onClick={(_) => setNav(false)}>Portfolios</li>
                                </Link>
                                <Link href="/#presentation">
                                    <li onClick={(_) => setNav(false)}>Présentation</li>
                                </Link>
                                <Link href="/#competences">
                                    <li onClick={(_) => setNav(false)}>Compétences</li>
                                </Link>
                                <Link href="/#projets">
                                    <li onClick={(_) => setNav(false)}>Projets</li>
                                </Link>
                                <Link href="/#experiences">
                                    <li onClick={(_) => setNav(false)}>Expériences</li>
                                </Link>
                                <hr className="my-4 mr-auto w-64 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"></hr>
                                <Link href="/contacts">
                                    <li onClick={(_) => setNav(false)}>Contact</li>
                                </Link>
                                <Link href="/articles">
                                    <li onClick={(_) => setNav(false)}>Articles</li>
                                </Link>
                                <Link href="/about">
                                    <li onClick={(_) => setNav(false)}>À propos</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
