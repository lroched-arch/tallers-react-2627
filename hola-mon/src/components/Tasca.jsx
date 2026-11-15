import Boto from "./Boto";

function Tasca({tasca, onToggle, onElimina}){
    return (
        <li className="my-4 flex justify-between items-center gap-4">
            <div>
                <input className={tasca.feta ? 'line-through text-slate-400' : ''} id={tasca.id} type="checkbox" checked={tasca.feta} onChange={()=>onToggle(tasca.id)}/> 
                <label className="mx-2" htmlFor={tasca.id}> {tasca.text}</label>
            </div>
           
            <Boto variant="perill" aria-label={`Elimina ${tasca.text}`} onClick={()=>onElimina(tasca.id)}>Elimina</Boto>
            

        </li>
    )    
}

export default Tasca