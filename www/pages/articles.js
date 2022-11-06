import Footer from "../components/Footer";
import db from "../content/db";
const parse = require("html-react-parser");
import env from "../next.config";

// Page affichant la liste des articles



function Articles({listarticles}) {
    let liste = ``;
    for (var article in listarticles) {
        liste += `<li><a href=http://localhost:3000/articles/${listarticles[article].id} className=" text-lien visited:text-lien_click cursor-pointer">${listarticles[article].title}</a> par ${listarticles[article].author} le ${listarticles[article].date}</li>`;
    }
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale ">Liste des articles</h1>
                <ul className="ml-5 list-disc">
                    {
                        parse(liste)
                    }
                </ul>
            </div>
            <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div>
        </section>
    );
}
export async function getStaticProps() {
    const listarticles = db.articles
    return {
        props: {
            listarticles,
        },
    };
}

export default Articles;
