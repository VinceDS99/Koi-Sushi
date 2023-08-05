import '../styles/Footer.css'
import '../styles/Responsive.css'

import japanFooter from '../assets/japanFooter.webp'

export default function Footer() 
{
	return  (

        <footer className="divback">

                <span className="contactSolution1 absolute text-white bottom-[35%] left-[55%] text-lg">
                        Numéro de téléphone : 01 12 42 36 92
                </span>
                <span className="contactSolution2 absolute text-white bottom-[35%] left-[25%] text-lg">
                        Mail : koisushi@hotmail.com
                </span>
                <img src={japanFooter} className='footerImg h-60 mt-[5%] flex justify-center align-middle' alt="Image d'une ville Japonaise de nuit"/>

        </footer>
)
}

