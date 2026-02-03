import teamImage from "../assets/about-us-image.png"

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          
          <div className="card shadow">
            <img
              src={teamImage}
              className="card-img-top"
              alt="Il nostro team"
            />

            <div className="card-body text-center">
              <h2 className="card-title mb-3">Chi siamo</h2>

              <p className="card-text">
                Siamo un team di professionisti appassionati di tecnologia e
                innovazione, impegnati a offrire un’esperienza di shopping
                online semplice, veloce e affidabile.
              </p>

              <p className="card-text">
                Lavoriamo ogni giorno per selezionare prodotti di qualità e
                mettere il cliente sempre al centro delle nostre scelte.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;