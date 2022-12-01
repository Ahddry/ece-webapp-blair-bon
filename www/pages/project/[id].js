import Footer from "../../components/Footer";
import Image from "next/legacy/image";
import db from "../../content/db";

function ProjectPage({project})
{
    return (
        <section className="flex items-center justify-between flex-col w-full h-screen  bg-background dark:bg-dark_background">
            <div className="p-5 mt-12 min-w-[70%] space-y-5">
                <h1 className="pt-8 text-3xl font-extralight lg:text-5xl 2xl:text-7xl text-principale">Project: {project.Name}</h1>
                <div className="pading-left 2px">
                    {
                        project.Image.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={project.Name + index}
                                width={500}
                                height={500}
                            />
                        ))
                    }
                </div>
                <div className="text-xl lg:text-lg">
                    <p>{project.Description}</p>
                </div>
                <div>
                    <h2>
                        Language utiliser:
                    </h2>
                    <ul>
                        {project.Language.map((lang) => (
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
    const listprojects = db.Project
    const paths = listprojects.map((project) => ({
        params: { id: project.id.toString() },
    }));

    return { paths, fallback: false };
}
export async function getStaticProps({ params: { id } }) {
    const project = db.Project.find((project) => project.id === parseInt(id))
    return {
        props: {
            project,
        },
    };
}
export default ProjectPage;