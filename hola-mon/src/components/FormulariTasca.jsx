import { useState } from 'react';
import Boto from './Boto';
import Missatge from './Missatge';
import { useTasques } from '../context/TasquesContext';


function FormulariTasca(){
    const {afegeixTasca}=useTasques()
    const [text, setText]=useState("");
    const [error, setError] = useState('');

    function envia(e){
        e.preventDefault()

        const net = text.trim()
        if (!net) {
            setError("Escriu una tasca abans d'afegir-la.")
            return
        }

        afegeixTasca(net)
        setText('')
        setError('')
           
    }

    function canviaText(e) {
            setText(e.target.value)
            if (error) setError('')
                
        }
    
    
    return (
        
        <form className='text-center' onSubmit={envia} noValidate>
            <label htmlFor='tasca'>Nova  tasca</label>
            <div>
                <div id="error-tascas">
                   {error && <Missatge text={error} tipus="error"  />} 
                </div>
                <div>
                    <input 
                    className='border rounded-md m-2 p-1 dark:bg-fuchsia-100' 
                    id='tasca' 
                    type='text' 
                    placeholder='Introdueix nova tasca..' 
                    autoComplete='off' 
                    value={text}
                    maxLength={80}
                    onChange={canviaText}
                    aria-describedby="error-tasca"
                    aria-invalid={error ? 'true' : 'false'}/>
                
                    <Boto type="submit">Afegir</Boto>
                </div>
                
                <p className='text-center text-slate-500'>{text.length}/80</p>
            </div>
            
        </form>
        
    )
}

export default FormulariTasca