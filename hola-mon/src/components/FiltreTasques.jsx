import Boto from "./Boto";

const FILTRES=[{id:'totes', etiqueta:'Totes'},
            {id:'pendents', etiqueta:'Pendents'},
            {id:'fetes', etiqueta:'Fetes'}];

function FiltreTasques({filtre, onCanviaFiltre}){
    return(
        <div className='flex flex-col sm:flex-row gap-3'>
            {FILTRES.map(({id, etiqueta})=>(
          <Boto key={id} variant={filtre===id ? 'primari' : 'secundari'} onClick={()=>onCanviaFiltre(id)}>{etiqueta}</Boto>
        ))}
        </div>
                
    )
}

export default FiltreTasques;