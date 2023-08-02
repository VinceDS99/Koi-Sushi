import '../styles/Header.css'

import koiLogo from '../assets/koiLogo.webp'
import japanBackground3 from '../assets/japanBackground3.webp'

export default function Header() 
{

	return  (

        <header className="flex  flex-col" id="header">

            <div className="flex flex-row justify-center w-[96%] mr-[2%] ml-[2%]">

                <nav className="nav flex flex-row justify-center w-[100%]">

                    <div className="flex flex-row w-[30%] gap-[15%] mt-[5%] ml-[2%] mr-[3%]">
                        <a href="#header" className='nav-text text-black font-bold ml-[2%]'>ACCUEIL</a>
                        <a href="#projets" className='nav-text text-black font-bold'>NOUS</a>
                    </div>

                    
                    <span className="jap-text text-red-800 mt-[3%] ml-[3%]">いらっしゃいませ !</span>

                    <div className="divimg flex justify-center items-center w-full ">
                        <img src={koiLogo} alt="Logo" className="logo h-60 flex justify-center align-middle mt-[-6%] mb-[-5%] "/>
                    </div>

                    <span className="jap-text text-red-800 mt-[3%] mr-[3%]">いらっしゃいませ !</span>

                    <div className="flex flex-row w-[30%] gap-[15%] mt-[5%] ml-[3%] mr-[2%]">
                        <a href="#skills" className='nav-text text-black font-bold'>LOCALISATION</a>
                        <a href="#contact" className='nav-text text-black font-bold mr-[2%]'>CONTACT</a>
                    </div>

                </nav>

            </div>




            <div className="divback">
                <img src={japanBackground3} alt="Logo" className='backg h-60 flex justify-center align-middle '/>
            </div>


        </header>
)}

