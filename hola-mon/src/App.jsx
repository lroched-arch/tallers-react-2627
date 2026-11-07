import { useState } from 'react';


function App() {
  const [comptador, setComptador] = useState(0);

  function incrementa(){
    setComptador((anterior) => anterior +1)
  }

  function decrementa(){
    setComptador((anterior) => anterior-1)
  }

  function reinicia(){
    setComptador((comptador) => 0)
  }

  let missatge;

  if (comptador==0){
    missatge='Encara no has començat'
  }
  if (comptador<0){
    missatge='Compte, vas enrere!'
  }
  if (comptador>0){
    missatge='Vas per bon camí!'
  }

  const [fosc, setFosc]= useState(false);

  function enfosquir(){
    setFosc (!fosc)
  }

  const botoDark = fosc === true ? 'dark' : '';

  return (
    <main className={`min-h-screen flex flex-col gap-8 justify-center items-center bg-fuchsia-50 dark:bg-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`}>
      <button onClick={enfosquir} className={`p-4 bg-white border border-fuchsia-900 rounded-full dark:bg-fuchsia-800 dark:text-white transition duration-200 ${fosc ? 'dark' : ''}`}>Llum/Fosc</button>
      <div className={`flex flex-col justify-center  items-center gap-4 bg-white border p-4 border-fuchsia-800 rounded-2xl shadow-2xl shadow-fuchsia-950 w-80 sm:w-100 dark:bg-fuchsia-200 dark:shadow-fuchsia-50 transition duration-200 ${fosc ? 'dark' : ''}` }>
        <h1 className={`text-3xl sm:text-5xl font-bold dark:text-fuchsia-950 transition duration-200 ${fosc ? 'dark' : ''}`} >
          Hola món!
        </h1 >
        <p className='text-xl font-sans text-fuchsia-950'>{missatge}</p>
        <p className=''>Has fet click {comptador} vegades.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <button className={`bg-fuchsia-200 border border-b-fuchsia-900 rounded py-1 px-2 hover:bg-fuchsia-300 focus-visible:bg-fuchsia-200 transition-colors duration-300 dark:bg-white`} onClick={incrementa}>Incrementa</button>
          <button className={`bg-fuchsia-200 border border-b-fuchsia-900 rounded py-1 px-2  hover:bg-fuchsia-300 focus-visible:bg-fuchsia-200 transition-colors duration-300  dark:bg-white`} onClick={decrementa}>Decrementa</button>
          <button className={`bg-fuchsia-200 border border-b-fuchsia-900 rounded py-1 px-2  hover:bg-fuchsia-300 focus-visible:bg-fuchsia-200 disabled:bg-blue-50 transition-colors duration-300  dark:bg-white`} onClick={reinicia} disabled={comptador===0}>Reinicia</button>
        </div>
      </div>
          
      

    </main>
  );
}



export default App


