import { useState } from "react";
import { Adrien } from "../content/contacts/Adrien.json";
import { Aurelien } from "../content/contacts/Aurelien.json";

// Formulaire de contact
function Contacter({ user }) {
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (data) => {
        data.preventDefault();
        console.log(email, sujet, message, user);
        const data2 = new FormData();
        data2.append("email", email);
        data2.append("sujet", sujet);
        data2.append("message", message);
        data2.append("user", user);
        console.log(data2);
        for (const [key, value] of data2) {
            console.log(key, value);
        }

        /*
        let file;

        switch (user) {
            case "Adrien":
                file = Adrien;
                break;
            case "Aurelien":
                file = Aurelien;
                break;
            default:
                break;
        }

        const contact = {
            email: email,
            sujet: sujet,
            message: message,
            date: new Date().toLocaleString(),
        };
        file.push(contact);

        fs.writeFileSync(`../content/contacts/${user}.json`, JSON.stringify(file));*/
    };

    return (
        <section className="flex items-center w-full h-screen snap-start flex-col bg-gray-200 dark:bg-[#1d1f23] space-y-16 lg:space-y-24 xl:space-y-32 2xl:space-y-48 " id="contacter">
            <h2 className="my-8 mt-28 ml-[10%] mr-auto text-3xl lg:text-5xl 2xl:text-7xl font-extralight">Me contacter</h2>
            <div className="mr-auto my-auto ml-[10%] lg:ml-[20%] text-lg lg:text-2xl xl:text-3xl w-[80%] lg:w-[60%]">
                <form className="p-2 bg-background2 dark:bg-dark_background2 rounded-2xl min-w-min space-y-2 xl:p-4 flex-col" onSubmit={onSubmit}>
                    <p>Votre email</p>
                    <input
                        type="text"
                        placeholder="email@exemple.fr"
                        className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        title="Veuillez rentrer une adresse mail valide."
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                    <p>Sujet de votre message </p>
                    <input type="text" placeholder="Sujet" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" value={sujet} onChange={(e) => setSujet(e.target.value)} required />
                    <p>Votre message</p>
                    <textarea placeholder="Votre message" className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full min-h-[42px] max-h-64 lg:h-36" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <div className="mt-8">
                        <button type="submit" className="bg-gray-200 dark:bg-[#36383c] rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-[#4F4F4F] active:bg-background dark:active:bg-dark_background cursor-pointer p-2 xl:p-3">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacter;
