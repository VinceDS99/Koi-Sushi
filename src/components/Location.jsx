import '../styles/Accueil.css'
import '../styles/Responsive.css'

export default function Location() 
{


	return  (

            <section className="location  w-[100%] flex  mt-[10%] mb-[10%]" id="location">

                <iframe 
                    className='map ml-[3%] rounded'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22414.054136894523!2d2.2845658497496473!3d48.849044182355144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67027019927c7%3A0x4a644ae5c23154f4!2zS2_Drw!5e0!3m2!1sfr!2sfr!4v1691023911166!5m2!1sfr!2sfr" 
                    title='Localisation google maps'
                    width="600" 
                    height="450" 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                
                <div className="location-text w-[50%] mr-[5%] ml-[5%] flex  flex-col justify-center items-center">

                    <h1 className="location-title text-red-800 text-center  text-xl font-semibold">
                        Voici notre localisation à Paris ainsi que nos horaires d'ouverture !
                    </h1>

                    <br/>

                    <div className="flex justify-center flex-col align-middle">
                        <p className='location-txt text-black text-lg'>
                            Lundi : Fermé
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Mardi :     11h30 - 14h30, 18h00 - 22h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Mardi :     11h30 - 14h30, 18h00 - 22h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Mercredi :  11h30 - 14h30, 18h00 - 22h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Jeudi :     11h30 - 14h30, 18h00 - 22h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Vendredi :  11h30 - 14h30, 18h00 - 23h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Samedi :    12h00 - 15h00, 18h00 - 23h00
                        </p>
                        <br/>
                        <p className='location-txt text-black text-lg'>
                            Dimanche :  12h00 - 15h00, 18h00 - 22h00
                        </p>
                    </div>

                </div>

            </section>
    )
}