import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../../container/actions";
import "./OrderPage.css";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);
  const [formData, setFormData] = useState({});
  const maxOrders = 10;

  const generateOrderId = () => {
    const lastOrder = orders[orders.length - 1];
    const lastOrderId = lastOrder ? parseInt(lastOrder.id, 10) : 0;
    const newOrderId = (lastOrderId + 1).toString().padStart(3, "0");
    return newOrderId;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const currentInProgressOrders = orders.filter(
      (order) =>
        order.stage === "Order Placed" || order.stage === "Order In Making"
    );

    if (currentInProgressOrders.length >= maxOrders) {
      alert("Not taking any order for now. Maximum order limit reached.");
      return;
    }

    const orderId = generateOrderId();
    const orderWithId = {
      ...formData,
      id: orderId,
      stage: "Order Placed",
      startTime: Date.now(),
    };
    dispatch(placeOrder(orderWithId));
    setFormData({});
  };

  return (
    <div id="order-form" className="orderForm m-3">
      <h2 className="p-2">Place Your Pizza Order</h2>
      <form>
        <div className="form-group">
          <label htmlFor="type" className="form-label">
            Type of Pizza
          </label>
          <select
            className="form-select"
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="size" className="form-label">
            Size of Pizza
          </label>
          <select
            className="form-select"
            name="size"
            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          >
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
            onChange={(e) =>
              setFormData({ ...setFormData, base: e.target.value })
            }
          >
            <option value="thick">Thick</option>
            <option value="thin">Thin</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
