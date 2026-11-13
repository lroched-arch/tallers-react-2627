import { useState } from 'react';
import Boto from './Boto';
import Missatge from './Missatge';


function FormulariTasca({onAfegir}){
    const [text, setText]=useState("");
    const [error, setError] = useState('');

    function envia(e){
        e.preventDefault()

        const net = text.trim()
        if (!net) {
            setError("Escriu una tasca abans d'afegir-la.")
            return
        }

        onAfegir(net)
        setText('')
        setError('')
           
    }

    function canviaText(e) {
            setText(e.target.value)
            if (error) setError('')
                
        }
    
    
    return (
        
        <form onSubmit={envia} className='flex flex-col justify-center items-center'>
            <label htmlFor='tasca'>Nova tasca</label>
            <div >
                {error && <Missatge text={error} tipus="error"  />}
                <input 
                    className='border rounded-md m-2 p-1' 
                    id='tasca' 
                    type='text' 
                    placeholder='Introdueix nova tasca..' 
                    autoComplete='off' 
                    value={text}
                     
                    onChange={canviaText}/>
            <Boto type="submit">Afegir</Boto>
            </div>
            
        </form>
        
    )
}

export default FormulariTasca