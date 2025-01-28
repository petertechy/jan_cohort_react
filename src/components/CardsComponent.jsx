import React from "react";
import ButtonComponent from "./ButtonComponent";

const CardsComponent = (props) => {
  const triggerAction = () => {
    alert("Working");
  };
  return (
    <>
      <h1 className={props.style}>{props.title}</h1>
     <div className="container-fluid">
     <div className="row border justify-content-center shadow-sm my-4 p-4 gap-3 text-center">
        <div className="col">
          <img
            width={165}
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <ButtonComponent
            title="Edit"
            color="btn btn-warning me-5"
            test={triggerAction}
          />
        </div>
        <div className="col">
          <img
            width={170}
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt=""
          />
          <ButtonComponent
            title="Delete"
            color="btn btn-danger me-5"
            test={triggerAction}
          />
        </div>

        <div className="col">
          <img
            width={200}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
          <ButtonComponent title="More Details" color="btn btn-success" />
        </div>
        <div className="col">
          <img
            width={200}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
          <ButtonComponent title="Retreat" color="btn btn-success" />
        </div>
        <div className="col">
          <img
            width={200}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
          <ButtonComponent title="Update" color="btn btn-success" />
        </div>
      </div>
     </div>
    </>
  );
};

export default CardsComponent;
