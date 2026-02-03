import { Link } from "react-router-dom";
import heroImg from "../assets/Hero-image.png"; // <-- path dell'immagine

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Benvenuto nel nostro Shop!</h1>
        <p>Scopri i migliori affari selezionati per te</p>

        {/* bottone che porta alla lista prodotti */}
        <Link to="/prodotti" className="hero-btn">
          Inizia lo shopping
        </Link>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero e-commerce" />
      </div>
    </section>
  );
}

export default HomePage;