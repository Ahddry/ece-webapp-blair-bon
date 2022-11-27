import Footer from '../components/Footer';
import { ImSad2 } from 'react-icons/im';
import Link from 'next/link';
import Context from '../components/UserContext';
import { useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

// Page d'informations du profil

function Profil() {
    const { user } = useContex;
    const [admin, setAdmin] = useState(false);

    const Connecte = () => {
        const role = user.admin ? 'Administrateur' : 'Visiteur';
        setAdmin(user.admin);
        return (
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">
                    Mon profil
                </h1>
                <div className="text-xl lg:text-lg">
                    <p>
                        <span className="font-bold">Nom d'utilisateur : </span>{' '}
                        {user.username} <br />
                        <span className="font-bold">Nom : </span>{' '}
                        {user.lastname} <br />
                        <span className="font-bold"> Prénom : </span>{' '}
                        {user.firstname} <br />
                        <span className="font-bold"> Email : </span>{' '}
                        {user.email} <br />
                        <span className="font-bold"> Rôle : </span> {role}
                        <br />
                    </p>
                </div>
                {admin ? <Messagerie /> : <></>}
            </div>
        );
    };

    const NonConnecte = () => {
        return (
            <div className="flex flex-col items-center justify-center space-y-2 mt-[10%]">
                <ImSad2 className="text-5xl text-gray-400" />
                <h1 className="text-3xl font-bold text-gray-400">
                    Vous n'êtes pas connecté
                </h1>
                <p className="text-xl text-gray-400">
                    <Link href="/login">
                        <span className="text-lien visited:text-lien_click hover:border-b hover:border-lien hover:visited:border-lien_click cursor-pointer">
                            Connectez
                        </span>
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
                const messages = await supabase
                    .from('contacter')
                    .select('*')
                    .eq('destinataire', user.id);
                setMessages(messages.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        return (
            <div>
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">
                    Messagerie
                </h1>
                <div className="my-8" />
                <div className="rounded-xl overflow-auto shadow mb-24">
                    <table className="w-full p-3 bg-gray-100 dark:bg-dark_background2">
                        <thead className="bg-gray-200 dark:bg-gray-800 border-b-2 border-gray-300 ">
                            <tr>
                                <th className="p-3 text-sm font-se tracking-wide text-left">
                                    De
                                </th>
                                <th className="p-3 text-sm font-se tracking-wide text-left">
                                    Objet
                                </th>
                                <th className="p-3 text-sm font-se tracking-wide text-left">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td className="p-3 text-sm whitespace-nowrap">
                                        {message.email}
                                    </td>
                                    <td className="p-3 text-sm whitespace-nowrap">
                                        {message.sujet}
                                    </td>
                                    <td className="p-3 text-sm whitespace-nowrap">
                                        {message.message}
                                    </td>
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
