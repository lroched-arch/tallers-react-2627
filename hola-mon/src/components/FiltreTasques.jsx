import Boto from "./Boto";
import { useFiltreTasques } from '../context/FiltreTasquesContext.js'

const FILTRES=[{id:'totes', etiqueta:'Totes'},
            {id:'pendents', etiqueta:'Pendents'},
            {id:'fetes', etiqueta:'Fetes'}];

function FiltreTasques(){
    const { filtre, canviaFiltre} = useFiltreTasques()

    return(
        <div className='flex flex-col sm:flex-row gap-3'>
            {FILTRES.map(({id, etiqueta})=>(
          <Boto key={id} variant={filtre===id ? 'primari' : 'secundari'} onClick={()=>canviaFiltre(id)}>{etiqueta}</Boto>
        ))}
        </div>
                
    )
}

export default FiltreTasques;