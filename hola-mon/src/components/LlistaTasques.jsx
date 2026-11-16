import Tasca from "./Tasca";
import { useFiltreTasques } from '../context/FiltreTasquesContext.js'

function LlistaTasques(){
    const { missatgeBuit, tasquesFiltrades } = useFiltreTasques()
    return(
        <div>
            
            {tasquesFiltrades.length===0 && <p>{missatgeBuit}</p>}
            <ul>
            {tasquesFiltrades.map((tasca)=>(
            
            <Tasca tasca={tasca} key={tasca.id}/>
            ))}
            </ul>  
        </div>
        )
         
    
}

export default LlistaTasques