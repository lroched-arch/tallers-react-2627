import { useState } from 'react';
import Comptador from './components/Comptador.jsx'
import Targeta from './components/Targeta.jsx'

function App() {
  const [comptador, setComptador] = useState(0);

  function duplica(){
    setComptador ((anterior) => anterior*2)
  }

  function reinicia(){
    setComptador(0)
  }

  let missatge;

  if (comptador==0){
    missatge='Encara no has començat'
  }
  if (comptador<0){
    missatge='Compte, vas enrere!'
  }
  if (comptador>0){
    missatge='Vas per bon camí!'
  }

  const [fosc, setFosc]= useState(false);

  function enfosquir(){
    setFosc (!fosc)
  }


  function canvia(delta){
    setComptador ((anterior) => anterior + delta)

    }
  
  function calculaTipus(comptador){
        if (comptador === 0) return 'info'
        if (comptador >0) return 'exit'
        if (comptador <0) return 'error'
        
    }
  
  return (
    <main className={`min-h-screen flex flex-col gap-8 justify-center items-center bg-fuchsia-50 dark:bg-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`}>
    <button onClick={enfosquir} className={`p-4 bg-white border border-fuchsia-900 rounded-full dark:bg-fuchsia-800 dark:text-white transition w-30 duration-200 `}>Llum/Fosc</button>
    
    <Targeta titol='Comptador'>
      
      <Comptador tipus={calculaTipus(comptador)} valor={comptador} missatge={missatge} onCanvia={canvia} onDuplica={duplica} onReinicia={reinicia} etiqueta="Hola món!">
      </Comptador>

    </Targeta> 
      
         
    </main>
  );
}



export default App


