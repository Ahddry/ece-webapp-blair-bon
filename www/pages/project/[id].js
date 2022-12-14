import Footer from "../../components/Footer";
import MiniCarteLangage from "../../components/MiniCarteLangage";
import Image from "next/legacy/image";
import Commentaire from "../../components/Commentaire";
import { supabase } from "../../utils/supabase";
import { useState, useContext, useEffect } from "react";
import Context from "../../components/UserContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";
import Context2 from "../../components/ThemeContext";

function ProjectPage({ projet, commentaire }) {
    const { colour } = useContext(Context2);
    const { user } = useContext(Context);
    const [addComm, setAddComm] = useState(false);
    const [closeBoxe, setCloseBox] = useState(false);
    const getCloseBoxe = (state) => {
        setCloseBox(state);
    };
    useEffect(() => {
        if (closeBoxe) {
            setAddComm(false);
        }
    }, [closeBoxe]);
    return (
        <section className="flex items-center justify-between flex-col w-full min-h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 space-y-5">
                <h1 className={"pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl  text-" + colour.principale + " dark:text-" + colour.principaleDark}>{projet.name}</h1>
                <div className="">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                        {projet.listeimage.map(
                            (image, index) => (
                                index++,
                                (
                                    <div key={image}>
                                        <Image src={image} alt={projet.name + index} width={1000} height={500} />
                                        <p className="legend">{projet.name + " " + index}</p>
                                    </div>
                                )
                            )
                        )}
                    </Carousel>
                </div>
                <h2 className="text-2xl font-semibold">Contributeurs : </h2>
                <div className="mb-5 mx-5 p-3 rounded-3xl bg-background2 md:my-auto lg:mr-8 dark:bg-dark_background2 shadow">
                    <p>
                        {projet.participants.map((contributeur, index) => (
                            <span key={contributeur + index}>
                                {contributeur} {index + 1 < projet.participants.length ? " - " : ""}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row justify-between ">
                    <div className="mb-5 mx-5 p-3 rounded-3xl bg-background2 md:my-auto lg:mr-8 dark:bg-dark_background2 shadow xl:max-w-[60%] 2xl:max-w-[55%] xl:w-full">
                        <p className="text-justify text-sm lg:text-xl 2xl:text-3xl w-full h-max select-none">{projet.description}</p>
                    </div>
                    <div className="xl:w-[40%] 2xl:[45%]">
                        <h2 className="text-2xl font-semibold mb-2">Language utilisés:</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
                            {projet.language.map((lang) => (
                                <MiniCarteLangage key={lang} langage={lang} />
                            ))}
                        </div>
                    </div>
                </div>
                {projet.github ? (
                    <>
                        <h2 className="text-2xl font-semibold">Lien vers le dépôt du code source : </h2>
                        <a href={projet.github} target="_blank" rel="noopener noreferrer" className="text-2xl">
                            <div className="mb-5 mx-5 mt-2 p-3 rounded-3xl bg-background2 lg:mr-8 dark:bg-dark_background2 shadow flex">
                                <FaGithub className="text-5xl" />
                                <p className="text-lien text-justify text-base md:text-lg lg:text-xl 2xl:text-3xl hover:underline m-3">{projet.github}</p>
                            </div>
                        </a>
                    </>
                ) : (
                    <></>
                )}

                {/* Commentaires */}
                <div className="border-t pt-4 pb-4">
                    <h2 className="text-2xl font-semibold">Commentaires :</h2>
                    <ul>
                        {commentaire.map((comments) => (
                            <li key={comments.id}>
                                <Commentaire commentaire={comments} isNew={false} getCloseBoxe={getCloseBoxe} />
                            </li>
                        ))}
                        <li
                            key="last"
                            className="pb-2 mt-4 bg-background2 dark:bg-dark_background2 rounded shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2 xl:p-3"
                        >
                            {user ? (
                                <button className="justify-center w-full transition-transform" onClick={() => setAddComm(!addComm)}>
                                    Ajouter un commentaire
                                </button>
                            ) : (
                                <p className="text-center w-full">Vous devez être connecter pour ajouter un commentaire</p>
                            )}
                            {addComm && (
                                <Commentaire
                                    commentaire={{
                                        id: null,
                                        created_at: null,
                                        projets_id: projet.id,
                                        userid: user.id,
                                        auteur: user.username,
                                        titre: "",
                                        contenue: "",
                                        etoile: 0,
                                    }}
                                    isNew={true}
                                    getCloseBoxe={getCloseBoxe}
                                />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-0 mt-auto w-full">
                <Footer />
            </div>
        </section>
    );
}

export async function getStaticPaths() {
    const { data: listprojet } = await supabase.from("projets").select("id");
    const paths = listprojet.map((projet) => ({
        params: { id: projet.id.toString() },
    }));
    return { paths, fallback: false };
}
export async function getStaticProps({ params: { id } }) {
    const { data: projet } = await supabase.from("projets").select("*").eq("id", id).single();
    const { data: commentaire, error } = await supabase.from("commentaire").select("id,created_at,projets_id,userid,auteur:userid(username),titre,contenue,etoile").eq("projets_id", id);
    return {
        props: {
            projet,
            commentaire,
        },
    };
}
export default ProjectPage;
