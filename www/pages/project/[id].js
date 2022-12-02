import Footer from "../../components/Footer";
import Image from "next/legacy/image";
import { supabase } from "../../utils/supabase";


function ProjectPage({projet})
{
    console.log(projet);
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">Project: {projet.name}</h1>
                <div className="pading-left 2px">
                    {
                    /* {
                        projet.Image.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={projet.Name + index}
                                width={500}
                                height={500}
                            />
                        ))
                    } */
                    }
                </div>
                <div className="text-xl lg:text-lg">
                    <p>{projet.description}</p>
                </div>
                <div>
                    <h2>
                        Language utiliser:
                    </h2>
                    <ul>
                        {projet.language.map((lang) => (
                            <li key={lang}>
                                <Image src={"/languages/"+lang+".png"} alt={lang} width={32} height={32} />
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bottom-0 mt-auto fixed w-full">
                <Footer />
            </div>
        </section>
    );
}

export async function getStaticPaths() {
    const { data: listprojet } = await supabase.from("projets").select("id");
    const paths = listprojet.map((projet) => ({
        params: { id: projet.id.toString() },
    }));
    return { paths, fallback: false };
}
export async function getStaticProps({ params: { id } }) {
    const { data: projet } = await supabase.from("projets").select("*").eq("id", id).single();
    return {
        props: {
            projet,
        },
    };
}
export default ProjectPage;