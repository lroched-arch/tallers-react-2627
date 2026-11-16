import { useState } from "react";
import { useTasques } from "./TasquesContext";
import { FiltreTasquesContext } from "./FiltreTasquesContext";

function FiltreTasquesProvider({children}){
    const { tasques } = useTasques();
    const [filtre, setFiltre]=useState('totes');

    
    // comptador tasques i missatgeTasques
  let totalTasques=tasques.length;
  let missatgeTasques="";
  if(totalTasques==1){
    missatgeTasques=`Tens ${totalTasques} tasca afegida`;
  }
  else{
    missatgeTasques=`Tens ${totalTasques} tasques afegides`
  }
  

  //comptador de pendents
  let pendents;
  let fetes;
  function calcularTasquesPendents(tasques){
    pendents=tasques.filter((tasca) => !tasca.feta).length
    fetes=tasques.length-pendents 
  }
  calcularTasquesPendents(tasques)

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

   const value = {
    filtre,
    canviaFiltre: setFiltre,
    tasquesFiltrades,
    pendents,
    fetes,
    missatgeBuit,
    missatgeTasques,
  }
  return (
    <FiltreTasquesContext.Provider value={value}>
      {children}
    </FiltreTasquesContext.Provider>
  )

}

export default FiltreTasquesProvider;