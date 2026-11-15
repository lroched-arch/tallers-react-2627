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
        
        <form onSubmit={envia} noValidate className='flex flex-col justify-center items-center'>
            <label htmlFor='tasca'>Nova  tasca</label>
            <div className='flex flex-cols' >
                <div id="error-tascas">
                   {error && <Missatge text={error} tipus="error"  />} 
                </div>
                
                <input 
                    className='border rounded-md m-2 p-1 dark:bg-fuchsia-100' 
                    id='tasca' 
                    type='text' 
                    placeholder='Introdueix nova tasca..' 
                    autoComplete='off' 
                    value={text}
                    maxLength={80}
                    onChange={canviaText}
                    aria-describedby="error-tasca"/>
                
            <Boto type="submit">Afegir</Boto>
            <p className='text-center text-slate-500'>{text.length}/80</p>
            </div>
            
        </form>
        
    )
}

export default FormulariTasca