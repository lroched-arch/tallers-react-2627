import Boto from './Boto.jsx'
import Missatge from './Missatge.jsx'

function Comptador({valor, missatge, tipus, onDuplica, onCanvia, onReinicia, pas=1})
{
    const accions = [
        { id: 'incrementa', text: 'Incrementa', variant: 'primari' },
        { id: 'duplica', text: 'Duplica', variant: 'primari' },
        { id: 'decrementa', text: 'Decrementa', variant: 'secundari' },
        { id: 'reinicia', text: 'Reinicia', variant: 'perill' },
        
        ]

    function executaAccio(id) {
        if (id === 'incrementa') onCanvia(pas)
        if (id === 'decrementa') onCanvia(-pas)
        if (id === 'duplica') onDuplica()
        if (id === 'reinicia') onReinicia()
        }
    

    return (
        <>
        <Missatge  tipus={tipus} text={missatge}></Missatge >
        
        <p>Has fet click {valor} vegades</p>
        <div className='flex flex-col sm:flex-row gap-2'>
            {accions.map(({ id, text, variant }) => (
                <Boto className="w-full sm:w-auto" key={id} variant={variant} onClick={() => executaAccio(id)} disabled={id==='reinicia' && valor ===0}>{text}</Boto>
            ))}
            
        </div>
                
        </>
        
    )
}

export default Comptador