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

  return (
    <main class="h-v100 justify-center mx-auto">
      <h1>
        Hola món!
      </h1 >
      <p>{missatge}</p>
      <p>Has fet click {comptador} vegades.</p>
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
      <button onClick={reinicia} disabled={comptador===0}>Reinicia</button>

    </main>
  );
}



export default App


