import Image from "next/image";
import Link from "next/link";
import Context from "./UserContext";
import { useContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from '../components/Account'

// Barre de navigation affichée sur toutes les pages
function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const ouvrirDropdown = () => setDropdown(!dropdown);

    const [profil, setProfil] = useState(false);
    const ouvrirProfil = () => setProfil(!profil);

    const [nav, setNav] = useState(false);

    const ouvrirNav = () => setNav(!nav);

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    const { user } = useContext(Context);
    const Deco = () => {
        const { user, logout } = useContext(Context);
        return (
            <button
                className="flex flex-row "
                onClick={() => {
                    ouvrirProfil();
                    logout();
                }}
            >
                <SlLogout className="w-6 h-6 mr-2" />
                Se déconnecter
            </button>
        );
    };

    //!SUPABASE
    const session = useSession();
    const supabase = useSupabaseClient();

    return (
        <div>
            <nav
                id="BarrePrincipale"
                className="bg-background2 dark:bg-dark_background2 flex justify-between gap-10 drop-shadow-lg  md:drop-shadow-xl max-h-20 fixed w-full z-10"
            >
                <img
                    src="/ECE_LOGO.png"
                    alt="Logo"
                    width={171}
                    height={88.5}
                    className="cursor-pointer max-w-[171px]"
                />
                <ul className="hidden md:flex md:items-center md:space-x-5 mx-auto">
                    <li className=" md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                        <button
                            className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                            onClick={ouvrirDropdown}
                        >
                            Portfolios
                        </button>
                        {dropdown ? (
                            <ul className="hidden md:block 2xl:hidden flex-col fixed mt-4 p-4 rounded-b-xl -ml-4 bg-background2 dark:bg-dark_background2 space-y-3 shadow-md">
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#portfolio"
                                        className="cursor-pointer"
                                    >
                                        Profils
                                    </Link>
                                </li>
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#presentation"
                                        className="cursor-pointer "
                                    >
                                        Présentation
                                    </Link>
                                </li>
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#competences"
                                        className="cursor-pointer "
                                    >
                                        Compétences
                                    </Link>
                                </li>
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#projets"
                                        className="cursor-pointer "
                                    >
                                        Projets
                                    </Link>
                                </li>
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#experiences"
                                        className="cursor-pointer "
                                    >
                                        Expériences
                                    </Link>
                                </li>
                                <li
                                    className="hidden md:block 2xl:hidden hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1"
                                    onClick={ouvrirDropdown}
                                >
                                    <Link
                                        href="/#contacter"
                                        className="cursor-pointer "
                                    >
                                        Me contacter
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <div className="hidden" />
                        )}
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 hidden 2xl:block 2xl:text-4xl ">
                        <Link href="/#portfolio" className="cursor-pointer">
                            Portfolios
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1  hidden 2xl:block 2xl:text-4xl">
                        <Link href="/#presentation" className="cursor-pointer ">
                            Présentation
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 hidden 2xl:block 2xl:text-4xl">
                        <Link href="/#competences" className="cursor-pointer ">
                            Compétences
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 hidden 2xl:block 2xl:text-4xl">
                        <Link href="/#projets" className="cursor-pointer ">
                            Projets
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 hidden 2xl:block 2xl:text-4xl">
                        <Link href="/#experiences" className="cursor-pointer ">
                            Expériences
                        </Link>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <div className="hidden 2xl:block">
                            <Link href="/#contacter" className="cursor-pointer">
                                Contacts
                            </Link>
                        </div>
                        <div className="2xl:hidden">
                            <Link
                                href="/contacts"
                                className="cursor-pointer 2xl:hidden"
                            >
                                Contacts
                            </Link>
                        </div>
                    </li>
                    <li className="hover:text-principale active:text-principale_V1 hover:dark:text-dark_secondaire active:dark:text-dark_secondaire_V1 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <Link href="/articles" className="cursor-pointer ">
                            Articles
                        </Link>
                    </li>
                </ul>
                <div className="my-auto inline-flex space-x-4 mr-5 ">
                    <div>
                        {user ? (
                            <div>
                                <button
                                    className="flex flex-row justify-end items-center mt-2"
                                    onClick={ouvrirProfil}
                                >
                                    <div className="flex flex-row justify-center items-center cursor-pointer hover:text-principale dark:hover:text-dark_secondaire">
                                        <FaUser className="w-6 h-6 mr-2" />
                                        <p className="hidden sm:block text-sm">
                                            {user.firstname} {user.name}
                                        </p>
                                    </div>
                                </button>
                                {profil ? (
                                    <ul className=" flex-col fixed mt-4 rounded-b-xl -ml-4 bg-background2 dark:bg-dark_background2 space-y-3 shadow-md">
                                        <li className="p-4 mt-2 sm:hidden flex flex-row">
                                            <FaUser className="w-6 h-6 mr-2" />
                                            <p className="text-sm">
                                                {user.firstname} {user.name}
                                            </p>
                                        </li>
                                        <li className="p-4 text-erreur dark:text-dark_erreur hover:bg-erreur hover:text-dark_on_background dark:hover:bg-dark_erreur dark:hover:text-dark_on_background2 hover:rounded-b-xl">
                                            <Deco />
                                        </li>
                                    </ul>
                                ) : (
                                    <div className="hidden" />
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-row justify-end items-center mt-2">
                                <Link href="/login">
                                    <div className="flex flex-row justify-center items-center cursor-pointer hover:text-principale dark:hover:text-dark_secondaire">
                                        <FaUserPlus className="w-6 h-6 mr-2" />
                                        <p className="hidden sm:block text-sm">
                                            S'identifier
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                    <button
                        title="Changer de thème de couleur"
                        className="shadow-md focus:ring bg-principale hover:bg-principale_V1 focus:bg-principale_V2 focus:ring-principale dark:bg-dark_secondaire hover:dark:bg-dark_secondaire_V1
                        focus:dark:bg-dark_secondaire_V2 focus:dark:ring-dark_secondaire dark:text-on_background h-10 w-10 m-auto rounded-full text-center cursor-pointer text-2xl"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        ◐
                    </button>
                    <div
                        className="md:hidden bg-gray-200 dark:bg-[#36383c] my-auto rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2"
                        onClick={ouvrirNav}
                    >
                        <HiOutlineMenuAlt3 className=" " size={"25"} />
                    </div>
                </div>
            </nav>
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-30"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "md:hidden fixed right-0 top-0 w-3/4 sm:w-3/5 h-screen bg-background2 dark:bg-dark_background2 p-10 ease-in-out duration-500 z-50 translate-x-0"
                            : "fixed right-[100%] top-0 p-10 ease-in-out duration-500 opacity-0  translate-x-[1000px]"
                    }
                >
                    <div>
                        <div className="flex justify-between w-full items-center">
                            <Image
                                src="/ECE_LOGO.png"
                                alt="Logo"
                                width={130}
                                height={100}
                                className="cursor-pointer"
                            />
                            <div
                                className="p-3 bg-gray-200 dark:bg-[#36383c] hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background rounded-full shadow-md"
                                onClick={ouvrirNav}
                            >
                                <CgClose
                                    className="cursor-pointer"
                                    size={"25"}
                                />
                            </div>
                        </div>
                        <p>Développons.</p>
                        <hr className="mb-2 mr-auto w-64 h-1 bg-gray-300 rounded border-0 dark:bg-gray-700"></hr>
                        <div className="py-4 flex flex-col md:hidden">
                            <ul className="space-y-4">
                                <Link href="/#portfolio">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Portfolios
                                    </li>
                                </Link>
                                <Link href="/#presentation">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Présentation
                                    </li>
                                </Link>
                                <Link href="/#competences">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Compétences
                                    </li>
                                </Link>
                                <Link href="/#projets">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Projets
                                    </li>
                                </Link>
                                <Link href="/#experiences">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Expériences
                                    </li>
                                </Link>
                                <Link href="/#contacter">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Me contacter
                                    </li>
                                </Link>
                            </ul>
                            <hr className="my-4 mr-auto w-64 h-1 bg-gray-300 rounded border-0 dark:bg-gray-700"></hr>
                            <ul className="space-y-4">
                                <Link href="/contacts">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Contact
                                    </li>
                                </Link>
                                <Link href="/articles">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        Articles
                                    </li>
                                </Link>
                                <Link href="/about">
                                    <li
                                        onClick={(_) => setNav(false)}
                                        className="cursor-pointer"
                                    >
                                        À propos
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bg-red-800 mt-[10%] ml-[10%] z-50">
                <div
                    className="container"
                    style={{ padding: "50px 0 100px 0" }}
                >
                    {!session ? (
                        <Auth
                            supabaseClient={supabase}
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                        />
                    ) : (
                        <Account session={session} />
                    )}
                </div>
            </div>
        </div>
    );
}
export default Navbar;
