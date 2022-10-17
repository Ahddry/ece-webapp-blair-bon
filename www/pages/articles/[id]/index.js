import Navbar from "../../navbar";
import Footer from "../../footer";
import { useRouter } from "next/router";
import E404 from "../../404";
import db from "../../../content/db";

// Page affichant un article en particulier
function ArticlePage (){
    const router = useRouter()
    const id = String(router.query.id)
    try{
        let article = db.articles.find(article => article.id === id)
        return (
            <div>
                <Navbar />
                <div id="body">
                    <div className="container">
                        <h1>Article : {article.title}</h1>
                        <div >
                            <p>
                                {article.content}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>Auteur :</b> {article.author}
                            </p>
                            <p>
                                <b>Date :</b> {article.date}
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }catch (e)
    {
        return <E404 />
    }
}
export default ArticlePage