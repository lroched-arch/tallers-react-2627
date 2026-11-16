import Boto from "./Boto";
import { useTasques } from "../context/TasquesContext";

function Tasca({tasca}){
    const { toggleTasca, eliminaTasca } = useTasques()
    return (
        <li className="my-4 flex justify-between items-center gap-4">
            <div>
                <input className="mx-1" id={tasca.id} type="checkbox" checked={tasca.feta} onChange={()=>toggleTasca(tasca.id)}/> 
                <label className={tasca.feta ? 'line-through text-slate-400' : ''} htmlFor={tasca.id}> {tasca.text}</label>
            </div>
           
            <Boto variant="perill" aria-label={`Elimina ${tasca.text}`} onClick={()=>eliminaTasca(tasca.id)}>Elimina</Boto>
            

        </li>
    )    
}

export default Tasca

// toggleTasca i eliminaTasca no vénen de les props.
// Les llegeixo del TasquesContext amb el hook useTasques().
// Qui les ha penjat allà és el TasquesProvider (a main.jsx).