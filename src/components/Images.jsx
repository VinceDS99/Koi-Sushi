import '../styles/Accueil.css'
import '../styles/Responsive.css'

import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';


export default function Images() 
{

    const imgTab = 
    [
        "https://img.freepik.com/premium-photo/sushi-roll-japanese-food-restaurant_135427-6581.jpg?w=2000",
        "https://free4kwallpapers.com/uploads/originals/2019/03/02/japanese-foodart-wallpaper.jpg",
        "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?cs=srgb&dl=pexels-rajesh-tp-2098085.jpg&fm=jpg",
        "https://free4kwallpapers.com/uploads/originals/2015/10/03/sticks-balls-japanese-cuisine.jpg",
        "https://cdn.vox-cdn.com/thumbor/U7GSFgSLs0zzNrnqLx66OMR0p1o=/0x220:3000x1791/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23180182/Nakato_16.jpg",
        "https://free4kwallpapers.com/uploads/originals/2019/03/02/japanese-foodart-wallpaper.jpg",
    ];

    var i = 0;

    if ( i === 0 )
    {
        var num = i + 1;
    }

    var pictures = imgTab[i]

    const taille = imgTab.length

    function getPictureNext() 
    {            
        i  = i + 1

        if (i === imgTab.length)
        {
            i = 0
        }

        var pictures = imgTab[i]
        const imgDiv = document.querySelector('#imageCarousel')
        imgDiv.src = pictures

        num = i + 1
        const numDiv = document.querySelector('#numeroImage')
        numDiv.innerHTML = num
    }

    function getPicturePrev() 
    {            
        i  = i - 1
        if (i === -1)
        {
            i = imgTab.length - 1
        }

        var pictures = imgTab[i]
        const imgDiv = document.querySelector('#imageCarousel')
        imgDiv.src = pictures

        num = i + 1
        const numDiv = document.querySelector('#numeroImage')
        numDiv.innerHTML = num
    }


	return  (

            <section className="images  w-[100%] flex mt-[10%] mb-[10%] relative">

                <div className="citation w-[50%] mr-[5%] ml-[5%] flex  flex-col">
                    <h2 className="img-title text-red-800  mt-[15%] text-center  text-xl font-semibold">
                        "La cuisine japonaise n'est pas chose qui se mange, mais chose qui se regarde"
                    </h2>
                    <br/>
                    <span className="img-name text-black text-center text-lg font-bold">
                        -Junichiro Tanizaki                    
                    </span>
                </div>

                <div className="carousel w-[50%]">
                    <img src={pictures} className='img-carousel w-[100%] h-80 object-cover' id="imageCarousel" alt="Image d'un plat du restaurant"/>
                    <div className="w-[100%] absolute bottom-[20%]">
                        <FaArrowCircleLeft  className='arrow text-white  text-3xl absolute left-[10%] hover:cursor-pointer' id='arrowLeft' onClick={() => getPicturePrev()}/>
                        <div className="relative">
                            <span className="text-white absolute left-[23%] text-xl" id="numeroImage" >{num}</span>
                            <span className="text-white absolute left-[24%] text-xl" id="nbImages"> / {taille}</span>
                        </div>
                        <FaArrowCircleRight className='arrow text-white  text-3xl absolute left-[35%] hover:cursor-pointer' id='arrowRight' onClick={() => getPictureNext()}/>
                    </div>
                </div>

            </section>
    )
}