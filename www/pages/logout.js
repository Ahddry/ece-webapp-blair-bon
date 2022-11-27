import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase";

// Page de déconnexion

function Logout() {
    const router = useRouter();

    useEffect(() => {
        supabase.auth.signOut();
        router.push("/");
    }, []);

    return <p>Logging out</p>;
}

export default Logout;