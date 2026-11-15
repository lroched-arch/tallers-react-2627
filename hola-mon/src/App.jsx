import { useState } from 'react';
import Comptador from './components/Comptador.jsx'
import Targeta from './components/Targeta.jsx'
import FormulariTasca from './components/FormulariTasca.jsx'
import Tasca from './components/Tasca.jsx';
import LlistaTasques from './components/LlistaTasques.jsx';
import Boto from './components/Boto.jsx';

function App() {
  const [comptador, setComptador] = useState(0);
  const [tasques, setTasques]=useState([])
  

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

  function afegirTasca(text){
    const novaTasca={
     id:crypto.randomUUID(), 
     text, 
     feta:false
    }
    
    setTasques([...tasques, novaTasca])
  }

  // comptador tasques i missatgeTasques
  let totalTasques=tasques.length;
  let missatgeTasques="";
  if (totalTasques<=0){
    missatgeTasques="Encara no hi ha tasques. Afegeix-ne una.";
  }
  else if(totalTasques==1){
    missatgeTasques=`Tens ${totalTasques} tasca afegida`;
  }
  else{
    missatgeTasques=`Tens ${totalTasques} tasques afegides`
  }
  
  //eliminar tasca
  function eliminaTasca(id){
    let llistaTasquesActualitzada=[]
    tasques.forEach(t =>{
      if (t.id!==(id)){
        llistaTasquesActualitzada.push(t)
      }
    })
    setTasques(llistaTasquesActualitzada);
  }
  
  //canviar el check con toggle
  function toggleTasca(id){
    const llistanova =tasques.map((t)=>t.id===id? {...t, feta: !t.feta}:t)
    setTasques(llistanova)
  }

  //comptador de pendents
  let pendents;
  let fetes;
  function calcularTasquesPendents(tasques){
    pendents=tasques.filter((tasca) => !tasca.feta).length
    fetes=tasques.length-pendents 
  }
  calcularTasquesPendents(tasques)

  //eliminar completadas
  function eliminarCompletades(){
    const llistanova=tasques.filter((tasca)=>!tasca.feta)
    setTasques(llistanova)
  }

  return (
    <main className={`min-h-screen flex flex-col gap-8 justify-center items-center bg-fuchsia-50 dark:bg-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`}>
    <button onClick={enfosquir} className={`p-4 bg-white border border-fuchsia-900 rounded-full dark:bg-fuchsia-800 dark:text-white transition w-30 duration-200 `}>Llum/Fosc</button>
    
    <Targeta titol='Comptador'>
      
      <Comptador tipus={calculaTipus(comptador)} valor={comptador} missatge={missatge} onCanvia={canvia} onDuplica={duplica} onReinicia={reinicia} etiqueta="Hola món!">
      </Comptador>

    </Targeta>
    <Targeta titol='Tasques'>
      <p className='text-md'>{missatgeTasques}</p>
      <div className='bg-fuchsia-100 border rounded-xl p-2 border-fuchsia-900'>
          <p><strong>Tasques fetes:</strong> {fetes}</p>
          <p><strong>Tasques pendents:</strong> {pendents}</p>
        
      </div>
      
      <Boto variant="perill" aria-label="Elimina tasques completades" onClick={eliminarCompletades}>Elimina completades</Boto>
      <FormulariTasca onAfegir={afegirTasca}/>
      <LlistaTasques tasques={tasques} onToggle={toggleTasca} onElimina={eliminaTasca}/>
      
    </Targeta>
    
      
         
    </main>
  );
}



export default App


