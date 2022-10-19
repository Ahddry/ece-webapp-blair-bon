import "../styles/globals.css";

// Page par défaut de l'application comprenant les éléments communs à toutes les pages
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
