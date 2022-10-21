import Presentation from "./Presentation";

// Portfolio d'Aurélien
function Aurelien({ prenom, nom, age, image, description }) {
    const dataAure = {
        prenom: "Aurélien",
        nom: "Bon",
        age: "21 ans",
        image: "/aurelien.png",
        description: "Bonjour, je m'appelle Aurélien, j'étudie à l'ECE Paris depuis 4ans et adore le développement web. J'aime aussi le sport, la musique et les jeux vidéos.",
    };

    return (
        <div>
            <Presentation {...dataAure} />
        </div>
    );
}

export default Aurelien;
