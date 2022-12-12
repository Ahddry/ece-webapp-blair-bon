import Footer from "../../components/Footer";
import Image from "next/legacy/image";
import Commentaire from "../../components/Commentaire"
import { supabase } from "../../utils/supabase";
import { useState , useContext, useEffect } from "react";
import Context from '../../components/UserContext';
import { createContext } from "vm";


function ProjectPage({projet , commentaire})
{
    const { user } = useContext(Context);
    const [addComm,setAddComm] = useState(false);
    const [closeBoxe, setCloseBox] = useState(false);
    const getCloseBoxe = (state)=> {
        setCloseBox(state);
    }
    useEffect(() => {
        if (closeBoxe) {
            setAddComm(false);
        }
    }, [closeBoxe]);
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">Project: {projet.name}</h1>
                <div className="pading-left 2px">
                    {
                        projet.listeimage.map((image,index)=>
                            <Image
                                key={index}
                                src={image}
                                alt={projet.name + index}
                                width={500}
                                height={300}
                                />
                                )

                    }
                </div>
                <div className="text-xl lg:text-lg">
                    <p>{projet.description}</p>
                </div>
                <div>
                    <h2>
                        Language utiliser:
                    </h2>
                    <ul>
                        {projet.language.map((lang) => (
                            <li key={lang}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Commentaire:</h2>
                    <ul>
                        {
                        commentaire.map((comments) => (
                            <li key={comments.id}>
                                <Commentaire commentaire={comments} isNew={false} getCloseBoxe={getCloseBoxe}/>
                            </li>
                        ))
                        }
                        <li key="last">
                        {
                        user ? <button onClick={() => setAddComm(!addComm)}>Ajouter un commentaire</button>
                        : <p>Vous devez être connecter pour ajouter un commentaire</p>
                        }
                        {
                        addComm && <Commentaire commentaire={
                            {
                                id: null,
                                created_at: null,
                                projets_id: projet.id,
                                userid: user.id,
                                auteur: user.username,
                                titre: "",
                                contenue: "",
                                etoile: 0,
                            }
                        } isNew={true} getCloseBoxe={getCloseBoxe}/>}
                        </li>
                    </ul>

                </div>
            </div>
            {/* <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div> */}
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
    const { data: commentaire, error } = await supabase.from("commentaire").select('id,created_at,projets_id,userid,auteur:userid(username),titre,contenue,etoile').eq("projets_id",id);
    return {
        props: {
            projet,
            commentaire,
        },
    };
}
export default ProjectPage;