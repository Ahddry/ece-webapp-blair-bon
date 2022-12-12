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
        <div className="dark:bg-dark_background2 bg-background2 rounded-3xl mt-5">
            {edit ? (
                <div className="commentaire">
                    <form onSubmit={handleSubmit}>
                        <div className="flex border-b border-b-gray-600 p-3">
                            <div className="w-[10%]">
                                {
                                gravatarurl ? (
                                    <Image className="rounded-full overflow-hidden w-8 h-8 mt-2"  src={`https://2.gravatar.com/avatar/${gravatarurl}?d=identicon`} alt={'profilepicture ' + commentaire.username} width={38} height={38}></Image>)
                                    : (<></>)
                                }
                            </div>
                            <div className="w-[90%]">
                                <input className="p-2 bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full" type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
                            </div>
                        </div>
                        <div className="pt-3 pl-4 pr-4">
                            <textarea className=' bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full h-auto p-2' type="text" placeholder="Contenue du commentaire..." value={contenue} onChange={(e) => setContenue(e.target.value)} required />
                            <div className="flex pt-4 pb-4 justify-between">
                                <div className='w-[40%]'>
                                    <input className=' bg-[#f9fafb] dark:bg-[#4e5359] rounded-2xl w-full pl-3 p-2' type="number" min="1" max="5" placeholder="etoile (1-5)" value={etoile} onChange={(e) => setEtoile(e.target.value)} required />
                                </div>
                                <div className='w-[60%] p-2 text-right'>
                                    <button className='pl-2 hover:text-lien' type="submit">
                                        {loading ? "Chargement..." : "Publier"}
                                    </button>
                                    {
                                        isNew ? (<></>) : (<button className='pl-2 hover:text-lien' type='button' onClick={()=>
                                            {
                                                editcomm()
                                                setTitre(commentaire.titre);
                                                setContenue(commentaire.contenue);
                                                setEtoile(commentaire.etoile);
                                            }
                                        }>Annuler</button>)
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ):(
                <div className="">
                    <div className="flex border-b border-b-gray-600 p-3" >
                        <div className="w-[10%]">
                            {
                            gravatarurl ? (
                                <Image className="rounded-full overflow-hidden w-8 h-8 mt-2"  src={`https://2.gravatar.com/avatar/${gravatarurl}?d=identicon`} alt={'profilepicture ' + commentaire.username} width={38} height={38}></Image>)
                                : (<></>)
                            }
                        </div>
                        <div className="w-[50%] ">
                            <h3 className='mt-2 m-3 text-xl text-bold'>
                                {commentaire.titre}
                            </h3>
                        </div>
                        <div className="text-xs text-right w-[40%]">
                            <p>
                                Par <span className="dark:text-amber-400 text-green-700">{commentaire.auteur.username}</span> le {new Date(commentaire.created_at).toLocaleDateString()} à {new Date(commentaire.created_at).toLocaleTimeString()}
                            </p>
                        </div>
                    <div>
                    </div>
                    </div>
                    <div className="pl-4 pt-3">
                        <p>
                            {commentaire.contenue}
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <div className="pl-4 p-3">
                            Etoile: {commentaire.etoile}
                        </div>
                    {
                        causerEdit ? (
                            <div className="p-3">
                                <button className='pl-2 hover:text-lien' onClick={editcomm}>Modifier</button>
                                <button className='pl-2 hover:text-lien' onClick={() => supabase.from('commentaire').delete().eq('id', commentaire.id).then((response) => {
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