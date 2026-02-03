import { Link, NavLink } from 'react-router-dom'



function NavBar() {
    // Così tratto i link come un array di oggetti...
    const links = [
        { path: "/", label: "HomePage" },
        { path: "/prodotti", label: "Products List" },
        { path: "/chisiamo", label: "Chi siamo" }
    ]
  

  return (
    // ... quindi posso usare links.map per dinamizzare il contenuto
    <nav className='mainNav'>
        <ul>
            {links.map((link, i) => (
                <li key={i}>
                    <NavLink to={link.path}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar