import '../styles/Accueil.css'
import '../styles/Responsive.css'

import swal from 'sweetalert';


export default function Contact() 
{

    function sendEmail(e)
    {
        console.log('sendEmail')
        console.log('sendEmail222')
            swal
            (
                    {
                            title: "Message envoyé avec succés",
                            text: "Nous vous répondrons au plus vite",
                            button: "OK",
                            className: "alert",
                            icon: "success"
                    }
            );

            e.target.reset();
    };

	return  (

            <section className="accueil  w-[100%] flex justify-center items-center flex-col mt-[10%] mb-[10%]" id="contact">


                        <br/>
                
                <div class="w-full max-w-xs flex flex-col justify-center">

                
                    <form class="form-bloc bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center" action='#'>

                        <h2 className='form-title text-red-800 text-xl font-semibold mb-4 ml-[25%]'>Nous contacter</h2>


                        <div class="mb-4">
                            <label className="form-label block text-gray-700 text-sm font-bold mb-2" for="mail">
                                Mail
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Mail"/>
                        </div>

                        <div class="mb-6">
                            <label className="form-label block text-gray-700 text-sm font-bold mb-2" for="password">
                                Message
                            </label>
                            <textarea required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Votre message" rows="5"/>
                        </div>

                        <div className="flex items-center justify-between">
                            <button onClick={() => sendEmail()} className="form-btn bg-red-800  text-white ml-[35%] mr-[30%] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Envoyer
                            </button>
                        </div>

                    </form>
                </div>

                

            </section>
    )
}