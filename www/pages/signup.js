import Footer from "../components/Footer";
import Context from "../components/UserContext";
import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// Page d'inscription
function SignUp() {
    const [username, setUsername] = useState("");
    const [mdp, setMdp] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [tryMdp, setTryMdp] = useState(false);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let ok = true;
            email = email.toLowerCase();
            async function createCompte() {
                const { data, error } = await supabase.from("comptes").select("*").eq("username", username).single();
                if (data !== null) {
                    alert("Ce nom d'utilisateur existe déjà");
                    setTryMdp(true);
                    ok = false;
                    if (error) throw error;
                }
                const { data2, error2 } = await supabase.from("comptes").select("*").eq("email", email).single();
                if (!(data2 === null || data2 === undefined)) {
                    alert("Cette adresse email est déjà utilisée");
                    ok = false;
                    if (error2) throw error2;
                }
                if (!ok) return;
                await supabase.auth.signUp({ email, password: mdp }).then(({ data, error }) => {
                    if (error) {
                        console.log(error);
                        ok = false;
                        alert("Erreur lors de l'inscription");
                    }
                });
                let user = await (await supabase.auth.getUser()).data.user;

                let { error3 } = await supabase.from("comptes").insert({
                    id: user.id,
                    created_at: user.created_at,
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: mdp,
                    is_admin: false,
                });
                if (error3) throw error3;
                else if (ok) {
                    alert("Inscription réussie");
                    router.push("/");
                }
            }
            createCompte();
        } catch (error) {
            console.log(error);
            alert("Erreur lors de l'inscription");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-gray-200 dark:bg-[#1d1f23]">
            <div className="p-5 mt-12 min-w-[70%]">
                <div className="space-y-6">
                    <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale ">Inscription</h1>
                    <div className="space-y-4">
                        <form className="p-2 bg-background2 dark:bg-dark_background2 rounded-2xl min-w-min space-y-2 xl:p-4 flex-col" onSubmit={handleSubmit}>
                            <p>Nom d'utilisateur</p>
                            <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <p>Prénom</p>
                            <input type="text" placeholder="Prénom" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                            <p>Nom</p>
                            <input type="text" placeholder="Nom" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                            <p>E-mail</p>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                title="Veuillez rentrer une adresse mail valide."
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"
                            />
                            <p>Mot de passe</p>
                            <input type="password" placeholder="Mot de passe" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
                            <div className="mt-8">
                                <button type="submit" className="bg-gray-200 dark:bg-[#36383c] rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2 xl:p-3">
                                    {loading ? "Chargement..." : "S'inscrire"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    {tryMdp ? (
                        <p className="ml-5 mt-3">
                            Ce nom d'utilisateur existe déjà, souhaitez-vous plutôt vous{" "}
                            <Link href="/login">
                                <span className="text-lien visited:text-lien_click hover:border-b hover:border-lien hover:visited:border-lien_click cursor-pointer">connecter</span>
                            </Link>{" "}
                            ?
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="w-full">
                <Footer className="mx-auto w-full" />
            </div>
        </section>
    );
}

export default SignUp;
