import React from "react";
import { useNavigate } from "react-router-dom";






function Destination(){



  const navigate =useNavigate();



const gotobooking =()=>{

  navigate("/booking");
}












return(




<>

 {/* Destination Start */}
 <div className="container-xxl py-5 destination">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
        <h1 className="mb-5">Popular Destination</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
              <a className="position-relative d-block overflow-hidden" onClick={gotobooking} href>
                <img className="img-fluid" src="img/destination-1.jpg" alt />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">1st Location</div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
              <a className="position-relative d-block overflow-hidden" onClick={gotobooking} href>
                <img className="img-fluid" src="img/destination-2.jpg" alt />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">2nd Location</div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
              <a className="position-relative d-block overflow-hidden" onClick={gotobooking} href>
                <img className="img-fluid" src="img/destination-3.jpg" alt />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">3rd Location</div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: 350}}>
          <a className="position-relative d-block h-100 overflow-hidden" onClick={gotobooking} href>
            <img className="img-fluid position-absolute w-100 h-100" src="img/destination-4.jpg" alt style={{objectFit: 'cover'}} />
            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">4th location</div>
            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Destination end */}

</>

    
);




}

export default Destination;