import '../styles/Accueil.css'
import '../styles/Responsive.css'
import 'aos/dist/aos.css'


import food1 from '../assets/food1.webp'


export default function Descritpion() 
{

	return  (

            <section className="accueil  w-[100%] flex mt-[10%] mb-[10%]" id="description">

                <img src={food1} className='img1 w-[40%] h-80 ' alt="Image d'un plat Japonais du restaurant"/>

                <div className="desc-text w-[50%] mr-[5%] ml-[5%] flex  flex-col">
                    <h1 className="desc-title text-red-800  mt-[3%] text-center  text-xl font-semibold">
                        Découvrez l'authentique saveur du Japon dans notre restaurant !
                    </h1>
                    <br/>
                    <p className="desc-text1 text-black text-center text-lg">
                        Plongez dans un voyage culinaire où tradition et innovation se rencontrent, offrant des plats qui raviront vos papilles. Des sushis délicieusement préparés à la main aux ramens fumants qui réchauffent le cœur, chaque bouchée vous transportera au pays du soleil levant. Notre ambiance chaleureuse et notre service attentionné vous feront sentir comme chez vous, alors venez vous immerger dans une expérience gastronomique inoubliable. Venez goûter l'essence même du Japon, ici, chez nous, où chaque plat est une véritable œuvre d'art gustative. Bienvenue dans notre restaurant japonais, où les saveurs enchanteresses vous attendent avec impatience !
                    </p>
                </div>

                

            </section>
    )
}