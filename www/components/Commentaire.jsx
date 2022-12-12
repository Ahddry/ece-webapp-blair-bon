import { useContext, useState } from 'react';
import { supabase } from "../utils/supabase";
import Context from '../components/UserContext';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/legacy/image";

function commentaire({commentaire,isNew,getCloseBoxe})
{
    const { user } = useContext(Context);
    const [causerEdit,getUserEdit] = useState(isNew)
    const[edit,getEdit] = useState(isNew)
    const editcomm = () =>{if(!isNew) getEdit(!edit)}
    const [titre, setTitre] = useState(commentaire.titre);
    const [contenue, setContenue] = useState(commentaire.contenue);
    const [etoile, setEtoile] = useState(commentaire.etoile);
    const [loading, setLoading] = useState(false);
    const [gravatarurl,setGravatrurl] = useState(null);
    const router = useRouter();
    async function getgravurl() //recupere le gravatard de l'utilisateur qui a publier le msg
    {
        let {data: gravatard_url, error} = await supabase.from('comptes').select('gravatar_url').eq('id', commentaire.userid)
        if(error) throw error;
        setGravatrurl(gravatard_url[0].gravatar_url);
        console.log(gravatarurl);
    };
    getgravurl();

    useEffect(()=> //verif si l'utilisateur qui a publier le msg est connecter
    {
        if(user)
        {
            if(user.id==commentaire.userid)
            {
                getUserEdit(true);
            }
        }
    },[])

    const handleSubmit = (e) => { //gestion du form
        e.preventDefault();
        setLoading(true);
        async function updatecomm()
        {
            try
            {
                if(isNew) //si nouveau commentaire
                {
                    await supabase.from('commentaire')
                    .insert({
                        titre: titre ,
                        contenue: contenue ,
                        etoile: etoile ,
                        created_at: new Date().toISOString() ,
                        userid: user.id ,
                        projets_id: commentaire.projets_id,
                })
                    .then((response) => {
                        console.log(response);
                        if(response.error!=null) throw response.error;

                    });
                    setTitre("");
                    setContenue("");
                    setEtoile(0);
                    getCloseBoxe(true);
                    setLoading(false);
                    router.push('/project/'+commentaire.projets_id);
                    alert("Commentaire ajouté");
                }

                else //si modif commmentaire
                {
                    await supabase.from('commentaire')
                    .update({
                        titre: titre ,
                        contenue: contenue,
                        etoile: etoile,
                        created_at: new Date().toISOString()
                    })
                    .eq('id', commentaire.id)
                    .then((response) => {
                        console.log(response);
                        if(response.error!=null) throw response.error;
                    });
                    setLoading(false);
                    alert("Commentaire modifié");
                    commentaire.titre=titre;
                    commentaire.contenue=contenue;
                    commentaire.etoile=etoile;
                    commentaire.created_at=new Date().toISOString();
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                alert("Erreur lors de l'enregistement du commentaire");
                return error;
            } finally {
                editcomm();
            }
        }
        updatecomm();
    };

    return (
        <div>
            {edit ? (
                <div className="commentaire">
                    <div className="commentaire__titre">
                        <form onSubmit={handleSubmit}>
                            <p>Titre</p>
                            <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
                            <p>Contenue</p>
                            <input type="text" placeholder="contenue" value={contenue} onChange={(e) => setContenue(e.target.value)} required />
                            <p>nombre d'etoile (1-5)</p>
                            <input type="number" min="1" max="5" placeholder="etoile" value={etoile} onChange={(e) => setEtoile(e.target.value)} required />
                            <div className="mt-8">
                                <button type="submit">
                                    {loading ? "Chargement..." : "Publier"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ):(
                <div className="commentaire">
                    <div>{
                        gravatarurl ? (
                            <Image src={`https://2.gravatar.com/avatar/${gravatarurl}?d=identicon`} alt={'profilepicture ' + commentaire.username} width={30} height={30}></Image>)
                            : (<></>)
                        }
                    </div>
                    <div className="commentaire__titre">
                        <h3>
                            {commentaire.titre}
                        </h3>
                    </div>
                    <div className="commentaire__auteur">
                        <p>
                            par {commentaire.auteur.username}
                        </p>
                    </div>
                    <div className="commentaire__contend">
                        <p>
                            {commentaire.contenue}
                        </p>
                    </div>
                    <div>
                        à {commentaire.created_at}
                    </div>
                    <div>
                        Etoile: {commentaire.etoile}
                    </div>
                    <div>
                    {
                        causerEdit ? (
                            <div>
                                <button onClick={editcomm}>Modifier</button>
                                <br></br>
                                <button onClick={() => supabase.from('commentaire').delete().eq('id', commentaire.id).then((response) => {
                                    console.log(response);
                                    if(response.error!=null) throw response.error;
                                    alert("Commentaire supprimé");
                                    router.push('/project/'+commentaire.projets_id);
                                    })}>Supprimer</button>
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                    </div>
                </div>
            )
            }
        </div>
    );

}
export default commentaire;