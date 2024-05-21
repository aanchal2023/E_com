import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function CircleCard(props) {
  const { jsonDataArray } = props;
  return (
    <>
      <div className="d-flex mb-3 h-80  justify-content-evenly mt-5 align-items-center">
        {jsonDataArray.map((jsonData) => (
          <div className="card " style={{ width: "18rem" }}>

            <img
                  className="d-block w-100"
                  src={jsonData.image}
                  alt="First slide"
                />
            <div className="card-body" style={{ backgroundColor: " #97cc9ef5"}}>
              <h5 className="card-title">{jsonData.title}</h5>
            
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CircleCard;
