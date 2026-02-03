import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { BudgetProvider } from './contexts/BudgetContext.jsx'
import { ProductsProvider } from './contexts/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BudgetProvider>
  </StrictMode>,
)
