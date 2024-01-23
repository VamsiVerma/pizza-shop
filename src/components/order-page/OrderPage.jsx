import React, { useState } from "react";
import "./OrderPage.css";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    type: "",
    size: "",
    base: "",
  });

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted");
  };

  return (
    <div id="order-form" className="orderForm m-3">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group d-flex flex-row">
          <label htmlFor="type" className="form-label">
            Type of Pizza
          </label>
          <div className="d-flex flex-column pizzaType">
            <div>
              <input
                type="radio"
                name="type"
                value="Veg"
                className=""
                onChange={onChangeHandler}
                // checked={formData.gender === "male"}
              />
              <label htmlFor="veg">Veg</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                value="Non-veg"
                onChange={onChangeHandler}
                // checked={formData.gender === "female"}
              />
              <label htmlFor="non-veg">Non-Veg</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="size" className="form-label">
            Size of Pizza
          </label>
          <select
            className="form-select"
            name="size"
            onChange={onChangeHandler}
            // value={formData.occupation}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="base" className="form-label">
            Pizza Base
          </label>
          <select
            className="form-select"
            name="base"
            onChange={onChangeHandler}
            // value={formData.occupation}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="thick">Thick</option>
            <option value="thin">Thin</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
