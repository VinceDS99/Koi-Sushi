import '../styles/Accueil.css'
import food1 from '../assets/food1.webp'


export default function Accueil() 
{
	return  (

            <div className="accueil  w-[100%] flex mt-[10%] mb-[10%]">

                <img src={food1} className='w-[40%] h-80 '/>

                <h1 className="text-red-600">Nos menus fais avec nos connaissances </h1>

            </div>
    )
}