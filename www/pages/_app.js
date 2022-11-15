import "../styles/globals.css";
import Layout from "../components/Layout";
import { UserContext } from "../components/UserContext";
import { ThemeProvider } from "next-themes";

// Page par défaut de l'application comprenant les éléments communs à toutes les pages
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <UserContext>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserContext>
        </ThemeProvider>
    );
}

export default MyApp;
