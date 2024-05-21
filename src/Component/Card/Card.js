import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import MyCart from "../Cart/MyCart";

function Card(props) {
  const { jsonDataArray } = props;
  const [carddata, setcardData] = useState([]);

  const AddData = () => {
setcardData(jsonDataArray)
    console.log(jsonDataArray);
  };

  return (
    <>
      <div className="d-flex mb-3 h-80  justify-content-evenly mt-5 align-items-center">
        {jsonDataArray.map((jsonData) => (
          <div className="card " style={{ width: "18rem" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={jsonData.image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={jsonData.image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={jsonData.image3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <div
              className="card-body"
              style={{ backgroundColor: " #97cc9ef5" }}
            >
              <h5 className="card-title">{jsonData.title}</h5>
              <p className="card-text">98</p>
              <button
                type="submit"
                onClick={AddData}
                className="btn btn-primary"
                style={{ backgroundColor: "#07492bf5" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1>my data</h1>
      <MyCart carddata={carddata} setData={setcardData}/>
      
    </>
  );
}

export default Card;
