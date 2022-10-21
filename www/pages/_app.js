import "../styles/globals.css";
import Layout from "../components/Layout";

// Page par défaut de l'application comprenant les éléments communs à toutes les pages
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
