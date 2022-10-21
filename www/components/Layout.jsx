import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Layout d'une page
function Layout({ children }) {
    return (
        <div className="bg-background dark:bg-dark_background text-on_background dark:text-dark_on_background min-h-screen flex flex-col justify-between">
            <header>
                <Navbar />
            </header>
            <main className="">{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
export default Layout;
