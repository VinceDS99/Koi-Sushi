import Header from './components/header'
import Accueil from './pages/Accueil'
import Footer from './components/Footer'

import './App.css'

import {Routes, Route} from "react-router-dom"

function App() {

  return (
		<div className="AppDiv flex flex-col">
			<Header/>
			<Routes>
				<Route path="/" element={<Accueil/>} />
				<Route path="/*" element={<Accueil/>} />
			</Routes>
			<Footer/>
		</div>
  )
}

export default App
