import Footer from "../../components/Footer";
import db from "../../content/db";
import { useRouter } from "next/router";

// Page affichant un article en particulier
function ArticlePage({ article }) {
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">
                    Article : {article.title}
                </h1>
                <div className="text-xs text-right">
                    <p>
                        <b>Auteur :</b> {article.author} <b>Date :</b>{" "}
                        {article.date}
                    </p>
                </div>
                <div className="text-xl lg:text-lg">
                    <p>{article.content}</p>
                </div>
            </div>
            <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div>
        </section>
    );
}
export async function getStaticPaths() {
    const paths = db.articles.map((article) => ({
        params: { id: article.id },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const article = db.articles.find((article) => article.id === params.id);
    return {
        props: {
            article,
        },
    };
}
export default ArticlePage;
