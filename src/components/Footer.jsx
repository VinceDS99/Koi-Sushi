import '../styles/Footer.css'
import japanFooter from '../assets/japanFooter.webp'

export default function Footer() 
{
	return  (

        <footer className="divback">

                <span className="absolute text-white bottom-[35%] left-[45%]">
                        Numéro : 0472452
                </span>
                
                <img src={japanFooter} className='footerImg h-60 mt-[5%] flex justify-center align-middle '/>

        </footer>
)
}

