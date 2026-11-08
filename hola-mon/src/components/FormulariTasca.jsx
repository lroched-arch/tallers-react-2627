import { useState } from 'react';
import Boto from './Boto';



function FormulariTasca({onAfegir}){
    const [text, setText]=useState("")

    function envia(e){
        e.preventDefault()

        const net = text.trim()
        if (!net) return

        onAfegir(net)
        setText('')
    }
    
    return (
        
        <form onSubmit={envia} className='flex flex-col justify-center items-center'>
            <label htmlFor='tasca'>Nova tasca</label>
            <div >
                <input 
                    className='border rounded-md m-2 p-1' 
                    id='tasca' 
                    type='text' 
                    placeholder='Introdueix nova tasca..' 
                    autoComplete='off' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            <Boto type="submit">Afegir</Boto>
            </div>
            
        </form>
        
    )
}

export default FormulariTasca