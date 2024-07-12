import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/G8.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">


      <div id="home-info">
      
      <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-2 text-white fw-bold">Hi I'm <span className="alex">Rafael</span></h1>
                    <h2 className="text-animate">Basketball Player</h2>
                    <p className="text-white">Basketball is such an exciting sport! Whether you're playing on the court or watching a game, there's always something thrilling about it. </p>
                    <a href="#work" className="btn btn-brand">Play with Me</a>
                    <a href="#work" className="btn btn-brand">Basketball</a>

                </div>
                
            <div className="col-lg-6 img">
               <img src={myImage}/>
            </div>
          </div>
        </div>
      </div>
     
        </div>
       </div>
      </div>

      
    </>
  );
};

export default Home;
