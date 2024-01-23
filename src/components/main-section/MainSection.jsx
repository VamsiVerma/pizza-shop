import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../../container/actions";
import { calculateTimeSpent } from "../helper";
import "./MainSection.css";

function MainSection() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);
  const totalDelivered = useSelector((state) => state.pizza.totalDelivered);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  // Filtering out orders which are in 'Order Picked' state
  const filteredOrders = orders.filter(
    (order) => order.stage !== "Order Picked"
  );

  return (
    <div className="main-section">
      <h2 className="p-2 main">Main Section</h2>
      <table className="p-2 d-flex flex-column main-table">
        <thead>
          <tr className="d-flex">
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total Time Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr className="d-flex" key={order.id}>
              <td>{order.id}</td>
              <td>{order.stage}</td>
              <td>{calculateTimeSpent(order.startTime, currentTime)}</td>
              <td>
                {order.stage !== "Order Ready" && (
                  <button
                    className="d-flex cancel-btn"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Orders Delivered Today: {totalDelivered}</p>
    </div>
  );
}

export default MainSection;
