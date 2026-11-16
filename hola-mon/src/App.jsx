import { useState } from 'react';
import Comptador from './components/Comptador.jsx'
import Targeta from './components/Targeta.jsx'
import FormulariTasca from './components/FormulariTasca.jsx'
import Tasca from './components/Tasca.jsx';
import LlistaTasques from './components/LlistaTasques.jsx';
import Boto from './components/Boto.jsx';
import FiltreTasques from './components/FiltreTasques.jsx';
import { useTasques } from './context/TasquesContext.js';
import { useFiltreTasques } from './context/FiltreTasquesContext.js';

function App() {
  //estats
  const [comptador, setComptador] = useState(0);
  const [fosc, setFosc]= useState(false);
  const {tasques, marcaCompletades,netejaFetes} = useTasques();
  const { missatgeTasques, pendents, fetes } = useFiltreTasques()
  
  //funcions comptador
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
  else if (comptador<0){
    missatge='Compte, vas enrere!'
  }
  else {
    missatge='Vas per bon camí!'
  }
  function canvia(delta){
      setComptador ((anterior) => anterior + delta)

  }

  //funció dark
  function enfosquir(){
    setFosc (!fosc)
  }
  //funció calcular tipus resultat comptador
  
  function calculaTipus(comptador){
        if (comptador === 0) return 'info'
        if (comptador >0) return 'exit'
        if (comptador <0) return 'error'
        
    }


  return (
    <main className={`py-4 min-h-screen flex flex-col gap-8 justify-center items-center bg-fuchsia-50 dark:bg-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`}>
    <button onClick={enfosquir} className={`p-4 bg-white border border-fuchsia-900 rounded-full dark:bg-fuchsia-800 dark:text-white transition w-30 duration-200 `}>Llum/Fosc</button>
    <div className='flex flex-col lg:flex-row lg:items-start items-center gap-8'>
      <Targeta titol='Comptador'>
        <Comptador tipus={calculaTipus(comptador)} valor={comptador} missatge={missatge} onCanvia={canvia} onDuplica={duplica} onReinicia={reinicia} etiqueta="Hola món!"/>
      </Targeta>

      <Targeta titol='Tasques'>
        

        <FormulariTasca />
        <p className='text-md'>{missatgeTasques}</p>
        <div className='bg-fuchsia-50 border rounded-xl p-2 border-fuchsia-900'>
          <p><strong>Tasques fetes:</strong> {fetes}  | <strong>Tasques pendents:</strong> {pendents}</p>
        </div>
        <FiltreTasques />
        <LlistaTasques />
        <div className='flex gap-2'>
          <Boto variant='primari' disabled={pendents === 0} aria-label="Marca totes com a completades" onClick={marcaCompletades}>Marca totes com a fetes</Boto>
          <Boto variant="perill" disabled={fetes === 0} aria-label="Elimina tasques completades" onClick={netejaFetes}>Elimina completades</Boto>
        </div>
        
      </Targeta>
    </div>
      
    </main>
  );
}



export default App


