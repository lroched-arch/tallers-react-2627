import Tasca from "./Tasca";

function LlistaTasques({missatgeBuit,tasques, onToggle, onElimina}){
    return(
        <div>
            
            {tasques.length===0 && <p>{missatgeBuit}</p>}
            <ul>
            {tasques.map((tasca)=>(
            
            <Tasca tasca={tasca}  onElimina={onElimina} onToggle={onToggle} key={tasca.id}/>
            ))}
            </ul>  
        </div>
        )
         
    
}

export default LlistaTasques