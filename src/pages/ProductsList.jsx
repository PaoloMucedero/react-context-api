import { Link } from "react-router-dom"
import { useBudget } from "../contexts/BudgetContext.jsx"
import { useProducts } from "../contexts/ProductsContext.jsx"



function ProductsList() {
  const { budgetMode } = useBudget();
  const { products, loading } = useProducts();

  return (
    <>

      <div className="container mt-4">
        {loading && <p>Caricamento prodotti...</p>}
        <div className="row g-4">
          {products
            .filter((product) => (budgetMode ? product.price <= 30 : true))
            .map(product => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <Link
                to={`/products/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                    alt={product.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="text-muted">{product.category}</p>

                    <div className="mt-auto">
                      <strong>{product.price} €</strong>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default ProductsList
