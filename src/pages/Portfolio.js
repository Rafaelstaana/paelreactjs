import "./Portfolio.css";
import Navbar from "./Navbar";
import a1Image from "./img/a1.png"
import a2Image from "./img/alfscal.png"
import a3Image from "./img/a2.png"
import a4Image from "./img/gd.jpg"


const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio" className="bg-secondary bg-black">
        <div className="container-fluid mt-3">
      
            <div className="cols">
              <h1 className="fw-bold text-center text-white mt-3 pt-3">NBA<span className="alex bg-violet">Champions</span>
              </h1>
            </div>
            </div>
            <div className="container">
          <div className="row mt-5">
            <hr />
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a4Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-black">NBA (2004)</h5>
                <p class="card-text text-white"></p>

          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a1Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-black">CHICAGO BULLS (1999)</h5>
                <p class="card-text text-white"></p>
               
          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a2Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-black">CHAMPIONS (1994)</h5>
                <p class="card-text text-white"></p>
                
          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a3Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-black">ADIDAS (2000, 2011)</h5>
                <p class="card-text text-white"></p>
                
          </div>
          </div>
          </div>
          </div>
            </div>
          </div>
      
    </>
  );
};

export default Portfolio;
