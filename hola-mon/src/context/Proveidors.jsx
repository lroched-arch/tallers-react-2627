// Proveidors.jsx (nuevo)
import TasquesProvider from './TasquesProvider.jsx'
import FiltreTasquesProvider from './FiltreTasquesProvider.jsx'

function Proveidors({ children }) {
  return (
    <TasquesProvider>
      <FiltreTasquesProvider>
        {children}
      </FiltreTasquesProvider>
    </TasquesProvider>
  )
}

export default Proveidors