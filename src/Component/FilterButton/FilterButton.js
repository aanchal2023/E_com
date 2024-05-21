import React from "react";

function FilterButton() {
  return (
    <>
      <div className="container mb-4">
        <div className="col-7 ">
          <div
            className="border  border-dark  m-5"
            style={{ backgroundColor: "  rgba(251, 239, 241, 0.372)" }}
          >
            <div className="row m-4">
              <div className="col ">
                <h5 className=" text-start ">Price</h5>
              </div>
              <div className="col">
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label " for="flexCheckDefault">
                    <h5>Low to High</h5>
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label " for="flexCheckDefault">
                    <h5>High to Low</h5>
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label " for="flexCheckDefault">
                    <h5>Best seller</h5>
                  </label>
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col ">
                <h5 className=" text-start ">Newest first</h5>
              </div>
              <div className="col">
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col">
                <h5 className="text-start">Popularity </h5>
              </div>
              <div className="col">
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col m-4">
              <button type="button" class="btn btn-success">
              <h5>Apply</h5>
              </button>
            </div>
            <div className="col m-4">
              <button type="button" class="btn btn-success">
              <h5>Cancel</h5>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterButton;
