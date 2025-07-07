import { BrowserRouter,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
const App = () =>{

 return(

  // BrowserRouter c'est lui qui va englober toute l'application
    <BrowserRouter>  
    
    {/* Routes contient tes différentes routes.*/}
    <Routes>
      
         {/*Déclare quelle page afficher selon l’URL.*/}
      <Route path="/" element={<Home/>} /> 
      <Route path="/about" element={<About/>} />
      {/* path ="*" fonctionne si jamais l'url e correspond à rien de déclaré au dessus   */}
      <Route path="*" element={<Home/>} />
    </Routes>
    </BrowserRouter>
 )
}

export default App
