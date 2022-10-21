import Presentation from "./Presentation";

// Portfolio d'Adrien
function Adrien({ prenom, nom, age, image, description }) {
    const dataAdri = {
        prenom: "Adrien",
        nom: "Blair",
        age: "21 ans",
        image: "/adrien.jpg",
        description:
            "Moi c'est Adrien, j'ai 21 ans et je suis étudiant en 4ème année à l'ECE Paris. Je suis passionné par l'informatique et la programmation, j'éprouve aussi un grand intérêt pour le monde de la sécurité informatique.<br></br> Lorsque je ne programme pas, j'aime jouer à des jeux vidéo, regarder des films et séries, et passer du temps avec mes amis.",
    };

    return (
        <div>
            <Presentation {...dataAdri} />
        </div>
    );
}

export default Adrien;
