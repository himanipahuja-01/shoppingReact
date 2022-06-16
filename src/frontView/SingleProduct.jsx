import React from "react";
import { BsFillEyeFill, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SingleProduct(props) {

  return (
    <div>

 <div className="container">
     <div className="card mt-5">
       <div className="card-header overflow-hidden" style={{width: '100%', height: '200px'}}>
         <img
           src={props.image}
           style={{width: '100%', height: '100%'}}
           className="zoom img-fluid figure"
           alt="..."
         />
       </div>
       <div className="card-body">
       <h4 className="text-truncate mb-3 text-center">
         {props.name}
       </h4>
       <div className="d-flex justify-content-center p-2">
         <h6 className="ms-0 btn fs-4">${props.price}</h6>
         <h6 className="me-0 btn text-secondary fs-4">
           <del>${props.price-3}</del>
         </h6>
       </div>
       </div>

       <div className="card-footer d-flex justify-content-between bg-light border">
         {/* <p className="me-auto btn">{<BsFillEyeFill />}View All</p> */}

         <Link
          to={`/ProductDescription/${props.id}`}
          className="btn btn-sm text-dark p-0"
        >
          <i className="text-primary mr-1"></i>
          <BsFillEyeFill className="h3 pe-2" style={{ color: "coral" }} />{" "}
          <span className="fw-bolder fs-6 btn-clr"> View Detail</span>
        </Link>
         {/* <p className="ms-5 btn">{<BsFillCartFill />}View All</p> */}
         <Link to="" className="btn btn-sm text-dark p-0">
          <i className="text-primary mr-1"></i>
          <BsFillCartFill className="h3 pe-2" style={{ color: "coral" }} />
          <span className="fw-bolder fs-6 btn-clr"> Add To Cart</span>
        </Link>
   </div>
 </div>
</div>
         
    </div>
  );
}

export default SingleProduct;