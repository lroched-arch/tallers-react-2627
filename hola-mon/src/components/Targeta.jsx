function Targeta({titol, children}){
    return (
        <div className={`flex flex-col gap-4 justify-center items-center bg-white border py-4  border-fuchsia-800 rounded-2xl shadow-2xl shadow-fuchsia-950 w-auto sm:w-110 dark:bg-fuchsia-200 dark:shadow-fuchsia-50 transition duration-200` }>
            <h1 className={`text-center text-3xl sm:text-5xl font-bold dark:text-fuchsia-950 transition duration-200` }>
            {titol}
            </h1>
            {children}
        </div>
    )
}

export default Targeta