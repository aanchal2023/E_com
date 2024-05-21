import React from "react";

function Loginpage() {
  return (
    <>
      <div className="container  mb-4">
        <div className="row mt-5 mb-4 border border-dark rounded">
          <div className="col-5  loginclass img-fluid img-thumbnail"
            style={{
              backgroundColor: "#07492bf5",
              height:"50%"
            }}
          >
            <div className="row m-5  text-start text-light">
              <h1>Login</h1>
            </div>
            <div className="row m-5 me-0 mb-0 text-start text-light">
              <h4>Get access to your Orders, Wishlist and Recommendations</h4>
            </div>
            <img src={require("../Img/authentication.png")} style={{height:"30%", width:"100%"}} className="" />
          </div>
          <div className="col-7 bg-secondary-subtle pt-4">
            <div className="form-data mt-5">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    <h5>Enter Email/Mobile number</h5>
                  </label>
                  <div className="border border-dark border-end-0 border-start-0 border-top-0">
                    <input
                      type="email"
                      className="form-control border border-end-0 border-start-0 border-top-0 border-bottom-0 "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="row">
                    <p>
                      By continuing, you agree to Bharat Millets Terms of use
                      and Privacy Policy
                    </p>{" "}
                  </div>
                </div>

                <div className="row mt-5">
                  <button
                    type="submit"
                    className="btn "
                    style={{ backgroundColor: "  #07492bf5" }}
                  >
                    <h5 className="text-light">Request OTP</h5>
                  </button>
                </div>
                <div className="col  d-flex text-center text-primary align-items-end" style={{height:"350px"}}><h5>New to Bhrat Millets? Create New Account</h5></div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
