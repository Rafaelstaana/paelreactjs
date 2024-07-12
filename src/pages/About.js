import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/G5.jpg"

const About = () => {
  return (
    <>
      <Navbar />

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
            <div className="row">
              <div className="col-lg-4">
               <center><img src={myImage}/></center>
            </div>
            <div className="col-lg-8">
             
              <div className="card-box p-3 ">
              <h4 className="text-secondary text-white fw-bold">ABOUT <span className="alex bg-violet">ME</span></h4>
              <h5 className="text-secondary text-white fw-bold">Education</h5>
              <div clasName="education-content">
              <div className="card-shadow p-3 ">
                <div className="content">
                <h6 className="fw-bold">Primary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2008-2014</div>
                  <p>ERAMS - West</p>
                </div>
                </div>
                <div className="card-shadow p-3 ">
                <div className="content">
                  <h6 className="fw-bold">Secondary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2014-2020</div>
                  <p>Fellowship Baptist College</p>
                </div>
                </div>
                <div className="card-shadow p-3 ">
                <div className="content">
                <h6 className="fw-bold">Tertiary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2020-2024</div>
                  <p>Central Philippines State University-Main</p>
                </div>
                </div>
                </div>
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

export default About;
