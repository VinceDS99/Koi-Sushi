import '../styles/Accueil.css'
import '../styles/Responsive.css'

import Descritpion from '../components/Description'
import Images from '../components/Images'
import Menu from '../components/Menu'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Accueil() 
{
	return  (
        <main>
            
            <Descritpion/>
            <Images/>
            <Menu/>
            <Location/>
            <Contact/>
            
        </main>

)
}