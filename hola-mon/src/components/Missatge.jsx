function Missatge({text, tipus='info'}){
    const colorsTipus ={
        info:`text-fuchsia-900`,
        exit:`text-green-700`,
        error: `text-red-700`
    }

    return (
        <>
        <p className={`text-xl font-sans ${colorsTipus[tipus]}`}>{text}</p>
        </>
    )
}

export default Missatge