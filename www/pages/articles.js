import Navbar from "./navbar";
import Footer from "./footer";
import db from "../content/db";
const parse = require('html-react-parser');

// Page affichant la liste des articles
function Articles() {
    let liste = ``;
    for (var article in db.articles)
    {
        liste += `<a href=http://localhost:3000/articles/${db.articles[article].id}>${db.articles[article].title}</a> par ${db.articles[article].author} le ${db.articles[article].date}<br />`
    }
    return (
      <div>
        <Navbar />
        <div id="body">
            <div className="container">
                <h1>Liste des articles</h1>
                <div >
                    <p>
                        {parse(liste)}
                    </p>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
    }

export default Articles