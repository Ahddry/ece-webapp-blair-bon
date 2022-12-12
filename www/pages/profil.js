import Footer from "../components/Footer";
import { ImSad2 } from "react-icons/im";
import Link from "next/link";
import Context from "../components/UserContext";
import { useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

// Page d'informations du profil

function Profil() {
    const { user } = useContext(Context);
    const [admin, setAdmin] = useState(false);
    const [edit, setEdit] = useState(false);

    const Connecte = () => {
        const role = user.admin ? "Administrateur" : "Visiteur";
        const [username, setUsername] = useState("");
        const [mdp, setMdp] = useState("");
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [loading, setLoading] = useState(false);
        const [tryMdp, setTryMdp] = useState(false);

        function editAccount() {
            setEdit(true);
            setUsername(user.username);
            setFirstname(user.firstname);
            setLastname(user.lastname);
            setEmail(user.email);
            setMdp("");
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            try {
                setLoading(true);
                let ok = true;
                setEmail(email.toLowerCase());
                async function createCompte() {
                    if (username != user.username && username != "") {
                        const { data, error } = await supabase.from("comptes").select("*").eq("username", username).single();
                        if (data !== null) {
                            alert("Ce nom d'utilisateur existe déjà");
                            setTryMdp(true);
                            ok = false;
                            if (error) throw error;
                        }
                    }
                    if (email != user.email && email != "") {
                        const { data2, error2 } = await supabase.from("comptes").select("*").eq("email", email).single();
                        if (!(data2 === null || data2 === undefined)) {
                            alert("Cette adresse email est déjà utilisée");
                            ok = false;
                            if (error2) throw error2;
                        }
                    }
                    if (!ok) return;

                    if (email != user.email && email != "") {
                        //!Ca bug là
                        const { update, error } = await supabase.auth.updateUser({ email: email });
                        console.log(update);
                        await supabase.from("comptes").update({ email: email }).eq("id", user.id);
                        user.email = email;
                        if (error) throw error;
                    }

                    if (mdp != null && mdp != "" && mdp != user.password) {
                        //!Ca bug là aussi
                        const { user, error } = await supabase.auth.updateUser({ password: mdp });
                        await supabase.from("comptes").update({ password: mdp }).eq("id", user.id);
                        user.password = mdp;
                        if (error) throw error;
                    }
                    if (username != user.username && username != "") {
                        await supabase.from("comptes").update({ username: username }).eq("id", user.id);
                        user.username = username;
                    }
                    if (firstname != user.firstname && firstname != "") {
                        await supabase.from("comptes").update({ firstname: firstname }).eq("id", user.id);
                        user.firstname = firstname;
                    }
                    if (lastname != user.lastname && lastname != "") {
                        const res = await supabase.from("comptes").update({ lastname: lastname }).eq("id", user.id);
                        user.lastname = lastname;
                    }

                    if (ok) {
                        alert("Vos informations ont bien été modifiées");
                    }
                }
                createCompte();
            } catch (error) {
                console.log(error);
                alert("Erreur lors de la modification des informations de votre compte");
            } finally {
                setLoading(false);
            }
        };
        setAdmin(user.admin);
        return (
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">Mon profil</h1>
                <div className="text-xl lg:text-lg">
                    <p>
                        <span className="font-bold">Nom d'utilisateur : </span> {user.username} <br />
                        <span className="font-bold">Nom : </span> {user.lastname} <br />
                        <span className="font-bold"> Prénom : </span> {user.firstname} <br />
                        <span className="font-bold"> Email : </span> {user.email} <br />
                        <span className="font-bold"> Rôle : </span> {role}
                        <br />
                    </p>
                    <button
                        className="mt-6 p-4 rounded-2xl border-2 border-erreur dark:border-dark_erreur text-erreur dark:text-dark_erreur hover:bg-erreur hover:text-white hover:dark:bg-dark_erreur dark:hover:text-white"
                        onClick={editAccount}
                    >
                        Modifier mes informations
                    </button>
                </div>
                {edit ? (
                    <div>
                        <form className="p-2 bg-background2 dark:bg-dark_background2 rounded-2xl min-w-min space-y-2 xl:p-4 flex-col" onSubmit={handleSubmit}>
                            <p>Nouveau Nom d'utilisateur</p>
                            <input
                                type="text"
                                placeholder="Nom d'utilisateur"
                                className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p>Nouveau Prénom</p>
                            <input
                                type="text"
                                placeholder="Prénom"
                                className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <p>Nouveau Nom</p>
                            <input type="text" placeholder="Nom" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            <p>Nouvel E-mail</p>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                title="Veuillez rentrer une adresse mail valide."
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"
                            />
                            <p>Nouveau Mot de passe</p>
                            <input type="password" placeholder="Mot de passe" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="bg-gray-200 dark:bg-[#36383c] rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2 xl:p-3"
                                >
                                    {loading ? "Chargement..." : "Modifier mes informations"}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <></>
                )}
                {admin ? <Messagerie /> : <></>}
            </div>
        );
    };

    const NonConnecte = () => {
        return (
            <div className="flex flex-col items-center justify-center space-y-2 mt-[10%]">
                <ImSad2 className="text-5xl text-gray-400" />
                <h1 className="text-3xl font-bold text-gray-400">Vous n'êtes pas connecté</h1>
                <p className="text-xl text-gray-400">
                    <Link href="/login">
                        <span className="text-lien visited:text-lien_click hover:border-b hover:border-lien hover:visited:border-lien_click cursor-pointer">Connectez</span>
                    </Link>
                    -vous pour accéder à votre profil
                </p>
            </div>
        );
    };

    const Messagerie = () => {
        const [messages, setMessages] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetchMessages();
        }, []);

        async function fetchMessages() {
            try {
                setLoading(true);
                setError(null);
                const messages = await supabase.from("contacter").select("*").eq("destinataire", user.id);
                setMessages(messages.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        return (
            <div>
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">Messagerie</h1>
                <div className="my-8" />
                <div className="rounded-xl overflow-auto shadow mb-24">
                    <table className="w-full p-3 bg-gray-100 dark:bg-dark_background2">
                        <thead className="bg-gray-200 dark:bg-gray-800 border-b-2 border-gray-300 ">
                            <tr>
                                <th className="p-3 text-sm font-se tracking-wide text-left">De</th>
                                <th className="p-3 text-sm font-se tracking-wide text-left">Objet</th>
                                <th className="p-3 text-sm font-se tracking-wide text-left">Message</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td className="p-3 text-sm whitespace-nowrap">{message.email}</td>
                                    <td className="p-3 text-sm whitespace-nowrap">{message.sujet}</td>
                                    <td className="p-3 text-sm whitespace-nowrap">{message.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <section className="flex items-center justify-between flex-col w-full min-h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5 max-w-full">
                <div>{user ? <Connecte /> : <NonConnecte />}</div>
            </div>
            <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div>
        </section>
    );
}

export default Profil;
