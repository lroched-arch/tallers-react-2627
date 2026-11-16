import { useState } from 'react';
import Comptador from './components/Comptador.jsx'
import Targeta from './components/Targeta.jsx'
import FormulariTasca from './components/FormulariTasca.jsx'
import Tasca from './components/Tasca.jsx';
import LlistaTasques from './components/LlistaTasques.jsx';
import Boto from './components/Boto.jsx';
import FiltreTasques from './components/FiltreTasques.jsx';

function App() {
  //estats
  const [comptador, setComptador] = useState(0);
  const [tasques, setTasques]=useState([]);
  const [filtre, setFiltre]=useState('totes');
  const [fosc, setFosc]= useState(false);
  
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

  //funció formulari tasques
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
  if(totalTasques==1){
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
  //Marca totes com a fetes
  function marcaCompletades(){
    const llistanova=tasques.map((tasca)=>({...tasca, feta:true}))
      setTasques(llistanova)
  }

  //filtrar tasques
  const tasquesFiltrades = tasques.filter((tasca) => {
  if (filtre === 'pendents') return !tasca.feta
  if (filtre === 'fetes') return tasca.feta
  return true
  })

  //missatgeBuit a filtres
  let missatgeBuit;
  if (tasques.length>0 && pendents===0){
    missatgeBuit='No hi ha tasques pendents. Bona feina!'
  }
  else if(tasques.length===0){
    missatgeBuit='Encara no hi ha tasques. Afegeix-ne una.'
  }
  else if (tasques.length>0 &&  fetes===0){
    missatgeBuit='Encara no has marcat cap tasca com a feta.'
  }
  

  return (
    <main className={`py-4 min-h-screen flex flex-col gap-8 justify-center items-center bg-fuchsia-50 dark:bg-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`}>
    <button onClick={enfosquir} className={`p-4 bg-white border border-fuchsia-900 rounded-full dark:bg-fuchsia-800 dark:text-white transition w-30 duration-200 `}>Llum/Fosc</button>
    <div className='flex flex-col lg:flex-row lg:items-start items-center gap-8'>
      <Targeta titol='Comptador'>
        <Comptador tipus={calculaTipus(comptador)} valor={comptador} missatge={missatge} onCanvia={canvia} onDuplica={duplica} onReinicia={reinicia} etiqueta="Hola món!"/>
      </Targeta>

      <Targeta titol='Tasques'>
        

        <FormulariTasca onAfegir={afegirTasca}/>
        <p className='text-md'>{missatgeTasques}</p>
        <div className='bg-fuchsia-50 border rounded-xl p-2 border-fuchsia-900'>
          <p><strong>Tasques fetes:</strong> {pendents}  | <strong>Tasques pendents:</strong> {fetes}</p>
        </div>
        <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre}/>
        <LlistaTasques missatgeBuit={missatgeBuit} tasques={tasquesFiltrades} onToggle={toggleTasca} onElimina={eliminaTasca}/>
        <div className='flex gap-2'>
          <Boto variant='primari' disabled={pendents === 0} aria-label="Marca totes com a completades" onClick={marcaCompletades}>Marca totes com a fetes</Boto>
          <Boto variant="perill" disabled={fetes === 0} aria-label="Elimina tasques completades" onClick={eliminarCompletades}>Elimina completades</Boto>
        </div>
        
      </Targeta>
    </div>
      
    </main>
  );
}



export default App


