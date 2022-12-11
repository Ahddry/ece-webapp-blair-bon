import { useContext, useState } from 'react';
import { supabase } from "../utils/supabase";
import Context from '../components/UserContext';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

function commentaire({commentaire,isNew})
{
    const { user } = useContext(Context);
    const [canuserEdit,getUserEdit] = useState(isNew)
    const[edit,getEdit] = useState(isNew)
    const editcomm = () =>{if(!isNew) getEdit(!edit)}
    const [titre, setTitre] = useState(commentaire.titre);
    const [contenue, setContenue] = useState(commentaire.contenue);
    const [etoile, setEtoile] = useState(commentaire.etoile);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(()=>
    {
        if(user)
        {
            if(user.id==commentaire.userid)
            {
                getUserEdit(true);
            }
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        async function updatecomm()
        {
            try
            {
                if(isNew)
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
                    alert("Commentaire ajouté");
                    commentaire.titre="";
                    commentaire.contenue="";
                    commentaire.etoile=0;
                    router.push('/project/'+commentaire.projets_id);
                }
                else
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
                    alert("Commentaire modifié");
                    commentaire.titre=titre;
                    commentaire.contenue=contenue;
                    commentaire.etoile=etoile;
                    commentaire.created_at=new Date().toISOString();
                }
            } catch (error) {
                console.log(error);
                alert("Erreur lors de l'enregistement du commentaire");
                return error;
            } finally {
                setLoading(false);
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
                    <div className="commentaire__contenu">
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
                        canuserEdit ? (
                            <div>
                                <button onClick={editcomm}>Modifier</button>
                                <br></br>
                                <button onClick={() => supabase.from('commentaire').delete().eq('id', commentaire.id).then((response) => {
                                    console.log(response);
                                    if(response.error!=null) throw response.error;
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