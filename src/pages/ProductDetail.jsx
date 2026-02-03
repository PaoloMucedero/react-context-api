import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Errore"));
  }, [id]);

  if (!product) return <p>Caricamento...</p>;

  return (
    <div className="container">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/prodotti")}
      >
        ← Torna alla lista prodotti
      </button>

      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>{product.price} €</p>
    </div>
  );
}


export default ProductDetail;