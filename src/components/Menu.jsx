import '../styles/Accueil.css'
import '../styles/Responsive.css'

import {Link} from "react-router-dom"


export default function Menu() 
{
	return  (

            <section className="menu  w-[100%] flex justify-center mt-[10%] mb-[10%]" id="description">

                <Link to="https://drive.google.com/file/d/1zmuZt4_QHerRzDonne0QDUQcLqQw3V5G/view" target="_blank" title="Lien vers mon CV">
                    <button className="menu-btn bg-red-800 text-white font-bold py-2 px-4 rounded-full h-12">Notre menu entier ici !</button>
                </Link>

            </section>
    )
}