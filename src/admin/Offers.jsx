import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

export default class Offers extends Component {
  render() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
    };

    return (
      <div>
        <div className="container-fluid">
          <div className="row m-1">
            <div className="col-lg-3 col-sm-4 col-3 col-md-3"></div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-9">
              <Link to="/admin/offer/coupons" className="text-decoration-none btn w-100 bt">
                Add Coupons
              </Link>
              <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
              >
                {({ handleSubmit, form, submitting, pristine }) => (
                  <form onSubmit={handleSubmit} className="p-1 shadow">
                    {/* <div className="form-group">
              <label className="form-label fw-bold">Upload Image</label>
                <Field name="image" component="input" type="file" className="form-control"/> */}
                    {/* <button className="btn btn-primary mt-3">Upload</button> */}
                    {/* </div> */}

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">Offer Name</label>
                      <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="offer name"
                        className="form-control"
                      />
                    </div>

                    {/* 
              <div className="form-group mt-3">
                <label className="form-label fw-bold">Brand Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="product name"
                  className="form-control"
                />
              </div> */}
                    {/* 
              <div className="form-group mt-3">
                <label className="form-label fw-bold">Product Quantity</label>
                <Field
                  name="price"
                  component="input"
                  type="number"
                  placeholder="number"
                  className="form-control"
                />
              </div> */}

                    {/* <div className="form-group mt-3">
                <label className="form-label fw-bold">Offer Category</label>
               
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                  <option>Couples</option>
                  <option>All</option>
                </select>
              </div> */}

                    {/* <div className="form-group mt-3">
                <label className="form-label fw-bold">Offer Sub-Category</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Analog Watches</option>
                  <option>Digital Watches</option>
                  <option>Smart Watch</option>
                  <option>Dress Watches</option>
                  <option>Quartz Watches</option>
                  <option>Swiss Watches</option>
                  <option>Casual Watches</option>
                </select>
              </div> */}

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        External Offer ID
                      </label>
                      <Field
                        name="id"
                        component="input"
                        type="text"
                        placeholder="Coupon"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">Offer Price</label>
                      <Field
                        name="price"
                        component="input"
                        type="number"
                        placeholder="number"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Off Percentage
                      </label>
                      <Field
                        name="price"
                        component="input"
                        type="number"
                        placeholder="number"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Schedule- Start Date
                      </label>

                      <Field
                        name="date"
                        component="input"
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Schedule- End Date
                      </label>

                      <Field
                        name="date"
                        component="input"
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>

                    <div className="buttons mt-3">
                      <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        className="btn btn-primary mx-4"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
