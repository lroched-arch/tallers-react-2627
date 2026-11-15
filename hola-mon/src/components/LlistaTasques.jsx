import Tasca from "./Tasca";

function LlistaTasques({tasques, onToggle, onElimina}){
    return(
        <ul>
        {tasques.map((tasca)=>(
          
        <Tasca tasca={tasca}  onElimina={onElimina} onToggle={onToggle} key={tasca.id}/>
        ))}
        </ul> 
        )
         
    
}

export default LlistaTasques