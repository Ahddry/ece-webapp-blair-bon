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
        const [images, setImages] = useState([]);
        const [test, setTest] = useState(false);
        const [titre, setTitre] = useState("");
        const [description, setDescription] = useState("");
        const [langages, setLangages] = useState([]);
        const [github, setGithub] = useState("");
        const [contributeur, setContributeur] = useState("");
        const handleTest = () => {
            setTest(!test);
        };

        const onChangePicture = (e) => {
            for (const file of e.target.files) {
                const fileType = file["type"];
                const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
                if (validImageTypes.includes(fileType)) {
                    setImages([...images, file]);
                } else {
                    alert("only images accepted");
                }
            }
        };

        const removeImage = (i) => {
            let modifiImage = images;
            modifiImage.splice(i, 1);
            setImages(modifiImage);
            handleTest();
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (titre === "" || description === "" || langages.length === 0 || contributeur === "") {
                alert("Veuillez remplir tous les champs");
                return;
            }
            if (images.length === 0) {
                alert("Veuillez ajouter une image");
                return;
            }
            async function pulishProjet()
            {
                await supabase.from("projets").insert([
                    {
                        name: titre,
                        description: description,
                        language: langages,
                        github: github,
                        participants: contributeur,
                        auteur: user.id,
                    },
                ])
                .then((data) => {
                    console.log(data);
                    router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                })
                const {data,error} = await supabase.from("projets").select("id").match({name: titre,auteur: user.id});
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    console.log(data);
                    let listimagetupush = [];
                    for (let i = 0; i < images.length; i++) {
                        const file = images[i];
                        const { data1, error } = await supabase.storage.from("projetsimage").upload(`${data[0].id}/${images[i].name}`, images[i]);
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(data);
                            listimagetupush.push(`https://mldxyasghmmynjxewzuv.supabase.co/storage/v1/object/public/projetsimage/${data[0].id}/${images[i].name}`);
                        }
                    }
                    await supabase.from("projets").update({listeimage: listimagetupush}).match({id: data[0].id});
                }
            }
            pulishProjet();
        }

    const listLanguage = ["C", "C++", "C#", "CSS", "HTML", "Java", "JavaFX", "JavaScript", "PHP", "Python", "React", "SQL", "Tailwind"];

    const [checkedState, setCheckedState] = useState(new Array(listLanguage.length).fill(false));
    const updateLanguage = (checkboxValues) => {
        let newLangages = [];
        for (let i = 0; i < checkboxValues.length; i++) {
            if (checkboxValues[i]) {
                newLangages.push(listLanguage[i]);
            }
        }
        setLangages(newLangages);
    };
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
        setCheckedState(updatedCheckedState);
        //update total
        updateLanguage(updatedCheckedState);
    };
    const handleCancel = () => {
        if(confirm("Voulez-vous vraiment annuler la création de votre projet ?"))
        {
            router.push("/");
        }
    };

        return (
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className={"pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-" + colour.principale + " dark:text-" + colour.principaleDark}>
                    Création d'un nouveau projet pour {user.firstname}
                </h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)}></input>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <input type="text" placeholder="Contributeur" value={contributeur} onChange={(e) => setContributeur(e.target.value)}></input>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <input type="text" placeholder="Github" value={github} onChange={(e) => setGithub(e.target.value)}></input>
                        </div>
                        <div>
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <input type="file" onChange={onChangePicture} className="" multiple="multiple" name="files[]" />
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                {images.map((file, key) => {
                                    return (
                                        <div key={key} className="overflow-hidden relative">
                                            <i
                                                onClick={() => {
                                                    removeImage(key);
                                                }}
                                                className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                                            >
                                                X
                                            </i>
                                            <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            {listLanguage.map((langage, index) => (
                                <div key={index}>
                                    <input type="checkbox" placeholder="Langage" value={langage} checked={checkedState[index]} onChange={() => handleOnChange(index)}></input>
                                    <label htmlFor={langage}>{langage}</label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center w-full h-full">
                            <button type="submit">Enregister</button>
                            <button type="reset" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
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
