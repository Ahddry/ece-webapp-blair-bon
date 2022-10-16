import Navbar from "./navbar";
import Footer from "./footer";
import db from "../content/db";
const parse = require('html-react-parser');
// Page affichant les articles
function Articles() {
    let liste = ``;
    let i = 1
    for (var article in db.articles)
    {
        liste += `<a href=http://localhost:3000/articles/${db.articles[article].id}>${db.articles[article].title}</a> by ${db.articles[article].author} on ${db.articles[article].date}<br />`
    }
    return (
      <div>
        <Navbar />
        <div id="body">
            <div className="container">
                <h1>Articles</h1>
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