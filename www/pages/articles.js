import Footer from "../components/Footer";
import db from "../content/db";
const parse = require("html-react-parser");

// Page affichant la liste des articles
function Articles() {
    let liste = ``;
    for (var article in db.articles) {
        liste += `<a href=http://localhost:3000/articles/${db.articles[article].id}>${db.articles[article].title}</a> par ${db.articles[article].author} le ${db.articles[article].date}<br />`;
    }
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale ">Liste des articles</h1>
                <ul className="ml-5 list-disc">
                    {db.articles.map((article) => (
                        <li>
                            <a href={article.id} className=" text-lien visited:text-lien_click cursor-pointer" key={article.id}>
                                {article.title}
                            </a>{" "}
                            par {article.author} le {article.date}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div>
        </section>
    );
}

export default Articles;
