import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css"

import Form from './components/Form'
import Results from './components/Results'

function App() {
  const [imc, setImc] = useState(null)
  const [classif, setClassif] = useState('')

  return (
    <StrictMode>
      <Form setImc={setImc} setClassif={setClassif} />
      <Results imc={imc} classif={classif} />
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
