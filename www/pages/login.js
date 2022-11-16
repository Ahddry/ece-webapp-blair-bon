import Footer from "../components/Footer";
import Context from "../components/UserContext";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// Page de connexion
function Login() {
    const [username, setUsername] = useState("");
    const [mdp, setMdp] = useState("");

    let router = useRouter();
    function redirect() {
        router.push("/");
    }

    const { login } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, mdp);
        fetch(`/api/profile/${username}`).then((response) => {
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status Code: " + response.status);
                alert("Utilisateur inconnu");
                return;
            } else {
                response.json().then((data) => {
                    if (data.password === mdp) {
                        console.log(data);
                        login(data);
                        redirect();
                    } else {
                        alert("Mot de passe incorrect");
                    }
                });
            }
        });
    };

    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-gray-200 dark:bg-[#1d1f23]">
            <div className="p-5 mt-12 min-w-[70%]">
                <div className="space-y-6">
                    <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale ">Connexion</h1>
                    <div className="space-y-4">
                        <form className="p-2 bg-background2 dark:bg-dark_background2 rounded-2xl min-w-min space-y-2 xl:p-4 flex-col" onSubmit={handleSubmit}>
                            <p>Nom d'utilisateur</p>
                            <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <p>Mot de passe</p>
                            <input type="password" placeholder="Mot de passe" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
                            <div className="mt-8">
                                <button type="submit" className="bg-gray-200 dark:bg-[#36383c] rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2 xl:p-3">
                                    Se connecter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer className="mx-auto w-full" />
            </div>
        </section>
    );
}

export default Login;