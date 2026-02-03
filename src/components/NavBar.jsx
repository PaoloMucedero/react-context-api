import { NavLink } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext.jsx'



function NavBar() {
    const { budgetMode, setBudgetMode } = useBudget();

    // Così tratto i link come un array di oggetti...
    const links = [
        { path: "/", label: "HomePage" },
        { path: "/prodotti", label: "Products List" },
        { path: "/chisiamo", label: "Chi siamo" }
    ]
  

  return (
    // ... quindi posso usare links.map per dinamizzare il contenuto
    <nav className='mainNav d-flex align-items-center justify-content-between px-3'>
        <ul className="mb-0">
            {links.map((link, i) => (
                <li key={i}>
                    <NavLink to={link.path}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
        <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={() => setBudgetMode((prev) => !prev)}
        >
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
        </button>
    </nav>
  )
}

export default NavBar
