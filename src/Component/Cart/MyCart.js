import React from "react";

function MyCart({carddata}) {
  return (
    <>
     {
      carddata && carddata.map((card) => (
        <div>
        <p>{card.title}</p>
        <img style={{width:"50px"}} src={card.image}/>
        <div className="container bg-secondary-subtle text-center">
        <div
          className="row navbar border border-bottom-0 border-dark mb-5 d-flex justify-content-center w-80 navbar-expand-lg  "
          style={{ backgroundColor: "gray", height: "52px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bharat Millets
            </a>
            <div>
              <button type="button" class="btn btn-light">
                Enter Delivery Pincode
              </button>
            </div>
          </div>
        </div>
        <div className="row border">
          <div className="col-7 grid gap-1">
          <div className="row border mb-4 ">
              <div className="col-2 p-0">
                <img
                  className="d-block"
                  style={{ width: "100px", height: "100px" }}
                  src={card.image}
                  alt="First slide"
                />
              </div>
              <div className="col-9 ">
                <div className="row ">
                  <h1 className="fs-6 text-start">
                    How to design a product that can grow itself 10x in year
                  </h1>
                </div>
                <div className="row">
                  <h1  className="text-success text-start fs-6">inStock</h1>
                </div>
                <div className="row">
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-success">
                      Save for Later
                    </button>
                  </div>
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border mb-4">
              <div className="col-2 p-0">
                <img
                  className="d-block "
                  style={{ width: "100px", height: "100px" }}
                  src={card.image}
                  alt="First slide"
                />
              </div>
              <div className="col-9 ">
                <div className="row ">
                  <h1 className="fs-6 text-start">
                    How to design a product that can grow itself 10x in year
                  </h1>
                </div>
                <div className="row">
                  <h1  className="text-danger text-start fs-6">Out of stock</h1>
                </div>
                <div className="row">
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-success">
                      Save for Later
                    </button>
                  </div>
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border mb-4 ">
              <div className="col-2 p-0">
                <img
                  className="d-block "
                  style={{ width: "100px", height: "100px" }}
                  src={require("../Img/oil.jpg")}
                  alt="First slide"
                />
              </div>
              <div className="col-9 ">
                <div className="row ">
                  <h1 className="fs-6 text-start">
                    How to design a product that can grow itself 10x in year
                  </h1>
                </div>
                <div className="row">
                  <h1  className="text-success text-start fs-6">inStock</h1>
                </div>
                <div className="row">
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-success">
                      Save for Later
                    </button>
                  </div>
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border mb-4">
              <div className="col-2 p-0">
                <img
                  className="d-block "
                  style={{ width: "100px", height: "100px" }}
                  src={require("../Img/Rice.jpg")}
                  alt="First slide"
                />
              </div>
              <div className="col-9 ">
                <div className="row ">
                  <h1 className="fs-6 text-start">
                    How to design a product that can grow itself 10x in year
                  </h1>
                </div>
                <div className="row">
                  <h1  className="text-success text-start fs-6">inStock</h1>
                </div>
                <div className="row">
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-success">
                      Save for Later
                    </button>
                  </div>
                  <div className="col text-start">
                    <button type="button" class="btn btn-light text-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 ">
            <div className="border  border-dark  m-5" style={{backgroundColor:"  rgba(251, 239, 241, 0.872)"}}>
              <div className="row ">
                <h5 >Details</h5>
              </div>
              <div className="row m-4">
                <div className="col ">
                <h5 className="fs-6 text-start ">price(4 items)</h5>
                </div>
                <div className="col">
                 <h5 className="fs-6 text-end">  ₹ 1298</h5>
                </div>

              </div>
              <div className="row m-4">
              <div className="col">
                <h5 className="fs-6 text-start">Discount</h5>
                </div>
                <div className="col">
                 <h5 className="fs-6 text-end">₹ 298</h5>
                </div>
              </div>
              <div className="row m-4">
              <div className="col">
              <h5 className="fs-6 text-start">Delivery Charges </h5>
                </div>
                <div className="col">
                 <h5 className="fs-6 text-end">  ₹ 98</h5>
                </div>

              </div>
              <div className="row m-4">
                <hr style={{width:" 40vh", textAlign:"center", marginLeft:"15px"}}></hr>
              <div className="col">
                <h5 className="fs-6 text-start">Total Amount</h5>
                </div>
                <div className="col">
                 <h5 className="fs-6 text-end" text-end>  ₹ 1098</h5>
                </div>
              </div>
              <div className="row m-4">
                <button type="button" class="btn btn-success">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>   

      )
      ) }

    </>
  );
}

export default MyCart;
